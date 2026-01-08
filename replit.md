# Edunetic India

An AI-powered educational platform built with Next.js, providing cutting-edge learning paths for tomorrow's innovators in India.

## Overview
- **Purpose**: Educational platform for courses and learning
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS with Radix UI components
- **Current State**: Development ready

## Project Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Home page
  - `courses/` - Course listing and individual course pages
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles
- `components/` - Reusable React components
- `lib/` - Utility functions and shared code
- `hooks/` - Custom React hooks
- `public/` - Static assets
- `styles/` - Additional stylesheets

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start Production**: `npm run start`

## Configuration
- Next.js configured to allow all dev origins for Replit proxy compatibility
- TypeScript enabled with build errors ignored
- Tailwind CSS v4 with PostCSS

## Recent Changes
- 2026-01-08: Initial Replit setup - configured port 5000, allowed all hosts for dev proxy
