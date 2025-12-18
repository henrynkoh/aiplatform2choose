"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [budget, setBudget] = useState("100");
  const [days, setDays] = useState("7");
  const [goal, setGoal] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!goal.trim()) {
      setError("Please tell us what you want to build!");
      return;
    }

    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          budget: Number(budget),
          days: Number(days),
          goal: goal.trim(),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const errorMessage = errorData.error || `Server error (${res.status})`;
        throw new Error(errorMessage);
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setResult(data.recommendation || "No recommendation available.");
    } catch (err) {
      let errorMessage = "Something went wrong. Please try again.";
      
      if (err instanceof Error) {
        errorMessage = err.message;
        
        // Provide helpful messages for common errors
        if (err.message.includes("GROQ_API_KEY")) {
          errorMessage = "API key not configured. Please check your .env.local file.";
        } else if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (err.message.includes("Server error")) {
          errorMessage = "Server error. Please try again in a moment.";
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Function to parse markdown tables and convert to TSV for Google Sheets
  const convertToGoogleSheets = (markdown: string): string => {
    const lines: string[] = [];
    
    // Helper function to clean text and prevent formula injection
    const cleanCell = (text: string): string => {
      if (!text) return '';
      // Remove markdown formatting
      let cleaned = text
        .replace(/\*\*/g, '') // Remove bold
        .replace(/\*/g, '') // Remove italic
        .replace(/`/g, '') // Remove code
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links, keep text
        .trim();
      
      // Prevent formula injection by prefixing with ' if starts with =, +, -, @
      if (/^[=+\-@]/.test(cleaned)) {
        cleaned = "'" + cleaned;
      }
      
      return cleaned;
    };
    
    // Extract summary info
    const bestOptionMatch = markdown.match(/\*\*Best Option:\*\*\s*(.+?)(?:\n|$)/);
    const costMatch = markdown.match(/\*\*Total Cost:\*\*\s*(.+?)(?:\n|$)/);
    const timelineMatch = markdown.match(/\*\*Timeline:\*\*\s*(.+?)(?:\n|$)/);
    
    if (bestOptionMatch || costMatch || timelineMatch) {
      lines.push("SUMMARY");
      lines.push(""); // Empty row for spacing
      if (bestOptionMatch) lines.push(`Best Option\t${cleanCell(bestOptionMatch[1])}`);
      if (costMatch) lines.push(`Total Cost\t${cleanCell(costMatch[1])}`);
      if (timelineMatch) lines.push(`Timeline\t${cleanCell(timelineMatch[1])}`);
      lines.push(""); // Empty row for spacing
      lines.push(""); // Extra spacing
    }
    
    // Extract Comparison Table
    const comparisonTableMatch = markdown.match(/\*\*Comparison Table:\*\*\s*([\s\S]*?)(?=\*\*|$)/);
    if (comparisonTableMatch) {
      lines.push("COMPARISON TABLE");
      lines.push(""); // Empty row for spacing
      const tableText = comparisonTableMatch[1];
      const tableRows = tableText.match(/\|(.+)\|/g);
      if (tableRows) {
        let isFirstRow = true;
        tableRows.forEach((row) => {
          // Skip separator row (contains only dashes)
          if (row.match(/^\|[\s\-:]+\|$/)) return;
          
          const cells = row.split('|')
            .map(c => c.trim())
            .filter(c => c && !c.match(/^[\-:]+$/)); // Filter out separator cells
          
          if (cells.length > 0) {
            // Clean and format cells
            const cleanedCells = cells.map(cleanCell);
            lines.push(cleanedCells.join('\t'));
            isFirstRow = false;
          }
        });
      }
      lines.push(""); // Empty row for spacing
      lines.push(""); // Extra spacing
    }
    
    // Extract Day-by-Day Plan
    const dayPlanMatch = markdown.match(/\*\*Day-by-Day Plan:\*\*\s*([\s\S]*?)(?=\*\*|$)/);
    if (dayPlanMatch) {
      lines.push("DAY-BY-DAY PLAN");
      lines.push(""); // Empty row for spacing
      const tableText = dayPlanMatch[1];
      const tableRows = tableText.match(/\|(.+)\|/g);
      if (tableRows) {
        tableRows.forEach((row) => {
          // Skip separator row
          if (row.match(/^\|[\s\-:]+\|$/)) return;
          
          const cells = row.split('|')
            .map(c => c.trim())
            .filter(c => c && !c.match(/^[\-:]+$/)); // Filter out separator cells
          
          if (cells.length > 0) {
            const cleanedCells = cells.map(cleanCell);
            lines.push(cleanedCells.join('\t'));
          }
        });
      }
      lines.push(""); // Empty row for spacing
      lines.push(""); // Extra spacing
    }
    
    // Extract Important Notes
    const notesMatch = markdown.match(/\*\*Important Notes:\*\*\s*([\s\S]*?)(?=\*\*|$)/);
    if (notesMatch) {
      lines.push("IMPORTANT NOTES");
      lines.push(""); // Empty row for spacing
      const notes = notesMatch[1].trim();
      const noteLines = notes
        .split('\n')
        .map(line => line.replace(/^-\s*/, '').trim())
        .filter(line => line && !line.match(/^[\-:]+$/));
      
      noteLines.forEach(note => {
        lines.push(cleanCell(note));
      });
    }
    
    return lines.join('\n');
  };

  const handleCopyToSheets = async () => {
    if (!result) return;
    
    try {
      const formattedData = convertToGoogleSheets(result);
      await navigator.clipboard.writeText(formattedData);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = convertToGoogleSheets(result);
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (e) {
        console.error('Fallback copy failed:', e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            BuildFast Advisor
          </h1>
          <p className="text-xl text-indigo-200 font-medium">
            Your No-Code Shortcut to Building Faster
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-indigo-200 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Budget (USD)
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-lg text-white placeholder:text-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="100"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-200 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Days Available
              </label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-lg text-white placeholder:text-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:bg-white/20 transition-all backdrop-blur-sm"
                placeholder="7"
                min="1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-indigo-200 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              What do you want to build?
            </label>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-lg h-32 resize-none text-white placeholder:text-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 focus:bg-white/20 transition-all backdrop-blur-sm"
              placeholder="e.g., a habit tracker with reminders, a real estate ROI calculator, a recipe planner for college students..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-5 rounded-xl text-xl transition-all duration-300 disabled:cursor-not-allowed shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Analyzing your options...</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Show me the best way
              </>
            )}
          </button>

          {error && (
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-red-400/50 text-red-100 px-6 py-5 rounded-xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-500/30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-red-100 flex items-center gap-2">
                    <span>Oops! Something went wrong</span>
                  </h3>
                  <p className="text-sm text-red-200 mb-4 leading-relaxed">{error}</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setError("");
                        setResult("");
                      }}
                      className="px-4 py-2 bg-red-500/30 hover:bg-red-500/40 border border-red-400/50 rounded-lg text-sm font-medium text-red-100 transition-colors"
                    >
                      Dismiss
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-indigo-500/30 hover:bg-indigo-500/40 border border-indigo-400/50 rounded-lg text-sm font-medium text-indigo-100 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-8 p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-white/30 rounded-2xl shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">
                    Your Personalized Plan
                  </h2>
                </div>
                <button
                  onClick={handleCopyToSheets}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                  title="Copy to Google Sheets"
                >
                  {copied ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy to Sheets</span>
                    </>
                  )}
                </button>
              </div>
              {copied && (
                <div className="mb-4 p-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-400/50 rounded-xl text-green-100 shadow-lg animate-fade-in">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-green-100 mb-2">Data copied to clipboard!</p>
                      <div className="text-xs text-green-200/90 space-y-1">
                        <p><strong>Steps:</strong></p>
                        <ol className="list-decimal list-inside ml-2 space-y-1">
                          <li>Open Google Sheets</li>
                          <li>Click cell A1 (or any starting cell)</li>
                          <li>Paste: <kbd className="bg-green-600/30 px-1.5 py-0.5 rounded text-xs">Ctrl+V</kbd> (Windows) or <kbd className="bg-green-600/30 px-1.5 py-0.5 rounded text-xs">Cmd+V</kbd> (Mac)</li>
                          <li>Data will auto-format into columns</li>
                          <li>Adjust column widths if text is truncated (double-click column borders)</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-white/90 leading-relaxed prose prose-sm max-w-none prose-invert prose-headings:text-white prose-strong:text-white prose-th:text-indigo-200 prose-td:text-white/80">
                <ReactMarkdown
                  components={{
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-6 rounded-xl border-2 border-white/20 shadow-xl">
                        <table
                          className="min-w-full divide-y divide-white/10"
                          {...props}
                        />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead
                        className="bg-gradient-to-r from-indigo-600/40 to-purple-600/40 backdrop-blur-sm"
                        {...props}
                      />
                    ),
                    tbody: ({ node, ...props }) => (
                      <tbody
                        className="bg-white/5 divide-y divide-white/10"
                        {...props}
                      />
                    ),
                    tr: ({ node, ...props }) => (
                      <tr className="hover:bg-white/10 transition-colors" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="px-6 py-4 text-left text-xs font-bold text-indigo-200 uppercase tracking-wider"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="px-6 py-4 text-sm text-white/90"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold mt-8 mb-4 text-white flex items-center gap-2 pb-2 border-b border-white/20" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="mb-4 text-white/90 leading-relaxed" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold text-white bg-indigo-500/20 px-1.5 py-0.5 rounded" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2 ml-2" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="ml-2 text-white/90" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-white/10 px-2 py-1 rounded text-sm font-mono text-indigo-200" {...props} />
                    ),
                  }}
                >
                  {result}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <p className="text-indigo-200/80 text-sm font-medium">
            Get instant recommendations for no-code tools and step-by-step plans
            tailored to your budget and timeline.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-indigo-300/60">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free to use
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Instant results
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              AI-powered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

