# Philip Leakey Biography Platform

A modern web platform dedicated to showcasing the life, leadership, achievements, governance contributions, publications, and public service impact of Philip Leakey.

The platform combines an interactive biography experience with AI-powered content generation and PDF export capabilities.

## Features

* Interactive biography and career timeline
* Leadership and governance profile
* Publications and media gallery
* Vision, mission, and philosophy sections
* Executive CV presentation
* AI-assisted content generation using Gemini
* PDF export functionality
* Responsive user interface
* Localization support
* Express-powered backend API

## Technology Stack

### Frontend

* React 19
* TypeScript
* Vite
* CSS

### Backend

* Express
* Node.js

### AI Services

* Google Gemini API

### Document Generation

* PDFKit

## Project Structure

```text
src/
├── assets/
├── components/
├── context/
├── App.tsx
├── data.ts
├── index.css
└── main.tsx

server.ts
package.json
vite.config.ts
tsconfig.json
```

## Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key
APP_URL=http://localhost:3000
GOOGLE_TRANSLATION_API_KEY=
```

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Application URL:

```text
http://127.0.0.1:3000
```

## Production Build

Build application:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Deployment

This application is designed to be deployed on Render.

Build Command:

```bash
npm install && npm run build
```

Start Command:

```bash
npm start
```

Required Environment Variables:

* GEMINI_API_KEY
* APP_URL

## Testing Checklist

```bash
npm run lint
npm run build
npm run dev
```

Verify:

* Application loads successfully
* AI generation works
* PDF export works
* No browser console errors

## License

Private project. All rights reserved.
