# Kuldeep Chouhan — Python Backend Developer Portfolio

A high-end, responsive personal portfolio website for **Kuldeep Chouhan**, Python Backend Developer based in Abu Road, Rajasthan. Built using React, Vite, Tailwind CSS, and EmailJS.

---

## ⚡ Tech Stack

- **Frontend Core**: React 18, Vite, JavaScript (ES6+)
- **Styling**: Tailwind CSS, PostCSS, Glassmorphism, CSS Custom Utilities
- **Icons**: Lucide React
- **Contact Service**: EmailJS Browser SDK (`@emailjs/browser`)

---

## ✨ Features

- **Dark-First Modern Identity**: Deep charcoal aesthetics (`#080A0F`), smooth gradients, glowing accents, and high-contrast WCAG-friendly typography.
- **Interactive Terminal & API Mockup**: Live simulated Python/Django REST API viewsets, ORM models, and real-time HTTP endpoint test runner.
- **Featured Case Study**: Production **MBVM School Website** management platform with an interactive module dashboard mockup.
- **Categorized Technical Skills**: Filterable skill cards for Backend, Databases, Languages, Developer Tools, Python Libraries, Deployment, and Concepts.
- **Education Section**: Complete 3-tier academic qualification timeline (BCA, 12th, 10th).
- **Professional Experience**: Cybersecurity internship timeline at Codec Technologies Pvt. Ltd.
- **EmailJS Contact Form**: Client-side contact integration with input validation, loading states, form resets, and inline status toasts.
- **Resume Viewer & Downloader**: Dedicated options to view the resume PDF in a native browser tab (`/resume.pdf`) and download directly.
- **Full Mobile Ergonomics & Accessibility**: Tested across 320px (iPhone SE), 375px, 390px, 430px, 768px, 1024px, and 1440px viewports with zero horizontal overflow, visible focus rings, and `prefers-reduced-motion` compliance.

---

## 🚀 Projects Showcase

1. **MBVM School Website** *(Featured Project — 2026)*
   - **Type**: Major Project / Deployed Production Platform
   - **Tech**: HTML, CSS, JavaScript, PHP, MySQL, Google Sheets API
   - **Live**: [madhusudanschoolmungthala.co.in](https://madhusudanschoolmungthala.co.in)
   - **GitHub**: [github.com/kuldeepchouhan1301/MBVM-School-Website](https://github.com/kuldeepchouhan1301/MBVM-School-Website)
   - **Summary**: Deployed school management platform with 10+ modules covering admissions, student results, administrative events, and Google Sheets CSV export automation.

2. **Arkitektur — Architecture Showcase Website** *(Personal Project — 2025)*
   - **Type**: Web Application
   - **Tech**: Python, Django, SCSS, JavaScript, SQLite
   - **GitHub**: [github.com/kuldeepchouhan1301/arkitektur-django](https://github.com/kuldeepchouhan1301/arkitektur-django)
   - **Summary**: Modular Django web application following MVT architecture with ORM models, dynamic routing, and authentication-ready structure.

3. **Student Performance Analysis System** *(Academic Project — 2025)*
   - **Type**: Analytics Platform
   - **Tech**: PHP, MySQL, Bootstrap 5, Chart.js
   - **Summary**: Full-stack analytics system with role-based authentication for students and admins, attendance tracking, and Chart.js dashboards.

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kuldeepchouhan1301/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory based on `.env.example`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🔒 Environment Variables

The project uses EmailJS for handling contact form submissions directly from the browser. The following keys should be defined in your `.env` file:

- `VITE_EMAILJS_SERVICE_ID`: EmailJS Service ID
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS Template ID
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS Public Key

> **Note**: Never commit your `.env` file containing private credentials. `.env` is included in `.gitignore`. Use `.env.example` as a reference template.

---

## 📄 License & Contact

- **Name**: Kuldeep Chouhan
- **Role**: Python Backend Developer
- **Email**: Kuldeepchouhan1301@gmail.com
- **GitHub**: [github.com/kuldeepchouhan1301](https://github.com/kuldeepchouhan1301)
- **LinkedIn**: [linkedin.com/in/kuldeepchouhan1301](https://linkedin.com/in/kuldeepchouhan1301)
