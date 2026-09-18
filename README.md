# RusoBros Tech

A premium, multi-page marketing website for **RusoBros Tech** — a modern IT solutions and software development company that builds custom websites, web applications, mobile apps, eCommerce platforms, business software, SaaS products, and digital marketing support.

Built with **React (Vite)**, **React Router**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Key Features

- 🚀 **Vite + React** – Fast development environment with HMR
- 🧭 **React Router** – Proper multi-page navigation (Home, About, Services, Products, Technologies, Portfolio, Digital Marketing, Contact)
- 🎨 **Tailwind CSS** – Utility-first responsive styling
- 🎭 **Framer Motion** – Smooth animations & transitions
- 🌗 **Light / Dark mode** – Persistent theme toggle
- 📱 **Fully responsive** – Mobile-first design (320px → 1440px+)
- 🔍 **SEO metadata** – Updated titles, descriptions, Open Graph & Twitter tags

---

## 🛠️ Tech Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- Framer Motion

---

## 📂 Project Structure

```
src/
├── assets/          # Icons, images
├── components/      # Reusable UI components (Navbar, Footer, Cards, CTA, Forms)
├── data/            # Central content/config (services, products, content, links)
├── hooks/           # usePageMeta (per-page SEO)
├── pages/           # Route pages
├── App.jsx          # Router + layout
└── main.jsx         # Entry point
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <repo-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```

4. **Production build**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📝 Configuration

- Company details, contact placeholders, social links, nav links, services, products, technologies, projects, and digital marketing content live in `src/data/content.js`.
- Replace placeholder contact details and social URLs there before going live.