Tailwind React Integration

This project is a React application built with Vite and styled using Tailwind CSS.
It demonstrates how to set up Tailwind CSS in a modern React app for rapid UI development.

🚀 Project Setup
1. Create React Project with Vite
npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration

2. Install Tailwind CSS and Dependencies
npm install tailwindcss @tailwindcss/vite

3. Configure Vite

Update vite.config.js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

4. Import Tailwind in CSS

Edit src/index.css:

@import "tailwindcss";

🖌️ Usage

Start the development server:

npm run dev


Open App.jsx and use Tailwind classes:

function App() {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      Hello Tailwind + React + Vite 🚀
    </h1>
  )
}

export default App

📦 Build for Production
npm run build


Preview the production build:

npm run preview

📚 Tech Stack

⚛️ React (with Vite)

🎨 Tailwind CSS

⚡ Vite (fast dev & build tool)

✅ Features

Integrated Tailwind CSS for styling

Fast development with hot reload (Vite)

Ready for production builds