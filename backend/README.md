# GuessNumber - Backend

This is the backend server for the GuessNumber game, built with Node.js, Express, TypeScript, and SQL Server. It provides a RESTful API for all game-related functionalities.

## Features

- Scalable and modular architecture
- RESTful API with versioning
- TypeScript for type safety
- SQL Server integration
- JWT-based authentication (placeholder)
- Centralized configuration and logging
- Comprehensive error handling
- Rate limiting and security headers

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A running instance of SQL Server
- Docker (optional, for database)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd guessnumber-backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    - Copy the example environment file:
      ```bash
      cp .env.example .env
      ```
    - Open the `.env` file and update the variables, especially the `DB_*` values to match your SQL Server configuration.

### Running the Application

- **Development Mode (with hot-reloading):**
  ```bash
  npm run dev
  ```
  The server will start on the port specified in your `.env` file (default: 3000).

- **Production Mode:**
  ```bash
  npm run build
  npm start
  ```

### Running Tests

To run the test suite:
```bash
npm test
```

## Project Structure

The project follows a modular, domain-driven structure to ensure separation of concerns and scalability.

```
src/
├── api/                # API Controllers (HTTP request/response layer)
│   ├── external/       # Public-facing endpoints (e.g., auth)
│   └── internal/       # Authenticated endpoints (e.g., game logic)
├── config/             # Application configuration
├── constants/          # Application-wide constants (e.g., HTTP codes)
├── database/           # Database connection and query logic
├── instances/          # Singleton instances (e.g., external clients)
├── middleware/         # Express middleware (auth, error handling, etc.)
├── routes/             # API route definitions
├── services/           # Business logic layer
├── tests/              # Test files and utilities
├── types/              # TypeScript type definitions and interfaces
├── utils/              # Shared utility functions
└── server.ts           # Application entry point
```

## API Endpoints

- **Health Check:** `GET /health` (Root level)
- **API v1:** All API routes are prefixed with `/api/v1`.
  - **Internal Health Check:** `GET /api/v1/internal/health` (Authenticated)

## Adding a New Feature

1.  **Database:** Create or update stored procedures in your SQL Server database.
2.  **Types:** Define necessary TypeScript types/interfaces in `src/types/` or a new `src/domain/<feature>/types.ts`.
3.  **Service:** Implement the business logic in a new file under `src/services/<feature>/`.
4.  **Controller:** Create a controller in `src/api/internal/<feature>/controller.ts` to handle HTTP requests, call the service, and send responses.
5.  **Routes:** Define the new routes in `src/api/internal/<feature>/<feature>.routes.ts` and wire it up in `src/routes/internal.routes.ts`.
6.  **Validation:** Use Zod schemas in the controller or validation middleware to validate incoming data.
7.  **Tests:** Write unit tests for the service and integration tests for the new API endpoints.
