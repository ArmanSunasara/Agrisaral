# 🌾 AgriSaral — Smart Agriculture Companion

AgriSaral helps farmers diagnose crop diseases, browse local agri shops, and access weather insights. The app is split into a React client and a Node/Express API backed by MongoDB.

## ✨ Highlights
- AI‑assisted crop disease diagnosis via Plant.id
- Secure auth with JWT and validation on inputs
- Weather and shop search features
- Sensible server security: Helmet headers, rate limiting, and CORS control
- Linting configured for both client and server

## 🛠 Tech Stack
- Client: React, Vite (dev/build), React Router, Tailwind
- Server: Node.js, Express 5, Mongoose 8, JWT, Multer, Cloudinary
- External: Plant.id API, OpenWeatherMap

## 📁 Structure
```
agrisaral/
├── client/            # React app (Vite dev server)
├── server/            # Express API
└── README.md
```

## ⚙️ Environment
Create `server/.env` with:
```
MONGODB_URI=mongodb://localhost:27017/agrisaral
JWT_SECRET=your_jwt_secret
PLANT_ID_API_KEY=your_plant_id_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=5000
NODE_ENV=development
# Restrict frontend origin (defaults to Vite dev):
CORS_ORIGIN=http://localhost:5173
```

## 🚀 Quick Start
- Install dependencies:
  - `npm ci` (root optional)
  - `cd server && npm ci`
  - `cd client && npm ci`
- Run dev servers:
  - API: `cd server && npm run dev` → `http://localhost:5000`
  - Client: `cd client && npm run dev` → `http://localhost:5173`

Notes:
- The client also has `npm start` (CRA) which runs on `http://localhost:3000`, but the recommended dev path is `vite` (`5173`). Ensure `CORS_ORIGIN` matches your chosen client origin.

## 🔧 Scripts
- Server:
  - `npm run dev` — start with nodemon
  - `npm start` — start production
  - `npm run lint` — lint server
- Client:
  - `npm run dev` — Vite dev server
  - `npm start` — CRA dev server (optional)
  - `npm run build` — Vite build
  - `npm run lint` — lint client

## 🔐 Security & Validation
- Security headers via `helmet`
- Per‑IP rate limiting globally, tighter limits on `/api/auth/*`
- CORS restricted to `CORS_ORIGIN` (defaults to `http://localhost:5173`)
- Request validation on auth endpoints; invalid payloads return `422` with `{ success:false, errors:[{ field, msg }] }`

## 📚 API Overview
Base URL: `http://localhost:5000/api`

- Auth
  - `POST /auth/register` — body: `name`, `email`, `password`
  - `POST /auth/login` — body: `email`, `password`

- Uploads
  - `POST /upload` — multipart `image`; requires `Authorization: Bearer <token>`
  - `GET /upload/history` — list user uploads; requires auth

- Diagnosis
  - `GET /diagnose/:uploadId` — returns analysis for a prior upload; requires auth

- Shops
  - `GET /shops` — list all shops
  - `POST /shops` — create shop

- Plant Identification (direct Plant.id proxy)
  - `POST /plant/identify` — multipart `image`

### Sample Auth Flow
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Farmer Joe&email=joe@example.com&password=supersecure1"

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "email=joe@example.com&password=supersecure1"

# Use token for protected routes
curl http://localhost:5000/api/upload/history \
  -H "Authorization: Bearer <token>"
```

## ✅ Quality
- Linting enabled on both client and server (`npm run lint`)
- Server dependencies audited: `npm audit fix` shows 0 vulnerabilities
- Client advisories are tied to `react-scripts`; avoid `--force` unless migrating fully off CRA. Recommended: continue using Vite for dev/build and consider `vitest` for tests.

## 🧪 Testing (suggested)
- Server: add Jest + supertest for API routes (optional)
- Client: migrate tests to `vitest` to drop `react-scripts` dependency chain

## 🧭 Deployment
- Client: `cd client && npm run build` and deploy `dist/`
- Server: set environment vars, run `npm start`

## 🤝 Contributing
- Branch: `git checkout -b feature/<name>`
- Commit: `git commit -m "feat: <message>"`
- PR: open against the main branch

## 🙏 Acknowledgments
- Plant.id, OpenWeatherMap, React, Node.js communities

— Made with ❤️ for farmers