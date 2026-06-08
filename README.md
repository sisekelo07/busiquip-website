# BusiQuip Website

Production-ready Next.js website for BusiQuip Ltd - Enterprise Technology Solutions.

## Features

- ✅ Full responsiveness (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags and structured data
- ✅ Contact forms with email integration
- ✅ Fast performance (Lighthouse optimized)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Professional components library

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: SendGrid API
- **Deployment**: Vercel

## Pages

- **Homepage** (`/`) - Main landing page with solutions overview
- **Solutions** (`/solutions`) - Solutions hub
- **Office Automation** (`/solutions/office-automation`) - Detailed solution page
- **About** (`/about`) - Company story and values
- **Contact** (`/contact`) - Contact form and business hours
- **Blog** - Coming soon

## Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Setup

1. **Clone or download the repository**
   ```bash
   cd busiquip-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add:
   - `SENDGRID_API_KEY` - Your SendGrid API key (free tier available)
   - `CONTACT_FORM_TO_EMAIL` - Email to receive contact form submissions
   - `NEXT_PUBLIC_SITE_URL` - Your domain (e.g., https://busiquip.com)

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Setup (SendGrid - Free Tier)

### Get SendGrid API Key

1. Go to [sendgrid.com](https://sendgrid.com) and sign up (free)
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it `busiquip-website`
5. Select **Restricted Access**
6. Under **Mail Send**, select **Full Access**
7. Copy the API key and paste into `.env.local`

### For Simple Email Forwarding (No SendGrid)

If you prefer not to use SendGrid, modify `/app/api/contact/route.ts` to forward emails to your email service.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/busiquip-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Import"
   - Add environment variables:
     - `SENDGRID_API_KEY`
     - `CONTACT_FORM_TO_EMAIL`
     - `NEXT_PUBLIC_SITE_URL`
   - Click "Deploy"
   - Your site will be live at `busiquip.vercel.app`

3. **Connect your domain**
   - In Vercel dashboard, go to **Settings** → **Domains**
   - Add your domain (e.g., busiquip.com)
   - Follow DNS configuration instructions (usually just update nameservers to Vercel's)
   - Wait up to 24 hours for DNS propagation

### Option 2: AWS / DigitalOcean

For more control, use Docker:

```bash
docker build -t busiquip-website .
docker run -p 3000:3000 busiquip-website
```

Then deploy to AWS ECS, DigitalOcean App Platform, etc.

## Email Form Integration

Contact form automatically:
1. Sends submission to admin email (CONTACT_FORM_TO_EMAIL)
2. Sends confirmation to user
3. Stores data securely
4. Provides real-time feedback

## Performance Optimizations

- Images auto-optimized by Next.js
- Code splitting for faster initial load
- Lazy loading for components
- CSS minification
- JavaScript minification
- CDN delivery via Vercel

## SEO Optimization

- Meta tags and descriptions
- Open Graph tags for social sharing
- XML sitemap ready
- Structured data markup
- Mobile-friendly design
- Fast page speed

## Customization

### Company Information

Edit `/app/layout.tsx` and `/components/Footer.tsx`:
- Company name
- Contact information
- Logo
- Business hours

### Colors & Branding

Edit `/tailwind.config.js`:
- Update color palette
- Modify fonts
- Adjust spacing

### Content

Edit individual page files:
- `/app/page.tsx` - Homepage
- `/app/about/page.tsx` - About page
- `/app/contact/page.tsx` - Contact page
- `/app/solutions/*` - Solution pages

## Support & Maintenance

### Recommended Hosting Maintenance

- Monitor uptime via Vercel dashboard
- Review error logs weekly
- Keep dependencies updated quarterly
- Test contact forms monthly
- Backup content regularly

### Post-Launch Checklist

- [ ] SendGrid configured and tested
- [ ] Domain DNS configured
- [ ] SSL certificate active (auto via Vercel)
- [ ] Google Analytics installed
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] Page speed checked
- [ ] SEO verified

## Troubleshooting

### Contact Form Not Sending

1. Check `SENDGRID_API_KEY` in environment variables
2. Verify API key has **Mail Send** permissions
3. Check email address format in form
4. Review browser console for errors

### Emails Going to Spam

1. Add SPF record: `v=spf1 sendgrid.net ~all`
2. Add DKIM record (from SendGrid)
3. Add DMARC record if needed
4. Use reply-to header

### Slow Page Load

1. Check Vercel Analytics
2. Optimize images (already done)
3. Reduce custom fonts
4. Implement caching headers

## Additional Features (Future)

- [ ] Blog system with CMS
- [ ] Customer portal login
- [ ] Live chat widget
- [ ] Newsletter signup
- [ ] Case study tracking
- [ ] Appointment booking
- [ ] Multi-language support

## License

© 2024 BusiQuip Ltd. All rights reserved.

## Support

For technical support or questions:
- Email: info@busiquip.com
- Phone: (+268) 2404 0156 / 2404 1422
- Hours: Mon-Fri 8:00 AM - 5:00 PM

---

**Ready to go live? Follow the Vercel deployment steps above and your site will be live in 10 minutes!**
