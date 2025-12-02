This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



backend/
│
├── package.json
├── .env
├── .gitignore
│
└── src/
    ├── server.js
    ├── app.js
    │
    ├── config/
    │   └── db.js
    │
    ├── models/
    ├── controllers/
    ├── routes/
    ├── middleware/
    └── utils/


backend/
└── src/
    ├── app.js
    ├── config/db.js
    ├── middleware/authMiddleware.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── accountRoutes.js
    │   ├── transactionRoutes.js
    │   ├── transferRoutes.js
    │   └── cardRoutes.js
    │
    ├── controllers/
    │   ├── authController.js
    │   ├── accountController.js
    │   ├── transactionController.js
    │   ├── transferController.js
    │   └── cardController.js
    │
    └── models/
        ├── User.js
        ├── Account.js
        ├── Transaction.js
        ├── Transfer.js
        └── Card.js



frontend/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── about/page.tsx
│   ├── features/page.tsx
│   ├── accounts/page.tsx
│   ├── loans/page.tsx
│   ├── cards/page.tsx
│   ├── pricing/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   │
│   ├── login/page.tsx
│   ├── register/page.tsx
│   │
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── accounts/page.tsx
│   │   ├── transactions/page.tsx
│   │   ├── transfers/page.tsx
│   │   ├── cards/page.tsx
│   │   └── settings/page.tsx
│   │
│   └── (shared components used by all pages)
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── DashboardSidebar.tsx
│   ├── AccountCard.tsx
│   ├── TransactionTable.tsx
│   ├── TransferForm.tsx
│   └── StatsCard.tsx
│
├── utils/
│   ├── api.js
│   └── auth.js
│
├── styles/
│   └── globals.css
│
└── public/
    ├── images/
    └── icons/
