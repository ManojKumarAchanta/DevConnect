![image](https://github.com/user-attachments/assets/d610b80d-41fa-4782-92a3-72303b5918ac)
# DevConnect
# DevConnect - A Developer Social Network (MERN Stack + Cloudinary)

A fully functional **DevConnect** platform built using the **MERN Stack (MongoDB, Express.js, React, Node.js)** with **Cloudinary** for image uploads. Users can create posts, connect with other developers, follow/unfollow, comment, and more!

## Features

✅ User Authentication (Signup, Login, Logout)  
✅ Create, Read, Update, and Delete (CRUD) Posts  
✅ Image Uploading with **Cloudinary**  
✅ Like and Comment on Posts  
✅ Follow/Unfollow Users  
✅ View Developer Profiles  
✅ Edit Profile (Add Skills, Experience, and Education)  
✅ Fully Responsive Frontend (TailwindCSS)  
✅ Real-time updates (Optional: Socket.io for notifications)

---

## Tech Stack

### **Frontend:**
- React.js
- Redux Toolkit (State Management)
- TailwindCSS
- Axios (API Calls)

### **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JWT Authentication
- Cloudinary (For Image Uploads)
- Multer (Handling File Uploads)

---

## Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/devconnect.git
cd devconnect
```

### **2. Backend Setup**
```bash
cd backend
npm install
```

#### **2.1 Create a `.env` file inside the `backend` folder and add:**
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

#### **2.2 Start Backend Server**
```bash
npm run dev
```
_Server will run on **http://localhost:5000**_

---

### **3. Frontend Setup**
```bash
cd frontend
npm install
```

#### **3.1 Start React App**
```bash
npm run dev
```
_App will run on **http://localhost:5173** (Vite Default Port)_

---

## API Endpoints

### **Auth Routes**
- `POST /api/auth/signup` → Register User
- `POST /api/auth/login` → Login User
- `GET /api/auth/me` → Get Logged-In User Details

### **User Routes**
- `GET /api/users/:id` → Get User Profile
- `PUT /api/users/:id` → Update Profile
- `POST /api/users/follow/:id` → Follow User
- `POST /api/users/unfollow/:id` → Unfollow User

### **Post Routes**
- `POST /api/posts` → Create Post
- `GET /api/posts` → Get All Posts
- `DELETE /api/posts/:id` → Delete Post
- `POST /api/posts/:id/like` → Like a Post
- `POST /api/posts/:id/comment` → Comment on a Post

---

## Folder Structure
```bash
📂 devconnect
├── 📂 backend
│   ├── 📂 models (MongoDB Schemas)
│   ├── 📂 routes (Express API Routes)
│   ├── 📂 controllers (Route Handlers)
│   ├── server.js (Main Backend File)
│   ├── .env (Environment Variables)
│   ├── package.json
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── 📂 redux
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
└── README.md
```

## Contributing
Feel free to **fork** this repository and submit PRs. If you have suggestions or find issues, open an **issue**.

---

## License
This project is **Open Source**. You can use it for learning and building your own versions!

🚀 **Happy Coding!**

