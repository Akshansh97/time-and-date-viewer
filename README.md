
# Time and Date Viewer

A visually appealing **live clock and date viewer** built with **Next.js** and **TailwindCSS**. The project displays the current time and date with gradient-styled text, hover animations, and a background image.

---

## 🌟 Features

- **Live Clock**: Updates every second using `useEffect` and `useState`.
- **Current Date**: Displays the current date alongside the time.
- **Gradient Text**: Both the time and date have beautiful gradient colors.
- **Hover Effects**: Smooth hover animations on time, date, and heading.
- **Responsive Styling**: Styled using TailwindCSS and custom CSS variables.
- **Background Image**: Adds a custom background image for a modern look.

---

## 🛠 Technologies Used

- [Next.js](https://nextjs.org/) (App Router, Client Components)
- [React](https://reactjs.org/) (Hooks: `useState`, `useEffect`)
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- CSS gradients and transitions for animations

---

## 📂 Project Structure


```
├─ src/
│  └─ app/
│     └─ page.tsx        # Main Clock component
├─ public/
│  └─ mario.jpg          # Background image
├─ globals.css           # Custom CSS + Tailwind imports
├─ package.json
└─ README.md
```


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Akshansh97/time-and-date-viewer.git
cd time-and-date-viewer
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🎨 Styling Highlights

* `.time` → Large, gradient-styled live time text with hover animation.
* `.date` → Gradient date text with subtle shadow and hover effect.
* `.heading` → Gradient title with hover lift effect.
* `body` → Background image with fallback background color.
* Smooth transitions for hover interactions for a modern UI feel.

---

## ⚡ Live Demo

You can view the live demo here: [GitHub Pages / Vercel Deployment]()


