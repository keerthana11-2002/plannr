 # Plannr
 
This Plannr is a full-stack web application designed to offer users seamless scheduling and appointment booking functionality. Built with Next.js,React and integrated with powerful tools like Prisma, Neon, Clerk, and Tailwind CSS,Shadcn UI this application is optimized for speed, scalability, and an intuitive user experience. 

# Features

- **User Authentication**: Secure login and signup with Clerk.
- **User Profiles and Customizable Availability**: Users can set up profiles and define their available times for scheduling.
- **Booking System**: Easy-to-use interface for booking meetings based on user availability.
- **Responsive Design**: Tailwind CSS ensures a mobile-friendly and fully responsive layout.
- **Real-Time Data**: All booking and user data is synced in real-time using Prisma and a PostgreSQL database hosted on Neon.

# Tech Stack

- **React** - Frontend JavaScript library.
- **Tailwind CSS** - Utility-first CSS framework for rapid styling.
- **Prisma** - ORM for managing and interacting with the PostgreSQL database.
- **Neon** - Serverless PostgreSQL hosting.
- **Clerk** - Authentication and user management.
- **Shadcn UI** - A set of reusable and customizable UI components.

# Environment Variables

- DATABASE_URL=
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
- CLERK_SECRET_KEY=

- NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up 
