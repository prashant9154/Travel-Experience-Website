const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const path = require('path')

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({path: "backend/config/config.env"});
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

// Add health check endpoint for Render
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is up and running'
  });
});

// Add CORS middleware for separate frontend/backend deployment
app.use((req, res, next) => {
  const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// route imports
const article = require('./routes/articleRoute')
const user = require('./routes/userRoute');
const image = require('./routes/imageRoutes')
const video = require('./routes/videoRoutes')


app.use("/api",article);
app.use("/api",user);
app.use("/api",image);
app.use("/api",video);

// Only serve static frontend files in development since we're deploying frontend separately
if(process.env.NODE_ENV !== "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  })
}

//middleware for errors
app.use(errorMiddleware)

module.exports = app