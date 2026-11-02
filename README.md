# 🎓 Edunetic India

> **A modern, interactive educational technology and learning platform designed to empower students across India with accessible courses, student dashboards, and community learning tools. Built with Next.js 14, Firebase Auth, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Analytics-orange.svg)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Overview

**Edunetic India** is an educational innovation initiative providing digital curriculum modules, interactive skill-building courses, and personalized student learning management. Featuring secure authentication, responsive navigation, and course tracking, the platform bridges the gap between academic theory and practical engineering/technical skills.

---

## ✨ Features

- **📚 Course Catalog & Discovery**: Interactive course library with detailed lesson outlines, prerequisites, and learning paths.
- **📊 Personalized Student Dashboard**: Real-time progress tracking, enrolled course overviews, and learning statistics.
- **🔐 Seamless Authentication**: Complete authentication suite featuring Google OAuth one-click login and Email/Password flows via Firebase Auth.
- **🤝 Meet The Team & Community**: Educator showcase connecting learners with mentors and industry experts.
- **📱 Mobile-First Responsive Design**: Optimized for handheld mobile devices, tablets, and desktop workstations.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Authentication & Backend**: Firebase Authentication (`firebase/auth`, Google Provider)
- **Styling**: Tailwind CSS, PostCSS, Lucide Icons, Radix UI Primitives

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Node 20 recommended)
- A Firebase project for authentication

### 1. Clone the Repository
```bash
git clone https://github.com/Rithish-2914/edunetic-india.git
cd edunetic-india
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="edunetic.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="edunetic"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="edunetic.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="581598236096"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🔒 Security Best Practices

To safeguard your Firebase web keys:
1. **Domain Referrer Restrictions**: Go to [Google Cloud Console](https://console.cloud.google.com/) → *Credentials*, select the Firebase API key, and configure **Website Restrictions** (e.g. `edunetic.in/*`, `localhost:*`).
2. **Firebase Auth Authorized Domains**: Add your production domain under *Firebase Console → Authentication → Settings → Authorized domains*.

---

## 📂 Project Structure

```
edunetic-india/
├── app/
│   ├── courses/             # Course catalog and course detail views
│   ├── dashboard/           # Student learning dashboard
│   ├── login/               # Sign in with email or Google
│   ├── signup/              # New learner registration
│   ├── meet-the-team/       # Founders, mentors, and instructors
│   ├── globals.css          # Design system and themes
│   └── layout.tsx           # Global navigation & footer
├── components/              # Shared UI cards, navbars, and buttons
├── context/                 # Auth context and user session providers
├── lib/                     # Utility helpers
├── src/
│   └── firebase.ts          # SSR-safe Firebase Auth client
├── .env.example             # Environment template
├── LICENSE                  # MIT License
└── README.md                # Project documentation
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
