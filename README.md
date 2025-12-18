# BuildFast Advisor - Complete Documentation

## 🚀 Overview

**BuildFast Advisor** is an intelligent, AI-powered no-code tool recommender that helps entrepreneurs, developers, and creators find the perfect combination of tools and strategies to build their projects quickly and efficiently. Whether you're building a mobile app, web platform, automation workflow, or any digital product, BuildFast Advisor analyzes your budget, timeline, and goals to provide personalized, actionable recommendations.

### What Makes BuildFast Advisor Special?

- **AI-Powered Intelligence**: Leverages Groq's lightning-fast LLM (Llama 3.3 70B) to provide intelligent, context-aware recommendations
- **Budget-Conscious**: Every recommendation respects your financial constraints, helping you maximize value
- **Time-Optimized**: Plans are tailored to your available timeline, from quick 3-day prototypes to comprehensive 30-day builds
- **No-Code Focus**: Specializes in recommending no-code and low-code tools that require minimal technical expertise
- **Google Sheets Integration**: One-click export to Google Sheets for easy project management and collaboration
- **Beautiful, Modern UI**: Dark gradient design with glassmorphism effects for an exceptional user experience

## 📋 Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Installation Guide](#installation-guide)
4. [Configuration](#configuration)
5. [Usage Guide](#usage-guide)
6. [API Documentation](#api-documentation)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)
10. [License](#license)

## ✨ Features

### Core Functionality

- **Smart Input System**: Three simple inputs (Budget, Days, Goal) generate comprehensive recommendations
- **AI-Powered Analysis**: Advanced LLM analyzes your requirements and suggests optimal tool combinations
- **Comparison Tables**: Side-by-side comparison of top 3 tool options with pros, cons, and use cases
- **Day-by-Day Plans**: Detailed, actionable daily tasks to guide your project from start to finish
- **Cost Breakdown**: Transparent pricing information for all recommended tools
- **Limitations & Considerations**: Honest assessment of what's possible within your constraints

### User Experience Features

- **Real-Time Processing**: Fast AI responses with visual loading indicators
- **Error Handling**: Comprehensive error messages with retry functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode UI**: Beautiful gradient theme with glassmorphism effects
- **Copy to Google Sheets**: Export recommendations in TSV format for easy project management
- **Formatted Output**: Clean, readable markdown tables with proper styling

### Technical Features

- **Next.js 14 App Router**: Modern React framework with server-side rendering
- **TypeScript**: Full type safety for reliable code
- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **Groq SDK Integration**: Fast, efficient AI API calls
- **Markdown Rendering**: Beautiful formatted output with react-markdown
- **Environment Variables**: Secure API key management

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18.0.0 or higher** - [Download Node.js](https://nodejs.org/)
- **npm 9.0.0 or higher** (comes with Node.js)
- **Git** (optional, for version control)
- **A modern web browser** (Chrome, Firefox, Safari, or Edge)

### System Requirements

- **Operating System**: macOS, Windows, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free
- **Internet Connection**: Required for API calls and package installation

## 📦 Installation Guide

### Step 1: Clone or Download the Repository

If you have Git installed:
```bash
git clone <repository-url>
cd aiplaform2choose
```

Or download the ZIP file and extract it to your desired location.

### Step 2: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
npm install
```

This will install:
- Next.js 14.2.5
- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.4
- Groq SDK 0.37.0
- react-markdown 10.1.0
- And all other dependencies

**Expected installation time**: 1-3 minutes depending on your internet speed.

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

Or on Windows:
```bash
type nul > .env.local
```

Add your Groq API key:
```
GROQ_API_KEY=your_groq_api_key_here
```

**Important**: Never commit `.env.local` to version control. It's already in `.gitignore`.

### Step 4: Get Your Groq API Key

1. Visit [console.groq.com/keys](https://console.groq.com/keys)
2. Sign up or log in (free account)
3. Click "Create API Key"
4. Copy the key (starts with `gsk_`)
5. Paste it into your `.env.local` file

**Note**: Groq offers free API access with generous rate limits, perfect for development and testing.

### Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.35
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 2.3s
```

### Step 6: Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `GROQ_API_KEY` | Your Groq API key | Yes | None |

### Customization Options

#### Changing the Port

Edit `package.json`:
```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

#### Modifying AI Model

Edit `app/api/recommend/route.ts`:
```typescript
model: 'llama-3.3-70b-versatile', // Change to your preferred model
```

Available models:
- `llama-3.3-70b-versatile` (default, recommended)
- `llama-3.1-70b-versatile`
- `mixtral-8x7b-32768`

#### Adjusting Response Length

Edit `app/api/recommend/route.ts`:
```typescript
max_tokens: 800, // Increase for longer responses
```

## 📖 Usage Guide

### Basic Usage

1. **Enter Your Budget**: Type your available budget in USD (e.g., 100, 500, 1000)
2. **Set Your Timeline**: Enter the number of days you have available (e.g., 3, 7, 14, 30)
3. **Describe Your Goal**: Write what you want to build (e.g., "a habit tracker app", "an e-commerce site for handmade jewelry")
4. **Get Recommendations**: Click "Show me the best way" and wait for AI analysis
5. **Review Results**: Examine the comparison table, day-by-day plan, and important notes
6. **Export to Sheets**: Click "Copy to Sheets" to export to Google Sheets

### Example Use Cases

#### Example 1: Quick MVP
- **Budget**: $50
- **Days**: 5
- **Goal**: "a simple landing page for my consulting business"
- **Result**: Recommendations for Carrd, Webflow, or WordPress with 5-day implementation plan

#### Example 2: Mobile App
- **Budget**: $200
- **Days**: 14
- **Goal**: "a mobile app for tracking fitness goals with social features"
- **Result**: Recommendations for Glide, Adalo, or Bubble with detailed 14-day roadmap

#### Example 3: Automation Workflow
- **Budget**: $100
- **Days**: 7
- **Goal**: "an automated email marketing system for my small business"
- **Result**: Recommendations for Zapier, Make, or Airtable with step-by-step automation guide

### Advanced Tips

- **Be Specific**: More detailed goals yield better recommendations (e.g., "a task management app with team collaboration" vs "an app")
- **Realistic Budgets**: Set realistic budgets based on tool pricing (most no-code tools range from $0-$50/month)
- **Timeline Planning**: Consider buffer time for testing and iteration
- **Multiple Iterations**: Try different combinations to explore options

## 🔌 API Documentation

### Endpoint: `/api/recommend`

**Method**: POST

**Request Body**:
```json
{
  "budget": 100,
  "days": 7,
  "goal": "a habit tracker app"
}
```

**Response**:
```json
{
  "recommendation": "**Best Option:** Glide, Google Sheets\n**Total Cost:** $0\n..."
}
```

**Error Responses**:
- `400`: Missing required fields
- `401`: Invalid API key
- `429`: Rate limit exceeded
- `500`: Server error

### Rate Limits

Groq API free tier includes:
- Generous rate limits for development
- Fast response times (< 2 seconds)
- No credit card required

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel offers seamless Next.js deployment:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variable: `GROQ_API_KEY`
   - Click "Deploy"

3. **Your app is live!** Vercel provides a free `.vercel.app` domain.

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, or
   - Connect your GitHub repository
   - Add build command: `npm run build`
   - Add publish directory: `.next`
   - Add environment variable: `GROQ_API_KEY`

### Deploy to Railway

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

3. Add environment variable in Railway dashboard.

### Environment Variables in Production

Always set `GROQ_API_KEY` in your hosting platform's environment variables section. Never hardcode API keys in your code.

## 🐛 Troubleshooting

### Common Issues

#### Issue: "Cannot find module" error
**Solution**: 
```bash
rm -rf .next node_modules
npm install
npm run dev
```

#### Issue: API key not working
**Solution**:
1. Verify key in `.env.local` (no quotes, no spaces)
2. Restart dev server
3. Check key at console.groq.com

#### Issue: Port 3000 already in use
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

#### Issue: Build errors
**Solution**:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### Issue: Slow API responses
**Solution**:
- Check internet connection
- Verify Groq API status
- Try reducing `max_tokens` in API route

### Getting Help

- Check the [GitHub Issues](https://github.com/your-repo/issues)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Check [Groq API Documentation](https://console.groq.com/docs)

## 🤝 Contributing

We welcome contributions! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful variable names
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Groq** for providing fast, free AI API access
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Open Source Community** for inspiration and support

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Contact: [your-email@example.com]
- Documentation: [your-docs-url]

---

**Built with ❤️ using Next.js, TypeScript, and Groq AI**
