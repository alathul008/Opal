# Opal

A full-stack web application built with **Next.js 14, React, TypeScript, Prisma, and Tailwind CSS**.

Opal is structured as a modern Next.js application with authentication, dashboard flows, API routes, data persistence, and payment-related functionality. The codebase also uses React Query and Redux for client-side data and state management.

> **Portfolio note:** This repository is shared to demonstrate practical full-stack development, application architecture, and engineering workflow. Production credentials and environment secrets are intentionally excluded.

## ✨ Highlights

- Next.js 14 App Router architecture
- TypeScript-based application development
- Authentication with Clerk
- Dashboard and protected application flows
- API routes and server-side application logic
- Prisma ORM for database access
- Stripe integration for payment-related flows
- React Query for server-state management
- Redux Toolkit for application state
- Radix UI components and Tailwind CSS
- Form handling and validation with React Hook Form and Zod
- Email functionality with Nodemailer

## 🧰 Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 14, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS, Radix UI |
| Authentication | Clerk |
| Database | Prisma |
| State | Redux Toolkit, React Query |
| Payments | Stripe |
| Forms & Validation | React Hook Form, Zod |
| Utilities | Axios, date-fns, Recharts |

## 📁 Project Structure

```text
src/
├── actions/        # Server-side application actions
├── app/             # Next.js routes and application pages
│   ├── api/         # API routes
│   ├── auth/        # Authentication flows
│   ├── dashboard/   # Dashboard application
│   ├── payment/     # Payment-related flows
│   └── preview/     # Preview-related flows
├── components/      # Reusable UI components
├── constants/       # Application constants
├── hooks/           # Custom React hooks
├── lib/             # Shared utilities and integrations
├── react-query/     # React Query configuration/hooks
├── redux/           # Redux state management
└── types/           # TypeScript types
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/alathul008/Opal.git
cd Opal
```

### 2. Install dependencies

Using Bun:

```bash
bun install
```

Or npm:

```bash
npm install
```

### 3. Configure environment variables

Create a local `.env` file with the configuration required for your environment.

**Never commit `.env` or real API keys, database credentials, authentication secrets, or payment secrets.**

### 4. Start the development server

```bash
npm run dev
```

Then open `http://localhost:3000`.

## 🔐 Security

This repository is intended for portfolio and development purposes. Keep all secrets in environment variables or a dedicated secret-management system.

The repository's `.gitignore` excludes environment files while allowing a safe `.env.example` template when one is provided.

## 📌 Development Focus

This project demonstrates experience with:

- Full-stack React/Next.js development
- Authentication and protected application flows
- API and database integration
- State and server-state management
- Payment workflow integration
- Component-driven UI development
- Environment-based configuration

## 📄 License

No license has been declared for this repository. All rights are reserved unless otherwise stated by the repository owner.
