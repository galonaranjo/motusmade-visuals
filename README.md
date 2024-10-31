# Motusmade Visual Generator

## [Live Demo](https://mm-api.fly.dev/)

A Node.js web application that randomly displays my (Galo's) digital art creations. Each page refresh presents a new visual from a curated collection of original artwork.

## Tech Stack

- **Frontend**:

  - EJS (Embedded JavaScript templates)
  - Tailwind CSS for styling
  - Responsive design

- **Backend**:

  - Node.js
  - Express.js
  - RESTful API endpoints

- **Deployment**:
  - Docker containerization
  - Fly.io cloud platform
  - GitHub Actions for CI/CD

## Features

- Random visual selection on each page load
- Responsive image display
- RESTful API endpoint for accessing visuals
- Server-side rendering with EJS
- Docker containerization for consistent deployment

## Deployment

Deployment is automated via GitHub Actions when pushing to the main branch. The application is containerized using Docker and deployed to Fly.io.

## API Endpoints

- `GET /`: Renders random visual
- `GET /api/visuals`: Returns JSON array of all visuals

## Author

Galo Alfredo Naranjo

## License

ISC
