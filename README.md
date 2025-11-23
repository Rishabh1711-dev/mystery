# Unspoken (Mystery Message)

**Unspoken** is an anonymous messaging platform that allows users to send and receive candid feedback, confessions, and questions without revealing their identity. Built with privacy and user experience in mind, it leverages AI to help users break the ice and foster open communication.

## 🚀 Features

* **Anonymous Messaging:** Users can sign up to receive anonymous messages from anyone via a unique public link.
* **AI-Powered Suggestions:** Integrated with **Google Gemini AI** to suggest creative and unique message ideas for senders.
* **User Dashboard:** A personal dashboard to view, manage, and delete received messages.
* **Toggle Message Acceptance:** Users can easily enable or disable receiving new messages at any time.
* **Secure Authentication:** robust sign-up and sign-in system using **NextAuth.js**, complete with email verification (OTP).
* **Responsive UI:** A modern, mobile-first interface built with **Tailwind CSS** and **Shadcn UI**.

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Database:** [MongoDB](https://www.mongodb.com/) (via Mongoose)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & [Framer Motion](https://www.framer.com/motion/)
* **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
* **Email Service:** [Resend](https://resend.com/) & [React Email](https://react.email/)
* **Form Handling:** React Hook Form & Zod

## ⚙️ Environment Variables

To run this project locally, you will need to add the following environment variables to your `.env` file in the root directory:

```env
# Database Connection
MONGODB_URI=your_mongodb_connection_string

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# API Keys
RESEND_API_KEY=your_resend_api_key
GEMINI_API_KEY=your_google_gemini_api_key

# Email Configuration
# Note: Ensure this email is verified in your Resend dashboard
FROM_EMAIL=onboarding@resend.dev



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
