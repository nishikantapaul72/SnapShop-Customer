# 🛍️ SnapShop E-commerce

A modern e-commerce platform built with **React**, **TypeScript**, featuring a clean UI and comprehensive shopping experience.

---

## 🚀 Features

- 🛍️ Product browsing and searching  
- 🛒 Shopping cart management  
- ❤️ Wishlist functionality  
- 👤 User authentication  
- 📱 Responsive design  
- 🌐 Multi-language support (English/Bengali)  
- 💳 Payment processing  
- 📦 Order management  

---

## 🧰 Tech Stack

| Category           | Technology                   |
|--------------------|------------------------------|
| Frontend Framework | React 19.0.0                 |
| Build Tool         | Vite 6.3.1                   |
| Language           | TypeScript 5.7.2             |
| Styling            | Tailwind CSS 4.1.4           |
| State Management   | React Context API            |
| Data Fetching      | TanStack Query (React Query) |
| UI Components      | Lucide React                 |
| Form Handling      | React Hook Form + Yup        |
| Routing            | React Router DOM 7.5.1       |
| Notifications      | React Toastify               |

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js (Latest LTS version recommended)  
- npm or yarn

### 📦 Installation

1. **Clone the repository:**

   ```bash
   https://github.com/nishikantapaul72/SnapShop-Customer.git
   cd snapshop-customer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── contexts/        # Context providers
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Page components
│   └── ui/              # Reusable UI components
├── assets/              # Static assets
├── locales/             # i18n translation files
└── App.tsx              # Main application component
```

---

## 🧩 Key Features Explained

### 🔐 Authentication

- Login/Signup functionality  
- Protected routes  
- Password reset capability  

#### Test Credentials
```
Username: Rimel
Password: 123456
```

### 🛒 Shopping Features

- Product catalog with categories  
- Cart management  
- Wishlist functionality  
- Checkout process  
- Order confirmation  

### 💡 User Experience

- Toast notifications  
- Loading states  
- Form validation  

---

## 📜 Available Scripts

| Command                 | Description                      |
|-------------------------|----------------------------------|
| `npm run dev`           | Start development server         |
| `npm run build`         | Build for production             |
| `npm run preview`       | Preview production build         |
| `npm run lint`          | Run ESLint                       |
| `npm run i18n:extract`  | Extract i18n translation keys    |