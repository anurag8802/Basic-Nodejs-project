# Nodejs_Project

A minimal Express + Sequelize boilerplate with structured layers (routes, controllers, services, repositories) and Winston logging. Includes `nodemon` for development and a basic health/info endpoint.

## Features
- Express server with versioned API routing (`/api/v1`)
- Health endpoint: `GET /api/v1/info` -> `{ success: true, message: 'API IS LIVE' }`
- Config management via dotenv and central `ServerConfig`
- Winston logging to console and `combined.log`
- Sequelize + sequelize-cli scaffold with MySQL config
- Organized project structure for scalability

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- MySQL server (for Sequelize DB usage)

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the project root:
```bash
PORT=3000
```

`src/config/server-config.js` loads `.env` via `dotenv`. Ensure `PORT` is set.

### Database Configuration (Sequelize)
Database environments are defined in `src/config/config.json` (sequelize-cli format):
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Update credentials per environment. Typical sequelize-cli commands:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Running the App

### Development
```bash
npm run dev
```
Starts `nodemon` on `src/index.js`. The server listens on `process.env.PORT`.

### Verify
- Open: `http://localhost:<PORT>/api/v1/info`
- Expected response:
```json
{
  "success": true,
  "message": "API IS LIVE",
  "error": {},
  "data": {}
}
```

## Project Structure
```
src/
  config/
    config.json           # Sequelize environments
    index.js              # Re-exports ServerConfig, Logger
    logger-config.js      # Winston logger
    server-config.js      # Loads .env, exposes PORT
  controllers/
    index.js
    info-controller.js    # GET /api/v1/info handler
  middlewares/
    index.js              # (placeholder)
  migrations/             # Sequelize migrations
  models/
    index.js              # Sequelize models entry
  repositories/
    index.js              # Data access layer entry
  routes/
    index.js              # Mounts v1 routes at /api/v1
    v1/
      index.js            # /info route
  seeders/                # Sequelize seeders
  services/
    index.js              # Business logic layer entry
  utils/
    index.js              # Helpers
index.js                  # App entry; mounts /api and starts server
```

## API

### GET /api/v1/info
- **Description**: Health check / info endpoint
- **Response**: 200 OK, see Verify section

## Logging
- Logger: Winston
- Outputs to console and `combined.log` (project root)
- Timestamped log format configured in `src/config/logger-config.js`

## Scripts
```json
{
  "dev": "npx nodemon src/index.js"
}
```

## Tech Stack
- Express 5
- Sequelize 6, sequelize-cli
- MySQL2
- Winston
- Nodemon
- dotenv

## Contributing
- Fork, create a branch, make changes, open a PR.

## License
ISC © Anurag
