# Noviteq Brand Hub — website package

This repository contains the complete source for the responsive Noviteq Brand Hub.

## Requirements

- Node.js 22.13 or later
- npm

## Run locally

1. Extract the website package.
2. Open a terminal in the extracted folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

## Build for production

Run `npm run build`. The production-ready output is created in `dist/`.

## Deploy from GitHub

Connect the repository to a compatible Node.js or Cloudflare Workers hosting provider. Use:

- Install command: `npm install`
- Build command: `npm run build`
- Output/runtime: Cloudflare Worker-compatible Vinext application
- Required Node.js version: 22.13 or later

No environment variables, databases or external services are required for v1.

## Included features

- Responsive brand-guideline website
- Logo, colour, typography, voice and governance specifications
- Interactive asset-tool selector
- Editable name and role/campaign fields
- Live branded previews
- Colour-value clipboard copying
- Downloadable HTML starters

## v1 export scope

The included generators export adaptable HTML starters. Native PDF, DOCX, PPTX, PNG, Canva and Figma exports are not included in v1.
