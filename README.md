# Employee Task Tracker

live at:https://taskmanager-self-iota.vercel.app

A fullstack web application for managing employees and tasks, built with Next.js, Node.js, Express, and MongoDB.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens)

## Features

- **Authentication**: Admin and Employee roles.
- **Task Management**: Create, read, update, and delete tasks.
- **Assignment**: Admins can assign tasks to employees.
- **Dashboard**: Visual summary of task statistics.
- **Responsive Design**: Modern UI that works on all devices.

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- npm

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## API Documentation

### Auth
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user info

  <img width="1000" height="729" alt="image" src="https://github.com/user-attachments/assets/6a498dad-0cb2-4822-bf21-4c250358bf80" />


### Tasks
- `GET /api/tasks` - Get all tasks (Admin) or assigned tasks (Employee)
- `POST /api/tasks` - Create a task (Admin only)
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task (Admin only)

  <img width="1300" height="934" alt="image" src="https://github.com/user-attachments/assets/56e2d723-1241-43bb-bb13-0b4bbb687ddf" />

  <img width="1300" height="938" alt="image" src="https://github.com/user-attachments/assets/b59f7175-193a-44b4-ae71-a14569093b5f" />



### Employees
- `GET /api/employees` - Get all employees (Admin only)

### Dashboard
- `GET /api/dashboard` - Get dashboard statistics

  
