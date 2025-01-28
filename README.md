# Invoice Management Application

## Overview
A modern, full-stack invoice management application built with Next.js 14, featuring real-time data updates, user authentication, and a responsive dashboard interface. The application is deployed on Vercel and allows users to manage invoices, track customer information, and monitor revenue.

## Live Demo
[View Live Application](https://invoice-app-eight-chi.vercel.app/dashboard)

## Features
- **Dashboard Overview**
  - Revenue metrics and trends
  - Recent customer activity
  - Invoice status tracking
  - Real-time data updates

- **Invoice Management**
  - Create and edit invoices
  - Track payment status
  - Filter and search functionality
  - Automatic calculations

- **Customer Management**
  - Customer database
  - Customer activity history
  - Contact information storage

- **Authentication & Security**
  - Secure user authentication
  - Role-based access control
  - Protected API routes

## Tech Stack
- **Frontend**
  - Next.js 14
  - React
  - Tailwind CSS
  - TypeScript

- **Backend**
  - Vercel Postgres
  - Next.js API Routes
  - Server Actions

- **Authentication**
  - NextAuth.js
  - Secure password hashing

- **Deployment**
  - Vercel Platform
  - PostgreSQL Database
  - Environment Variable Management

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm, npm or yarn
- PostgreSQL database

### Installation
1. Clone the repository:
```bash
git clone https://github.com/jvc-byte/invoice-app.git
cd invoice-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
AUTH_SECRET=
```

4. Run the development server:
```bash
pnpm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Database Setup
1. Create the necessary database tables:
```bash
pnpm run db:setup
```

2. Seed the database with initial data:
```bash
pnpm run db:seed
```

## Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Next.js team for the amazing framework
- Vercel for hosting and database services
- All contributors who help improve the application

## Contact
For any queries or support, please open an issue in the repository.