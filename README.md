# JobPortalFreshers

## Project Overview

JobPortalFreshers is a full-stack web application developed for fresh graduates to search and apply for jobs easily.  
The project provides separate functionalities for users and admin with role-based access control.

This project is developed using React.js, Node.js, Express.js, and MySQL.

---

# Problem Statement

Fresh graduates often struggle to find suitable entry-level job opportunities. Existing job portals mainly focus on experienced professionals and contain complex workflows.

This project aims to provide:

- A simple job portal for freshers
- Easy job application process
- Admin-based job management system
- Role-based authentication

---

# Objectives

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
 - Admin Login
 - Add Jobs
 - Edit Jobs
 - Delete Jobs
 - Manage Jobs

# Database Tables
## users
- id
- name
- email
- password
- role
## jobs
- id
- title
- company
- location
## job_applications
- id
- user_id
- job_id
- applied_at
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
 - cd backend
 - npm install
 - npm run dev
## Frontend Setup
 - cd frontend
 - npm install
 - npm start

# Environment Variables
.env file inside backend folder.
- PORT=5000
- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=root
- DB_NAME=jobportal

# Screenshots
Home Page
<img width="1919" height="422" alt="image" src="https://github.com/user-attachments/assets/91fddd62-ca50-4a89-a7fb-1565c2eaadc8" />

Register Page
<img width="1919" height="647" alt="image" src="https://github.com/user-attachments/assets/a88530fa-c2ea-4cf4-ab99-8a061ce7579f" />

Login Page
<img width="1919" height="534" alt="image" src="https://github.com/user-attachments/assets/b168788d-4cdb-4152-a158-8bbb1299e136" />

<img width="1918" height="549" alt="image" src="https://github.com/user-attachments/assets/94efa91c-db91-4d5f-9eac-44e8e7216a09" />

<img width="1912" height="527" alt="image" src="https://github.com/user-attachments/assets/4346f012-eee6-46ae-9819-ad2669b8b051" />

Jobs Page
<img width="1913" height="828" alt="image" src="https://github.com/user-attachments/assets/a7689705-4d0b-4ce4-881d-a966015f9c48" />

<img width="1910" height="848" alt="image" src="https://github.com/user-attachments/assets/79cb8d80-cbc2-4db7-9f62-7e442701d1ab" />

<img width="1919" height="827" alt="image" src="https://github.com/user-attachments/assets/c703bab3-70b5-4f87-99a9-03ce4d011973" />

Dashboard
<img width="1919" height="596" alt="image" src="https://github.com/user-attachments/assets/545cb88f-4224-419c-af3c-3a228074d2ef" />

<img width="1915" height="600" alt="image" src="https://github.com/user-attachments/assets/42c54d9f-47e3-4802-912c-e490e20ccbf1" />

Admin Add Job Page

<img width="1919" height="536" alt="image" src="https://github.com/user-attachments/assets/b1c2dc4c-3181-405c-b25e-ce867c543df6" />

<img width="1892" height="954" alt="image" src="https://github.com/user-attachments/assets/48e55771-8c2f-4e8c-9ff7-526aa67c9a18" />

<img width="1919" height="603" alt="image" src="https://github.com/user-attachments/assets/a4818553-7b55-4b08-a50d-ca884f54f68b" />




# Future Enhancements
- JWT Authentication
- Password Encryption using bcrypt
- Resume Upload
- Search & Filter Jobs
- Email Notifications
- Cloud Deployment

# Learning Outcomes
- React Routing
- REST API Development
- CRUD Operations
- MySQL Integration
- Authentication Flow
- Role-Based Access Control

# Author

Vijaya K

# 📄 License

This project is developed for educational and learning purposes.
