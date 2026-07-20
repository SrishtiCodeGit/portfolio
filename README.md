# Srishti Chauhan — Portfolio

A single-page resume/portfolio site built with React + Vite, animated with Framer Motion, and a Node
(Vercel serverless function) contact form that emails you via Nodemailer.

## Stack

- **Frontend:** React 19, Vite, Framer Motion, react-icons
- **Backend:** Vercel serverless function (`api/contact.js`) using Nodemailer + Gmail SMTP
- **Content:** all resume content lives in [`src/data/resumeData.js`](src/data/resumeData.js) — edit that
  one file to update education, experience, projects, skills, and leadership sections

## Before you edit

A few placeholders need your real info:

- `src/data/resumeData.js` — `profile.linkedin` and `profile.github` are placeholder URLs (`https://linkedin.com`, `https://github.com`). Replace with your actual profile URLs.
- Each entry in `projects` has `link: '#'` — point these at your real GitHub repos / live app URLs.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` (or `5174` if configured). The contact form's `/api/contact` endpoint
is a Vercel serverless function — `npm run dev` (plain Vite) does **not** run it, so submitting the form
locally will show an error. To test the form locally, install the Vercel CLI and run:

```bash
npm i -g vercel
vercel dev
```

## Setting up the contact form email

The contact form sends email via Gmail SMTP + Nodemailer. You need a **Gmail App Password** (not your
regular Gmail password):

1. Enable 2-Step Verification on the Gmail account you want to send from: https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords (choose "Mail" as the app)
3. Copy the 16-character password Google gives you

Then create a `.env` file locally (see `.env.example`):

```bash
cp .env.example .env
```

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password
CONTACT_TO_EMAIL=your-gmail@gmail.com   # optional, defaults to EMAIL_USER
```

## Deploying to Vercel

```bash
npm i -g vercel@latest
vercel
```

After linking the project, add the same environment variables in the Vercel dashboard
(Project → Settings → Environment Variables), or via CLI:

```bash
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add CONTACT_TO_EMAIL
```

Then deploy to production:

```bash
vercel --prod
```

Vite auto-detects as the framework; the `api/contact.js` file is picked up automatically as a
serverless function — no extra config needed.

## Project structure

```
src/
  data/resumeData.js   # all resume content — edit this to update the site
  components/          # one component + css file per section
  App.jsx              # assembles all sections
api/
  contact.js           # Vercel serverless function, sends contact form emails
```
