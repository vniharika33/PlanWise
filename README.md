# PlanWise 

AI-Powered Productivity and Task Planning Platform

PlanWise is a full-stack productivity management application designed to help users organize, prioritize, and track daily tasks efficiently. Built using React, FastAPI, PostgreSQL, and Docker, it provides a modern web interface with secure authentication, task management capabilities, and scalable backend APIs.

---

## Features

### User Authentication

* Secure user registration and login
* JWT-based authentication
* User-specific task management

### Task Management

* Create, update, and delete tasks
* Track task status and progress
* Organize daily activities efficiently

### Full-Stack Architecture

* React frontend
* FastAPI backend
* PostgreSQL database
* Docker-based deployment

### REST APIs

* CRUD operations for users and tasks
* FastAPI-powered backend services
* Scalable API architecture

---

## Tech Stack

| Category         | Technologies       |
| ---------------- | ------------------ |
| Frontend         | React, TypeScript  |
| Backend          | FastAPI, Python    |
| Database         | PostgreSQL         |
| Authentication   | JWT Authentication |
| Containerization | Docker             |
| Version Control  | Git, GitHub        |

---

## Project Structure

```text
PlanWise/
│
├── backend/
│   ├── app/
│   ├── tests/
│   └── scripts/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── tests/
│
├── compose.yml
├── README.md
└── .env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/vniharika33/PlanWise.git
cd PlanWise
```

### Start Application

```bash
docker compose up --build
```

---

## Access Application

Frontend:

```text
http://localhost:5173
```

Backend API:

```text
http://localhost:8000
```

API Documentation:

```text
http://localhost:8000/docs
```

Database Admin Interface:

```text
http://localhost:8080
```

---

## Current Capabilities

* User authentication
* Dashboard interface
* PostgreSQL integration
* REST API backend
* Dockerized deployment
* Responsive React frontend

---

## Future Enhancements

* Task prioritization
* Daily schedule planner
* Smart task recommendations
* Reminder notifications
* Productivity analytics dashboard
* AI-assisted scheduling
* Calendar integration

---


