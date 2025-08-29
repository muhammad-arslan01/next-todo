# Next.js Hello World Application

A simple Next.js application with a Hello World home page and an About page.

## Overview

This project is a basic Next.js application that demonstrates:

- A simple Hello World home page
- An About page with information
- Navigation between pages

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
├── app/                  # Main application directory (App Router)
│   ├── about/            # About page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── public/               # Static assets
└── ...                   # Configuration files
```

## Pages

- **Home Page**: Simple Hello World landing page with a link to the About page
- **About Page**: Information about the application with a link back to Home

## License

This project is open source and available under the MIT License.
