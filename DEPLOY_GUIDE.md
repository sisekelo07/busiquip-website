# 🚀 BusiQuip Website - Live Deployment Guide

## Deploy to Production in 5 Minutes ⚡

This guide will get your BusiQuip website live on the internet.

---

## STEP 1: Create GitHub Account (2 minutes)

If you already have GitHub, skip to Step 2.

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Create account with your email
4. Verify email address
5. Done ✓

---

## STEP 2: Push Code to GitHub (2 minutes)

1. **Open Terminal/Command Prompt** in the busiquip-website folder

2. **Initialize git** (if not already done):
   ```bash
   git init
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

3. **Create repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it: `busiquip-website`
   - Click "Create repository"

4. **Add and push your code**:
   ```bash
   git add .
   git commit -m "Initial commit - BusiQuip website"
   git remote add origin https://github.com/YOUR_USERNAME/busiquip-website.git
   git branch -M main
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

5. Done ✓

---

## STEP 3: Create Vercel Account (1 minute)

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Select **Sign up with GitHub**
4. Authorize Vercel
5. Done ✓

---

## STEP 4: Deploy to Vercel (2 minutes)

1. **In Vercel Dashboard**:
   - Click **Add New Project**
   - Select your `busiquip-website` repository from GitHub
   - Click **Import**

2. **Configure Environment Variables**:
   - You'll see a form for environment variables
   - Add these three:
     ```
     SENDGRID_API_KEY = your_sendgrid_key_here
     CONTACT_FORM_TO_EMAIL = info@busiquip.com
     NEXT_PUBLIC_SITE_URL = https://busiquip-website.vercel.app
     ```
   - (See "Get SendGrid API Key" section below)

3. **Click Deploy** button
   - Wait 2-3 minutes
   - Your site is LIVE! 🎉

4. You'll get a URL like: `https://busiquip-website.vercel.app`

5. Done ✓

---

## STEP 5: Connect Your Domain (Optional but Recommended)

### If you have a domain (busiquip.com, busiquip.sz, etc.):

1. **In Vercel Dashboard**:
   - Go to **Settings** → **Domains**
   - Enter your domain: `busiquip.com`
   - Click **Add**

2. **Update DNS** at your domain registrar:
   - Log into wherever you bought your domain (GoDaddy, Namecheap, etc.)
   - Find **DNS Settings** or **Nameservers**
   - Change nameservers to Vercel's:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ns3.vercel-dns.com
     ```
   - Save changes
   - Wait 24 hours for DNS to update

3. Your site is now at `https://busiquip.com` ✓

---

## STEP 6: Set Up Email (SendGrid Free Tier)

### Get SendGrid API Key:

1. Go to [sendgrid.com](https://sendgrid.com)
2. Click **Sign Up** (free account)
3. Verify email
4. Go to **Settings** → **API Keys**
5. Click **Create API Key**
6. Name it: `busiquip-website`
7. Select: **Restricted Access**
8. Check **Mail Send** → **Full Access**
9. Create key and copy it
10. Paste into Vercel environment variables (Step 4)

---

## STEP 7: Test Everything (1 minute)

1. **Visit your live site**:
   - `https://busiquip-website.vercel.app` (or your custom domain)

2. **Test contact form**:
   - Fill out contact form
   - Submit
   - Should see "Thank you" message

3. **Check email**:
   - Look in your email inbox (info@busiquip.com)
   - Should receive contact form submission
   - May take 1-2 minutes

4. Done ✓

---

## Total Time: ~10 minutes ⏱️

---

## Troubleshooting

### Contact form not sending?

1. **Check SendGrid API Key**:
   - In Vercel: Settings → Environment Variables
   - Make sure `SENDGRID_API_KEY` is there
   - API key should start with `SG.`

2. **Test in browser**:
   - Fill form and submit
   - Open browser console (F12)
   - Look for errors

3. **Check email spam folder**:
   - May go to spam initially
   - Add `noreply@busiquip.com` to contacts

### Site loads slow?

- First visit takes 30 seconds (Vercel cold start)
- Subsequent visits are instant
- This is normal and improves over time

### DNS not updating?

- Can take 24 hours
- Check status at [whatsmydns.net](https://whatsmydns.net)
- Paste your domain to see global DNS status

---

## Next Steps (After Going Live)

### Immediate:
- [ ] Share website with team
- [ ] Test all pages on mobile/desktop
- [ ] Confirm email submissions working
- [ ] Get feedback

### Week 1:
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn / social media
- [ ] Monitor form submissions

### Week 2:
- [ ] Add your company logo (replace BQ logo)
- [ ] Add your company photos
- [ ] Update all phone numbers
- [ ] Customize testimonials with real clients

---

## Support

**Need help?**
- Check README.md for technical details
- Contact: info@busiquip.com
- Phone: (+268) 2404 0156 / 2404 1422

---

## Success Checklist

- [ ] GitHub account created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Website deployed to Vercel
- [ ] Environment variables set
- [ ] Email is working
- [ ] Domain connected (optional)
- [ ] Contact form tested
- [ ] Live website accessible

**You're done! Your BusiQuip website is live! 🚀**
