<div align="center">

# 🚀 HireEdge

### AI-Powered Interview Preparation Platform

*Upload your resume, paste a job description, and get a personalized interview report — complete with predicted questions, skill gap analysis, a day-wise preparation plan, and a tailored ATS-friendly resume.*

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Secure register, login & logout with JWT tokens stored in HTTP-only cookies |
| 📄 **Resume Parsing** | Upload a PDF resume — text is extracted automatically via `pdf-parse` |
| 🤖 **AI Interview Report** | Google Gemini generates a structured report with match score, questions, skill gaps & prep plan |
| 📊 **Match Score** | 0–100 score showing how well your profile fits the job description |
| 💡 **Technical & Behavioral Questions** | Predicted interview questions with interviewer intent and suggested answers |
| ⚠️ **Skill Gap Analysis** | Identifies missing skills with low / medium / high severity ratings |
| 📅 **Preparation Plan** | Day-wise study plan with focus areas and actionable tasks |
| 📝 **Tailored Resume PDF** | Generates an ATS-friendly resume customized for the target job description |
| 📚 **Report History** | View all your past interview reports in one place |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** — UI library
- **React Router 7** — Client-side routing
- **Axios** — HTTP client
- **Sass (SCSS)** — Styling
- **Vite 7** — Build tool & dev server

### Backend
- **Node.js** — Runtime
- **Express 5** — Web framework
- **MongoDB + Mongoose 9** — Database & ODM
- **Google Gemini AI** (`@google/genai`) — AI report generation
- **Puppeteer** — HTML → PDF conversion
- **JWT + bcryptjs** — Authentication & password hashing
- **Zod** — Schema validation
- **Multer** — File upload handling
- **pdf-parse** — PDF text extraction

---

## 📁 Project Structure

```
HireEdge/
├── Backend/
│   ├── server.js                  # Entry point — starts Express & connects to DB
│   ├── .env.example               # Environment variable template
│   ├── package.json
│   └── src/
│       ├── app.js                 # Express app setup, middleware & routes
│       ├── config/
│       │   └── database.js        # MongoDB connection
│       ├── controllers/
│       │   ├── auth.controller.js       # Register, Login, Logout, GetMe
│       │   └── interview.controller.js  # Generate report, Get reports, PDF
│       ├── middlewares/
│       │   ├── auth.middleware.js  # JWT verification
│       │   └── file.middleware.js  # Multer file upload
│       ├── models/
│       │   ├── user.model.js             # User schema
│       │   ├── blacklist.model.js        # Token blacklist for logout
│       │   └── interviewReport.model.js  # Interview report schema
│       ├── routes/
│       │   ├── auth.routes.js      # /api/auth/*
│       │   └── interview.routes.js # /api/interview/*
│       └── services/
│           └── ai.service.js       # Gemini AI integration & PDF generation
│
├── Frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx                # Root component with providers
│       ├── app.routes.jsx         # Route definitions
│       ├── main.jsx               # React entry point
│       ├── style.scss             # Global styles
│       ├── features/
│       │   ├── auth/              # Login, Register, AuthContext, hooks
│       │   └── interview/         # Home, Interview report, context, hooks
│       ├── shared/
│       │   └── components/        # Navbar, Loader, ErrorBanner
│       └── style/                 # SCSS modules
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **MongoDB** (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Google Gemini API Key** — get one at [Google AI Studio](https://aistudio.google.com/apikey)

### 1. Clone the Repository

```bash
git clone https://github.com/akshay-25-dev/HireEdge.git
cd HireEdge
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file (use `.env.example` as reference):

```bash
cp .env.example .env
```

Then fill in your actual values:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

Start the backend dev server:

```bash
npm run dev
```

The backend runs on **http://localhost:3000**

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

The frontend runs on **http://localhost:5173**

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string (Atlas or local) |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `GOOGLE_GENAI_API_KEY` | API key for Google Gemini AI |

---

## 📡 API Endpoints

### Authentication — `/api/auth`

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/register` | Register a new user | ❌ |
| `POST` | `/login` | Login with email & password | ❌ |
| `GET` | `/logout` | Logout & blacklist token | ✅ |
| `GET` | `/me` | Get current user profile | ✅ |

### Interview — `/api/interview`

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/generate-report` | Generate AI interview report (accepts resume PDF + job description) | ✅ |
| `GET` | `/reports` | Get all reports for the logged-in user | ✅ |
| `GET` | `/report/:interviewId` | Get a specific report by ID | ✅ |
| `GET` | `/generate-resume/:interviewReportId` | Download a tailored resume PDF | ✅ |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<div align="center">

**Built with ❤️ by [Akshay](https://github.com/akshay-25-dev)**

</div>
