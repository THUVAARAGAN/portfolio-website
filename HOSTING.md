# Hosting Your Portfolio (Thuvaaragan)

This guide walks you through deploying your portfolio online for free using **Vercel**.

## 1. Add Your CV for Download

Copy your CV PDF into the project so the "Download CV" button works:

- **From:** Your CV file (e.g. `Thuvaaragan_cv_update.pdf`)
- **To:** `portfolio-website/public/Thuvaaragan_cv_update.pdf`

If your file has a different name, either rename it to `Thuvaaragan_cv_update.pdf` or update the link in `components/Intro.tsx` (the `href` on the "Download CV" button).

## 2. Push Your Code to GitHub

If you haven’t already:

```bash
git init
git add .
git commit -m "Thuvaaragan AI/ML portfolio"
git branch -M main
git remote add origin https://github.com/Thuvaaragan/portfolio-website.git
git push -u origin main
```

Create the repo on [github.com](https://github.com/new) first if needed, then use your actual repo URL.

## 3. Deploy on Vercel (Free)

1. Go to **[vercel.com](https://vercel.com)** and sign in with GitHub.
2. Click **“Add New…” → “Project”**.
3. **Import** your `portfolio-website` repository.
4. Leave settings as default (Framework: Next.js) and click **Deploy**.
5. Wait 1–2 minutes. Vercel will give you a URL like `https://portfolio-website-xxx.vercel.app`.

Your site is now live. Every push to `main` will trigger a new deployment.

## 4. (Optional) Contact Form – Resend

The contact form uses [Resend](https://resend.com). To receive emails in production:

1. Sign up at [resend.com](https://resend.com).
2. Add and verify your domain (or use their test domain for development).
3. Create an API key in the Resend dashboard.
4. In your Vercel project: **Settings → Environment Variables**:
   - Name: `RESEND_API_KEY`
   - Value: your Resend API key
5. Redeploy the project so the new variable is applied.

Without `RESEND_API_KEY`, the form may fail in production; the rest of the site still works.

## 5. (Optional) Custom Domain

In the Vercel project:

1. Go to **Settings → Domains**.
2. Add your domain (e.g. `thuvaaragan.com`).
3. Follow Vercel’s instructions to add the DNS records at your registrar.

---

**Summary:** Copy CV to `public/`, push to GitHub, import repo on Vercel, deploy. Add `RESEND_API_KEY` if you want the contact form to work in production.
