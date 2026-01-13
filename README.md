# FiGen User Portal

A modern application for converting design ideas into prototypes using AI.

## Features

- **Chat**: AI-powered chat interface for design conversations

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit** (State Management)

## Project Structure

```
src/
├─ app/                       # Next.js routing
├─ features/                  # Feature modules
│  ├─ auth/                   # Authentication feature
│  ├─ chat/                   # Chat feature
│  └─ home/                   # Home page feature
├─ shared/                    # Shared components and utilities
├─ config/                    # Configuration (Redux store)
└─ styles/                    # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

