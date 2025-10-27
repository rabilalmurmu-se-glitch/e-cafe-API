## Back-End API (Express + TypeScript + Prisma)

### Overview
A RESTful API built with Express 5 and TypeScript, using Prisma as the ORM for a PostgreSQL database. The service manages core resources like shops, users, types, categories, items, order lists, list items, and orders. Logging is handled via Winston with request logging from Morgan.

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express 5
- **Language**: TypeScript 5
- **ORM**: Prisma (PostgreSQL)
- **Authentication**: JWT (JSON Web Tokens)
- **Logging**: Winston + Morgan
- **Environment Management**: dotenv

### Prerequisites
- **Node.js** 18+ (20+ recommended)
- **npm** (comes with Node)
- **PostgreSQL** running and reachable
- **A Google Cloud project** for deployment

### Getting Started
1. **Clone the repository and install dependencies**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   npm install
   ```
2. **Set up environment variables**
   Create a `.env` file in the project root. You can start by copying the example file if one is provided:
   ```bash
   cp .env.example .env
   ```
   Update the values in `.env` as needed (see the Environment section below).
3. **Generate the Prisma client and ERD**
   ```bash
   npx prisma generate
   ```
4. **Apply database migrations**
   ```bash
   npx prisma migrate dev
   ```
   To reset and apply migrations from scratch, you can use:
   ```bash
   npx prisma migrate reset
   ```
5. **Run the application in development mode**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:<PORT>`.
6. **Build and start for production**
   ```bash
   npm run build
   npm start
   ```

### Scripts
- `dev`: Runs the application using `ts-node-dev` for fast development with auto-reloading.
- `build`: Compiles the TypeScript code to JavaScript in the `dist` directory.
- `start`: Starts the production server from the compiled code in `dist/main.js`.

### Environment Variables
The application requires the following environment variables to be set:

- `PORT`: The port for the HTTP server (e.g., `5000`).
- `ENV`: The application environment (e.g., `Development`, `Production`).
- `DATABASE_URL`: The connection string for your PostgreSQL database.
  ```
  postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public
  ```
- `JWT_SECRET`: A secret key for signing JWTs.

Example `.env` file:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/e_cafe_db?schema=public"
PORT=5000
ENV=Development
JWT_SECRET="your-super-secret-jwt-key"
```

### API Routes
The API base path is `/api/v1`.

#### Authentication
- `POST /api/v1/users/register`: Register a new user.
- `POST /api/v1/users/login`: Log in a user and receive a JWT.

#### Resources
Each resource exposes standard CRUD endpoints under the base path.

- **/shops**
  - `GET /` — List all shops
  - `GET /:id` — Get a single shop by ID
  - `POST /` — Create a new shop
  - `PUT /:id` — Update a shop
  - `DELETE /:id` — Delete a shop
- **/users**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/types**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/categories**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/items**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/order-lists**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/list-items**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`
- **/orders**
  - `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`

Example using `curl`:
```bash
curl http://localhost:5000/api/v1/shops
```

### Data Model and Prisma
- The Prisma schema is defined in `prisma/schema.prisma`.
- The generated Prisma client is located in `src/generated/prisma`.
- An Entity Relationship Diagram (ERD) is available at `prisma/ERD.png`.

Common Prisma commands:
```bash
# After editing schema.prisma
npx prisma generate

# Create a new migration
npx prisma migrate dev --name <change_name>

# Apply migrations to an existing database without prompts
npx prisma migrate deploy
```

### Logging
- Logs are output to the console and stored in files under the `logs/` directory:
  - `logs/combined.log`: All logs.
  - `logs/error.log`: Only error logs.
- HTTP request logs from Morgan are routed into Winston at the `http` level.

### Deployment with Google Cloud Run
This application can be easily deployed as a container to Google Cloud Run.

1.  **Enable Google Cloud APIs**: Make sure you have the Cloud Run and Cloud Build APIs enabled in your Google Cloud project.
2.  **Containerize the application**: Create a `Dockerfile` in the root of your project:

    ```Dockerfile
    # Use the official Node.js 20 image.
    FROM node:20-slim

    # Create and change to the app directory.
    WORKDIR /usr/src/app

    # Copy application dependency manifests to the container image.
    COPY package*.json ./

    # Install production dependencies.
    RUN npm install --only=production

    # Copy local code to the container image.
    COPY . .

    # Build the TypeScript code.
    RUN npm run build

    # Run the web service on container startup.
    CMD [ "npm", "start" ]
    ```
3. **Build and deploy**: Use Google Cloud Build to build the container and deploy it to Cloud Run.

   ```bash
   gcloud run deploy <service-name> --source . --region <your-region>
   ```

   Replace `<service-name>` with a name for your service (e.g., `my-api-service`) and `<your-region>` with your preferred Google Cloud region (e.g., `us-central1`). You will also be prompted to set environment variables during the deployment process.

### Project Structure
```
src/
  config/
    config.ts
  controllers/
    *.controller.ts
  middlewares/
    requestLogger.ts
  routes/
    *.routes.ts       # mounted under /api/v1
  services/
    *.service.ts
  utils/
    logger.ts
    response.ts
    handlePrimaErrors.ts
  main.ts
prisma/
  schema.prisma
  ERD.md
  ERD.png
  migrations/
```

### License
ISC
