import { Groq } from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const { budget, days, goal } = await req.json();

    if (!budget || !days || !goal) {
      return NextResponse.json(
        { error: "Missing required fields: budget, days, or goal" },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY not configured. Please add it to your .env.local file. Get a free key at https://console.groq.com/keys",
        },
        { status: 500 }
      );
    }

    const prompt = `You are a no-code expert advisor. A beginner has $${budget}, ${days} days, and wants to build: "${goal}".

Provide your recommendation in this EXACT format:

**Best Option:** [Tool name(s)]
**Total Cost:** $[amount]
**Timeline:** [days] days

**Comparison Table:**

| Rank | Tools | Cost | Pros | Cons | Best For |
|------|-------|------|------|------|----------|
| 1 | [Tool names] | $[cost] | [Key advantage] | [Limitation] | [Use case] |
| 2 | [Tool names] | $[cost] | [Key advantage] | [Limitation] | [Use case] |
| 3 | [Tool names] | $[cost] | [Key advantage] | [Limitation] | [Use case] |

**Day-by-Day Plan:**

| Day | Task | Details |
|-----|------|---------|
| 1 | [Task] | [What to do] |
| 2 | [Task] | [What to do] |
| ... | ... | ... |

**Important Notes:**
- [Any limitations or important considerations]

Requirements:
- Use only free or cheap tools (under $${budget} total)
- Be realistic about what can be built in ${days} days
- Include specific tool names (e.g., Glide, Bubble, Softr, Airtable, Zapier)
- Keep tables simple and easy to read
- Be honest about limitations`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 800,
    });

    const recommendation =
      completion.choices[0]?.message?.content ||
      "Unable to generate recommendation. Please try again.";

    return NextResponse.json({ recommendation });
  } catch (error) {
    console.error("Error calling Groq API:", error);
    
    let errorMessage = "Failed to get recommendation. Please try again.";
    let statusCode = 500;
    
    if (error instanceof Error) {
      if (error.message.includes("API key") || error.message.includes("authentication")) {
        errorMessage = "Invalid API key. Please check your GROQ_API_KEY in .env.local";
        statusCode = 401;
      } else if (error.message.includes("rate limit") || error.message.includes("quota")) {
        errorMessage = "API rate limit exceeded. Please try again later.";
        statusCode = 429;
      } else if (error.message.includes("network") || error.message.includes("fetch")) {
        errorMessage = "Network error. Please check your connection and try again.";
        statusCode = 503;
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}

