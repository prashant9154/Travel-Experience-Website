# Travel Experience Website

A full-stack MERN application where travelers can write and browse trip experiences. Users can create rich posts and attach photos/videos from their journeys.

**Live demo:** https://travel-experience-website.vercel.app/

## ✨ Features

- Create, read, update, and delete travel stories  
- Upload images/videos with each post  
- User accounts & authentication (JWT/cookies; configurable)  
- Pagination & basic filtering/search (by title, tags, etc.)  
- Responsive UI

## 🧰 Tech Stack

- **Frontend:** React + CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas/local)
- **Media storage:** Local or a cloud provider (Cloudinary) via env config

Repo layout:  
```
/backend   # Express API, Mongo models, auth, uploads
/frontend  # React app, routes, pages, components, API client
```

## 🚀 Getting Started

### Prerequisites
- Node 18+ and npm
- MongoDB (Atlas URI or local instance)
- (Optional) Cloud storage account for media

### 1) Clone
```bash
git clone https://github.com/prashant9154/Travel-Experience-Website.git
cd Travel-Experience-Website
```

### 2) Environment variables

Create `/backend/.env`:
```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=supersecret
CLIENT_URL=http://localhost:5173
# Optional if using cloud storage:
CLOUD_NAME=...
CLOUD_API_KEY=...
CLOUD_API_SECRET=...
```

Create `/frontend/.env`:
```
# Vite style:
VITE_API_URL=http://localhost:5000

# CRA style (if applicable):
REACT_APP_API_URL=http://localhost:5000
```

### 3) Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4) Run locally

Option A – two terminals:
```bash
# Terminal 1
cd backend
npm run dev   # or: npm start

# Terminal 2
cd frontend
npm run dev   # opens http://localhost:5173 (Vite) or http://localhost:3000
```

Option B – with a root script (if you add one later using `concurrently`):
```bash
npm run dev
```

## 🔌 API (high-level)

- `POST /api/auth/register` – create user  
- `POST /api/auth/login` – authenticate user  
- `GET /api/posts` – list posts (supports pagination/query)  
- `POST /api/posts` – create post (text + media)  
- `GET /api/posts/:id` – single post  
- `PUT /api/posts/:id` – update post  
- `DELETE /api/posts/:id` – delete post


## 📦 Deployment

- **Frontend:** Vercel/Netlify  
- **Backend:** Render/Railway/AWS/Heroku-like  
- Enable CORS for your frontend origin.

## 🗂️ Project Scripts (suggested)

_Backend `package.json`_
```jsonc
{
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js",
    "lint": "eslint ."
  }
}
```

_Frontend `package.json`_
```jsonc
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src"
  }
}
```

## 🧭 Roadmap (ideas)

- Rich text editor with drag-and-drop media  
- Tags & advanced search  
- Likes, comments, bookmarks  
- User profiles & follow system  
- Image optimization & lazy loading


## 📷 Screenshots
