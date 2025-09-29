SpaceXplorer 🌌

SpaceXplorer is a modern, interactive web application built with React and Vite, designed to explore, track, and visualize SpaceX launches. The website provides real-time launch data, interactive details about rockets, and information about SpaceX achievements.

The website uses galaxy-themed animations and gradients to give users an immersive space experience.

Table of Contents

Demo

Features

Tech Stack

Installation

Project Structure

Components

API

Usage

Testing

Contributing

License

Demo

Add your live demo link here:

https://your-website-demo.com

Features

Home Page with hero section and galaxy background animations

Browse Launches Page displaying SpaceX launches with search and filter functionality

About Page describing vision, goals, and achievements

Contact Form integrated with UI for user messages

Favorites feature for launches with persistence using localStorage

Galaxy-themed Animations consistent across all pages

Responsive Design for all device sizes

Tech Stack

Frontend: React 18, Vite, Tailwind CSS, React Router DOM

Icons: React Icons (FontAwesome)

Animations: Tailwind CSS + Custom Keyframes

State Management: React Context API

Testing: React Testing Library + Vitest

API: SpaceX REST API

Installation

Clone the repository

git clone https://github.com/ankitsingh2403/SpaceXplorer.git
cd space-explorer


Install dependencies

npm install


Run the development server

npm run dev


Build for production

npm run build


Preview production build

npm run preview

Project Structure
space-explorer/
│
├─ public/                 # Static files
├─ src/
│  ├─ assets/              # Images, logos
│  ├─ components/          # Reusable components like Navbar, Footer, Hero
│  ├─ context/             # Context API providers
│  ├─ pages/               # Home, About, BrowseLaunches
│  ├─ App.jsx              # Main App with Router
│  ├─ main.jsx             # Entry point
│  └─ index.css            # Tailwind and global styles
├─ package.json
├─ vite.config.js
└─ README.md

Components
Navbar

Fixed top navigation bar with links to Home, Browse Launches, About

Responsive with hover gradient effects

Hero

Full-screen hero section with galaxy background

Animated text and “Explore Now” button linked to Browse Launches

About

Galaxy-themed cards describing story, vision, goals, achievements

Animated counters for achievements

Contact form at the bottom

BrowseLaunches

Fetches SpaceX launches from API

Search and filter by name/date/rocket

Favorite launches toggle with persistence in localStorage

Detail view for individual launches

Footer

Social media icons (Twitter, Instagram, Github, LinkedIn)

Galaxy glow background

Copyright

API

SpaceX API (R-Spacex API
)

Endpoint used:

https://api.spacexdata.com/v4/launches – Get all launches

https://api.spacexdata.com/v4/rockets – Get rocket details

Fetching Example:

import { useEffect, useState } from "react";
import axios from "axios";

const [launches, setLaunches] = useState([]);

useEffect(() => {
  axios.get("https://api.spacexdata.com/v4/launches")
    .then((res) => setLaunches(res.data))
    .catch((err) => console.error(err));
}, []);

Usage

Navigate to /home to see the hero section

Click Explore Now to go to /browse-launches

Filter and search launches by name or rocket

Toggle favorites to save your preferred launches

View individual launch details

Explore About page for SpaceXplorer’s story, vision, and achievements

Contact us through the form on About page

Testing

React Testing Library + Vitest

Example tests:

Rendering and filtering the launches list

Favorite toggle and persistence in localStorage

Detail view rendering

Run tests:

npm run test

Contributing

Fork the repository

Create your feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m "Add YourFeature"

Push to the branch: git push origin feature/YourFeature

Open a Pull Request