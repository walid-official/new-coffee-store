Here's the **clean and structured README** with the **dependencies** included properly:  

```markdown
# ☕ Coffee Store - Online Coffee Shopping Platform  

Welcome to the **Coffee Store**, a dynamic online platform where users can explore, purchase, and manage their favorite coffee products. This project is built with the **MERN stack** and features authentication, shopping cart functionality, user favorites, and an admin dashboard for product management.  

##

<img src="https://raw.githubusercontent.com/walid-official/new-coffee-store/main/Screenshot-2025-01-04-185622.png" alt="Coffee Store Screenshot" height="400">

---

## 🌍 Live Site URL  
🔗 [Live Demo](https://coffee-store8809.surge.sh)  

---

## 🛠 Tech Stack  
- **Frontend**: React, Tailwind CSS, React Router, Firebase Authentication  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Hosting**: Netlify/Vercel (Client) & Railway/Heroku (Server)  
- **Payment Integration**: Stripe or PayPal  
- **State Management**: Context API / Redux  

---

## 🚀 Features  

### 🏠 Home Page  
✅ Beautiful hero section with promotional banner  
✅ Featured Coffee section showcasing top-rated products  
✅ New Arrivals and Bestsellers  
✅ Fully responsive design for mobile, tablet, and desktop  

### 🔐 Authentication (Firebase)  
✅ Register with Name, Email, Password, and Photo URL  
✅ Secure login with email/password and Google authentication  
✅ Forgot password functionality  
✅ User profile display in the navbar  

### 🛒 Coffee Shop & Product Management  
✅ View all coffee products in a **grid layout** with filtering options  
✅ **Product Details Page** with full description, image, and rating  
✅ Add coffee to **cart** and **favorites** (private routes)  
✅ **Admin Features**: Add, edit, or delete coffee products  

### ❤️ My Favorites (Private Route)  
✅ View and manage saved coffee products  
✅ Remove coffee from favorites list  

### 🛍️ Shopping Cart & Checkout  
✅ View cart items with quantity adjustment  
✅ Secure checkout with **Stripe/PayPal** integration  
✅ Save cart data for persistence after page reload  

### 🎨 Additional Features  
✅ **Dark/Light Mode** toggle  
✅ **Search functionality** to filter coffee products  
✅ **Custom 404 Page** for unknown routes  
✅ **Loading Spinner** during data fetch  
✅ **Toast Notifications** for success/error messages  

---

## 🔧 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-username/coffee-store.git
cd coffee-store
```

### **2️⃣ Install Dependencies**  
Run the following command to install required packages:  
```sh
npm install
```

---

## 📦 Dependencies  

This project uses the following dependencies:  

| Package                      | Version   | Description |
|------------------------------|-----------|-------------|
| `firebase`                   | ^11.0.2   | Firebase SDK for authentication and database |
| `localforage`                | ^1.10.0   | Offline storage support |
| `match-sorter`               | ^8.0.0    | Utility for sorting and filtering data |
| `react`                      | ^18.3.1   | JavaScript library for UI development |
| `react-countup`              | ^6.5.3    | Animated number counter component |
| `react-dom`                  | ^18.3.1   | React library for rendering DOM elements |
| `react-hook-form`            | ^7.54.2   | Form validation and management |
| `react-icons`                | ^5.3.0    | Icons library for React |
| `react-router-dom`           | ^6.28.0   | Routing for React applications |
| `react-scroll-trigger`       | ^0.6.14   | Trigger animations based on scroll position |
| `sort-by`                    | ^1.2.0    | Sorting utility for arrays |
| `sweetalert`                 | ^2.1.2    | SweetAlert for beautiful alert pop-ups |

To install all dependencies manually, run:  
```sh
npm install firebase localforage match-sorter react react-countup react-dom react-hook-form react-icons react-router-dom react-scroll-trigger sort-by sweetalert
```

---

## 🚀 Running the Project  

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add your API keys:  

```sh
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Backend API URL
VITE_BACKEND_URL=http://localhost:5000
```

> **Note:** Replace `your_firebase_api_key`, `your_firebase_project_id`, etc., with actual values from your Firebase console.  

---

### **4️⃣ Start the Development Server**  
```sh
npm run dev
```
> The app should now be running at **http://localhost:5173/**  

---

### **(Optional) Running the Backend Server**  
If the project includes a backend (Node.js/Express/MongoDB), follow these steps:  

1. **Navigate to the backend directory:**  
   ```sh
   cd backend
   ```

2. **Install backend dependencies:**  
   ```sh
   npm install
   ```

3. **Start the backend server:**  
   ```sh
   npm start
   ```

4. **Ensure MongoDB is running:**  
   - If using a local database, start MongoDB:  
     ```sh
     mongod
     ```
   - If using **MongoDB Atlas**, add your connection string to `.env`:  
     ```sh
     MONGO_URI=your_mongodb_connection_string
     ```

---

## 🎯 Access the App  
Once everything is set up, open your browser and visit:  

- **Frontend:** [`http://localhost:5173`](http://localhost:5173)  
- **Backend API (if applicable):** [`http://localhost:5000`](http://localhost:5000)  

---

## 🔥 Troubleshooting  
If you run into issues:  
- **Check logs for errors** using `npm run dev` or `npm start`  
- **Ensure all environment variables are correctly set**  
- **Verify MongoDB is running** (`mongod` if using local MongoDB)  
- **Restart the server** if necessary  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## ✨ Contributors  
👤 **Your Name** – [GitHub](https://github.com/your-username)  

---

### 🎉 Now you're ready to explore the Coffee Store! ☕🚀  
```

This README is **well-structured, clear, and formatted properly** for **copy-pasting** directly into your project. Let me know if you need any modifications! 🚀😊
