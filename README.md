# Appscrip-task-Tharunreddy — Product Listing Page (PLP)

## Overview
Responsive PLP built with React. Demonstrates:
- Responsive UI (desktop, tablet, mobile)
- SEO basics (title, meta, schema)
- Minimal dependencies
- Optional mock data via Fake Store API

## Setup
1. `git clone https://github.com/<you>/Appscrip-task-YourName.git`
2. `cd Appscrip-task-YourName`
3. `npm install`
4. `npm start` — runs dev server

## Build & Deploy
- `npm run build` then deploy `build/` to Netlify or other static host.

## Project Structure
- `src/components/` — Header, Filters, ProductGrid, ProductCard, Footer
- `public/index.html` — SEO meta + JSON-LD

## Notes
- Uses `axios` to fetch `https://fakestoreapi.com/products`. If API fails, app uses sample fallback data.
- Images should include descriptive filenames and `alt` text.

## Evaluation Checklist
- ✅ Semantic tags (header, main, footer)
- ✅ SEO tags and JSON-LD
- ✅ Responsive grid with CSS grid & media queries
- ✅ Minimal libraries
