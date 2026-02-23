# 🛒 Product Management App — Frontend

Frontend application for a Product Management CRUD system.  
This repository contains **only the Frontend**. The Laravel Backend API is maintained in a separate repository.

---

## 📌 Overview

This project is a modern React-based frontend that consumes a Laravel REST API.

The application allows users to:

- View product list
- Create new products (with image upload)
- Preview images before submission
- Navigate between pages
- Receive success notifications

The main goal of this project is to strengthen fullstack integration skills, structured state management, and TypeScript-based development.

---

## 🧱 Tech Stack

- React (Vite)
- TypeScript
- TailwindCSS
- shadcn/ui
- React Router DOM
- Native Fetch API
- Sonner (Toast Notification)

---

## 🚀 Current Features

### ✅ Product Listing
- Fetch data from external API
- Render products in a dynamic table
- Display product images from Laravel storage

### ✅ Create Product
- Controlled form with scalable state object
- Image preview before upload
- Client-side validation
- Loading state handling
- Toast notification on success
- Automatic redirect after creation

### ✅ API Integration
- Using native Fetch API (no Axios dependency)
- Proper error handling with TypeScript
- Structured for environment-based API configuration

### ✅ Storage Integration
- Supports backend image upload
- Displays images via Laravel `/storage` public link

---

## 📂 Project Structure (Simplified)
src/
├── components/
├── pages/
├── types/
├── routes/
└── App.tsx



## 🔌 Backend

This repository contains only the **Frontend**.

The Backend is built with Laravel and runs as a separate REST API service.

---

## 🔮 Next Development Phase

- ✏️ Edit Product feature
- 🗑 Delete Product feature
- Refactor API calls into reusable service layer
- Improve environment configuration for deployment

---

## 🎯 Development Focus

This project focuses on:

- Understanding modern fullstack architecture
- Building clean, state-driven UI
- Writing type-safe code with TypeScript
- Composing modular UI using shadcn
- Implementing practical CRUD operations with image handling