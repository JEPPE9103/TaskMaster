# TaskMaster ✅  
**The ultimate To-Do List app to keep track of your tasks!**

---

## 📌 About the Project
TaskMaster is a modern and responsive To-Do List application built with **Next.js** and **Firebase**.

### 🛠 Features:
✔ Register & log in using **Firebase Authentication**  
✔ Create, save, and manage tasks in real-time with **Firestore Database**  
✔ Mark tasks as completed and delete them when finished  
✔ Persist tasks so they remain even after logging out  

---

## 🚀 Technologies Used
- **Next.js** – React framework for SSR & performance optimization  
- **Firebase** – Manages authentication & real-time database  
- **Firestore** – Stores users' To-Do Lists  
- **CSS & Tailwind** – Ensures a clean and responsive design  

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
``sh
git clone https://github.com/JEPPE9103/TaskMaster.git
cd TaskMaster

``
### 2️⃣ Install dependencies
sh
npm install

``
### 3️⃣ Add Firebase configuration
Create a .env.local file in the project's root and add:

``sh
Kopiera
Redigera
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
(Find these values in your FirebaseConfig.js file.)

``
### 4️⃣ Start the development server
``sh
npm run dev
Then open http://localhost:3000 in your browser.
```
```
### 🌍 Deployment
TaskMaster can be deployed easily using Vercel:

- Create an account on Vercel
- Link your GitHub repository
- Add Firebase environment variables under Project Settings → Environment Variables
- Deploy and start using the app live! 🚀
