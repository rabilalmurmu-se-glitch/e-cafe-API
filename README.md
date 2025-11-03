## E‑Cafe — Back-end API

Lightweight REST API for the E‑Cafe application. Built with Express (v5) and TypeScript, using Prisma for database access (PostgreSQL). The API serves a Vite-built frontend (in `client/`) and exposes resources for shops, users, types, categories, items, order-lists, list-items and orders.

Key features
- RESTful resources with controllers and services
- TypeScript-first codebase with path aliases
- Prisma ORM + migrations
- JWT-based authentication
- File uploads served from `/uploads`
- Winston + Morgan logging

Tech stack
- Node.js
- Express 5
- TypeScript
- Prisma (PostgreSQL)
- JWT for auth
- Winston + Morgan for logging

Prerequisites
- Node.js (18+ recommended)
- npm
- PostgreSQL (or a connection string to a hosted Postgres)

Quick start
1. Clone and install

```bash
git clone <repo-url>
cd <project-root>
npm install
```

2. Create a `.env` in the project root and set required variables (example below).

3. Generate Prisma client and apply migrations

```bash
npx prisma generate
npx prisma migrate dev
```

4. Start in development (auto-reloads)

```bash
npm run dev
```

Production build & run

```bash
npm run build
npm start
```

Environment variables (example)
Create a `.env` file and set the variables below (adjust values for your environment):

```env
# PostgreSQL connection
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"

# App
PORT=5000
ENV=Development

# JWT
JWT_SECRET=your_super_secret_jwt
```

Notes from the codebase
- The app mounts API routes under `/api/v1` (see `src/routes/index.routes.ts`).
- Static uploads are served from the `uploads/` directory via the `/uploads` route.
- The built frontend (Vite) is placed in the `client/` folder and served by Express when present.
- Prisma generated client is copied into `dist/generated` during build (see `package.json` build script).

NPM scripts (from package.json)
- `npm run dev` — development server (ts-node-dev, auto-reload)
- `npm run build` — compile TypeScript (`tsc`) and copy generated Prisma client to `dist`
- `npm start` — run compiled app with `module-alias`

API overview
- Base path: `/api/v1`
- Authentication endpoints (typical):
  - `POST /api/v1/users/register` — register
  - `POST /api/v1/users/login` — login (returns JWT)

- Resources (standard CRUD): `shops`, `users`, `types`, `categories`, `items`, `order-lists`, `list-items`, `orders`. Example: `GET /api/v1/shops`.

Prisma & database
- Prisma schema: `prisma/schema.prisma`.
- Generated client located at `src/generated/prisma` in source and copied to `dist/generated` during build.

Logging
- Winston used for application logging; Morgan integrates HTTP request logs.
- Log files are stored under `logs/` (see project logger configuration).

Serving frontend
- If `client/` is present (Vite build output), the server serves static files and returns `client/index.html` for unknown routes to support the SPA.

Docker / Cloud deployment (short)
Use a Dockerfile to containerize the app. A minimal example:

```Dockerfile
FROM node:20-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

Deploy the container to your chosen provider (Cloud Run, ECS, GKE, etc.) and set environment variables in the platform.

Project structure (important parts)

```
src/
  config/            # app configuration and env validation
  controllers/       # request handlers
  services/          # business logic
  routes/            # express route registration (mounted at /api/v1)
  middlewares/       # request logging, error handling, validation
  generated/prisma/  # prisma client (source)
  main.ts            # server bootstrap
prisma/              # schema + migrations + ERD
client/              # optional front-end build (served statically)
uploads/             # served static uploads
logs/                # log files
```
