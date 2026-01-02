# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions via email.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Set Up Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Mohiddin Sharieff)

4. Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

5. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** (you'll need this later)

## Step 5: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values with your actual EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

3. **Important**: Never commit your `.env` file to git! It should already be in `.gitignore`

## Step 6: Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact form on your portfolio
3. Fill out and submit the form
4. Check your email inbox - you should receive the message!

## Troubleshooting

- **Form not sending?** Check the browser console for error messages
- **Environment variables not working?** Make sure you restart the dev server after creating/updating `.env`
- **Email not received?** Check your spam folder and verify EmailJS service is connected correctly
- **Rate limit exceeded?** Free tier allows 200 emails/month. Upgrade if needed.

## Security Note

The public key is safe to expose in frontend code, but make sure your `.env` file is in `.gitignore` to avoid accidentally committing sensitive information.

