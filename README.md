# AthleticHub 🏅

AthleticHub is a modern and dynamic web application that serves as an online platform for athletes and event organizers. Users can discover, book, and even create and manage their own athletic events.

**[Live Demo](https://athletic-e8d0b.web.app/)** | **[Backend Server](https://assignment-11-server-three-sage.vercel.app/)**
 **[Backend Repo](https://assignment-11-server-three-sage.vercel.app)**

---



## ✨ Key Features

* **🔐 Secure User Authentication:** Secure registration and login system with email/password and Google Sign-In. Utilizes JSON Web Tokens (JWT) for session management.
* **🗓️ Full Event Management:** Users can easily create new events, update event information, and delete events they own (Full CRUD Operations).
* **🎟️ Booking System:** Users can book any available event and cancel their existing bookings.
* **🔍 Advanced Search & Sorting:** A fast search feature to find events by name or location, along with functionality to sort events by date.
* **🌓 Dark & Light Mode:** Features an automatic, system-aware theme that switches between light and dark modes, with a manual toggle for user preference.
* **⚡ Optimized Performance:**
    * **Lazy Loading:** Images are loaded only when they enter the viewport, reducing initial page load time.
    * **Code Splitting:** Each page's code is loaded separately, ensuring a faster initial application startup.
    * **Pagination:** Data is loaded in chunks (pages) to avoid fetching large amounts of data at once.
* **📱 Responsive Design:** A beautiful and user-friendly interface that works seamlessly on mobile, tablet, and desktop devices.
* **🔔 Modern Notifications:** Uses `react-hot-toast` to provide modern, non-intrusive feedback to users.

---

## 🛠️ Tech Stack

### Frontend

* **React:** The core library for building the user interface.
* **Vite:** An extremely fast, modern build tool.
* **React Router DOM:** For handling client-side routing.
* **Tailwind CSS:** A utility-first CSS framework.
* **DaisyUI:** A component library for Tailwind CSS.
* **Framer Motion:** For creating fluid and beautiful animations.
* **Axios:** For making API requests.
* **Firebase:** For user authentication and hosting.
* **React Hot Toast:** For modern toast notifications.

### Backend

* **Node.js:** Server-side runtime environment.
* **Express.js:** Web application framework.
* **MongoDB:** NoSQL database for data storage.
* **JSON Web Token (JWT):** For securing API endpoints.
* **Cookie-Parser:** For managing server-side cookies.

---

## 🚀 Getting Started

To run this project on your local machine, follow these steps.

### Prerequisites

* [Node.js](https://nodejs.org/en) (Version 18 or higher)
* [Git](https://git-scm.com/)

### Backend Setup

```bash
# 1. Clone the backend repository
git clone <YOUR_BACKEND_REPOSITORY_LINK>

# 2. Navigate to the project directory
cd <BACKEND_FOLDER_NAME>

# 3. Install npm packages
npm install

# 4. Create a .env.local file and add the following variables
# .env.local
DB_URI="YOUR_MONGODB_CONNECTION_STRING"
JWT_ACCESS_SECRET="YOUR_JWT_SECRET_KEY"
PORT=3000

# 5. Start the development server
npm run dev

# 1. Clone the frontend repository
git clone <YOUR_FRONTEND_REPOSITORY_LINK>

# 2. Navigate to the project directory
cd <FRONTEND_FOLDER_NAME>

# 3. Install npm packages
npm install

# 4. Create a .env file and add the following variables
# .env
VITE_API_URL="http://localhost:3000"
VITE_apiKey="YOUR_FIREBASE_API_KEY"
VITE_authDomain="YOUR_FIREBASE_AUTH_DOMAIN"
VITE_projectId="YOUR_FIREBASE_PROJECT_ID"
VITE_storageBucket="YOUR_FIREBASE_STORAGE_BUCKET"
VITE_messagingSenderId="YOUR_FIREBASE_MESSAGING_SENDER_ID"
VITE_appId="YOUR_FIREBASE_APP_ID"

# 5. Start the development server
npm run dev