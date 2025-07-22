# 🌐 EarnLang - Client

Welcome to the **client-side** of the **EarnLang**. This React application enables students to find and book language tutors, and tutors to manage their tutorials efficiently.

---

## 🚀 Features

- ✅ React + Vite setup
- ✅ Firebase Authentication (Login, Register, Private Routes)
- ✅ React Router
- ✅ Tailwind CSS + DaisyUI for elegant UI
- ✅ Secure JWT integration using Firebase token
- ✅ Protected routes with context
- ✅ CRUD functionality for tutorials
- ✅ Booking system for students
- ✅ Review functionality
- ✅ Reusable components with clean folder structure

---

## 🗂️ Folder Structure

\`\`\`
src/
├── assets/             # Images, icons, logos
├── components/         # Navbar, Footer, ProtectedRoute, Loading, Modals
├── contexts/           # AuthContext, ThemeContext
├── hooks/              # Custom hooks (useAuth)
├── layouts/            # MainLayout, DashboardLayout
├── pages/              # All route-level pages
├── routes/             # React Router configuration
├── services/           # api.js with Axios instance and Firebase token
├── utils/              # Helper functions
└── main.jsx
\`\`\`

---

## ⚙️ Setup & Installation

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-jahid-jhb.git
cd b11a11-client-side-jahid-jhb
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Configure Firebase

Create a `.env` file in the project root:

\`\`\`
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
\`\`\`

### 4. Run the app

\`\`\`bash
npm run dev
\`\`\`

### 5. Open in browser

[https://earn-lang.web.app/](https://earn-lang.web.app/)

---

## 🔑 Authentication

- Uses **Firebase Authentication** for login and registration.
- JWT sent via Axios interceptor as:

\`\`\`
Authorization: Bearer <token>
\`\`\`

- Routes protected using **ProtectedRoute.jsx** and **AuthContext.jsx**.

---

## 💻 Pages

- **Home Page:** Banner, Stats, Language Categories, Why Choose Us, How It Works, FAQs, Join as Tutor  
- **Login & Register**  
- **Find Tutors** with search functionality  
- **Tutor Details** with Book and Review  
- **Add Tutorial** (for tutors)  
- **My Tutorials** (Update, Delete with modal)  
- **My Booked Tutors** with Review button  
- **NotFound Page**

---

## 🎨 Design & UI

- Tailwind CSS for utility-first styling
- DaisyUI for beautiful pre-styled components
- Fully responsive for all devices

---

## 🔗 Key Packages

- React Router
- Firebase
- Axios
- Lottie-React
- React-Countup
- SweetAlert2
- DaisyUI
- React Icons

---

## 🙏 Credits

Developed with ❤️ by **[Jahid Hasan](https://github.com/jahid-jhb)**

---

> **Note:** Connect this client to your server repository for full functionality.
