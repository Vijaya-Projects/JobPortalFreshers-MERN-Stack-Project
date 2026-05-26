# JobPortalFreshers

## 📌 Project Overview

JobPortalFreshers is a full-stack web application developed for fresh graduates to search and apply for jobs easily.  
The project provides separate functionalities for users and admin with role-based access control.

This project is developed using React.js, Node.js, Express.js, and MySQL.

---

# 🚀 Problem Statement

Fresh graduates often struggle to find suitable entry-level job opportunities. Existing job portals mainly focus on experienced professionals and contain complex workflows.

This project aims to provide:

- A simple job portal for freshers
- Easy job application process
- Admin-based job management system
- Role-based authentication

---

# 🎯 Objectives

- Build a real-time MERN-style job portal
- Implement user authentication
- Provide job application functionality
- Allow admin to manage jobs
- Store data using MySQL database

---

# 🛠 Technologies Used

## Frontend
- React.js
- React Router DOM
- Bootstrap
- Axios

## Backend
- Node.js
- Express.js
- Nodemon
- CORS
- dotenv

## Database
- MySQL

---

# 📂 Project Structure

## Frontend Structure
```text
frontend/
│
├── public/
├── src/
│   ├── components/
│   │   └── layout/
│   │       └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Jobs.jsx
│   │   ├── AddJob.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.js
│   └── index.js

backend/
│
├── config/
│   └── db.js
│
├── routes/
│   ├── authRoutes.js
│   └── jobRoutes.js
│
├── .env
├── server.js
└── package.json

```

# Features
## User Features
 - User Registration
 - User Login
 - View Jobs
 - Apply Jobs
 - Dashboard
 - View Applied Jobs
 - Logout
## Admin Features
Admin Login
Add Jobs
Edit Jobs
Delete Jobs
Manage Jobs

# Database Tables
## users
id
name
email
password
role
## jobs
id
title
company
location
## job_applications
id
user_id
job_id
applied_at
# API Endpoints
Authentication APIs
## Register
POST /api/auth/register
## Login
POST /api/auth/login
## Job APIs
Get All Jobs
GET /api/jobs
## Add Job
POST /api/jobs/add
## Apply Job
POST /api/jobs/apply
## Update Job
PUT /api/jobs/update/:id
## Delete Job
DELETE /api/jobs/delete/:id
## Applied Jobs
GET /api/jobs/applied/:userId
# Installation Steps
Clone Repository
git clone <repository-url>
## Backend Setup
cd backend
npm install
npm run dev
## Frontend Setup
cd frontend
npm install
npm start

# Environment Variables

Create .env file inside backend folder.

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=jobportal

# Screenshots

Add screenshots here:

Home Page
Login Page
Register Page
Jobs Page
Dashboard
Admin Add Job Page

# Future Enhancements
JWT Authentication
Password Encryption using bcrypt
Resume Upload
Search & Filter Jobs
Email Notifications
Cloud Deployment

# Learning Outcomes
React Routing
REST API Development
CRUD Operations
MySQL Integration
Authentication Flow
Role-Based Access Control

# Author

Vijaya K

# 📄 License

This project is developed for educational and learning purposes.
