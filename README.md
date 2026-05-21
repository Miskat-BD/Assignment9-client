# MediQueue – Tutor Booking System

🌐 **Live Website:**  
https://mediqueue-project.vercel.app/

💻 **Client Repository:**  
https://github.com/Miskat-BD/Assignment9-client

---

## 📚 Project Overview

MediQueue is a modern Tutor Booking System designed to simplify the process of finding tutors, scheduling learning sessions, and managing bookings efficiently.

Students can explore available tutors, view tutor details, book sessions based on availability, and manage their booked sessions from a personalized dashboard.

The system reduces manual scheduling conflicts and provides a smoother and more organized learning experience.

---

## ✨ Key Features

### 🔐 Authentication System
- Email & Password authentication
- Google Login integration
- Protected private routes
- Persistent login after page refresh

### 👨‍🏫 Tutor Management
- Add tutor information
- Edit tutor details through modal
- Delete tutor with confirmation
- View personal tutor listings

### 📅 Session Booking System
- Book tutor sessions
- Auto-generated booking status
- Session date restriction
- Automatic slot reduction after booking

### 🔎 Search & Filter
- Search tutors by tutor name
- Case-insensitive search using MongoDB `$regex`

### 🎨 User Experience
- Responsive design
- Dynamic page titles
- Loading spinner
- Toast notifications
- Empty state UI
- Dark / Light theme support

---

## 🖥️ Pages Included

### Public Pages
- Home
- Tutors
- Login
- Register

### Private Pages
- Tutor Details
- Add Tutor
- My Tutors
- My Booked Sessions

---

## 🛠️ Technologies Used

### Frontend
- Next.js
- React.js
- Tailwind CSS
- HeroUI
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB

### Authentication & Security
- Better Auth
- JWT Authentication
- Google Authentication

### Deployment
- Vercel (Client)
- Render / Node Hosting (Server)