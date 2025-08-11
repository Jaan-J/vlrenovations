# Overview

VL Renovation is a professional home renovation company website serving the Mississauga and Greater Toronto Area (GTA). The application is a full-stack web solution featuring a modern React frontend with a Node.js Express backend, designed to showcase renovation services, display project portfolios, and handle customer inquiries through a contact form system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Projects, Services, and Contact
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens (charcoal, deep orange, light gray color scheme)
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage class)
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Development**: Custom Vite middleware integration for seamless full-stack development

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory using Drizzle and Zod
- **Current Implementation**: In-memory storage for development with structure ready for PostgreSQL migration
- **Tables**: Users table for future authentication and ContactSubmissions table for inquiry management

## Authentication and Authorization
- **Current State**: Basic user schema defined but authentication not yet implemented
- **Architecture**: Prepared for session-based authentication with user management capabilities
- **Security**: Ready for implementation with proper password hashing and session handling

## External Dependencies
- **Database**: Neon Database serverless PostgreSQL (configured but not actively used)
- **Font Services**: Google Fonts (Inter font family)
- **Icon Libraries**: Font Awesome 6 for comprehensive icon coverage
- **Development Tools**: Replit integration with development banner and error handling
- **UI Components**: Extensive Radix UI primitive collection for accessible component foundation
- **Validation**: Zod for runtime type checking and form validation across the stack