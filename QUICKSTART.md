# BuildFast Advisor - Quick Start Guide

## ⚡ Get Up and Running in 5 Minutes

This guide will help you get BuildFast Advisor running on your local machine in just a few minutes.

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js 18+ installed ([Download here](https://nodejs.org/))
- ✅ A code editor (VS Code recommended)
- ✅ Internet connection
- ✅ 5 minutes of time

## Step-by-Step Setup

### 1️⃣ Install Dependencies (1 minute)

Open your terminal in the project folder and run:

```bash
npm install
```

Wait for installation to complete. You'll see a success message when done.

### 2️⃣ Get Your API Key (2 minutes)

1. Go to [console.groq.com/keys](https://console.groq.com/keys)
2. Sign up (free, no credit card needed)
3. Click "Create API Key"
4. Copy the key (it starts with `gsk_`)

### 3️⃣ Configure Environment (30 seconds)

Create a file named `.env.local` in the project root:

**On Mac/Linux:**
```bash
echo "GROQ_API_KEY=your_key_here" > .env.local
```

**On Windows:**
```bash
echo GROQ_API_KEY=your_key_here > .env.local
```

Replace `your_key_here` with your actual Groq API key.

### 4️⃣ Start the Server (30 seconds)

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.3s
- Local: http://localhost:3000
```

### 5️⃣ Open in Browser (10 seconds)

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎉 You're Done!

Try it out:
1. Enter Budget: `100`
2. Enter Days: `7`
3. Enter Goal: `a simple task tracker`
4. Click "Show me the best way"

## Common First-Time Issues

### "Module not found" error?
```bash
rm -rf node_modules .next
npm install
```

### Port 3000 already in use?
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### API key not working?
- Make sure `.env.local` is in the root folder
- No quotes around the key
- Restart the dev server after adding the key

## Next Steps

- Read the [Full README](README.md) for detailed documentation
- Check out [USER_MANUAL.md](USER_MANUAL.md) for usage guide
- See [TUTORIAL.md](TUTORIAL.md) for advanced features

## Quick Commands Reference

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

---

**Need help?** Check the troubleshooting section in README.md or open an issue on GitHub.

