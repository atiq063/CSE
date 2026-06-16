# HBKU CSE Website

React/Vite website for the College of Science and Engineering, Hamad Bin Khalifa University.

## Prerequisites

- Node.js 18 or newer
- npm

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173/
```

If that port is already in use, run:

```bash
npm run dev -- --port 5174
```

## Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  app/          Main app composition
  components/   Reusable page sections
  data/         Site content and asset URLs
  styles/       Global CSS theme and responsive layout
```
