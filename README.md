## SpaceXplorer

SpaceXplorer is a dynamic web application built with React and Vite, offering users an interactive platform to explore SpaceX's launches, missions, and related data. Whether you're a space enthusiast or a developer, SpaceXplorer provides an engaging interface to delve into the cosmos.
## Demo

🌐 Live Demo

Experience SpaceXplorer in action:

👉 https://your-live-demo-url.com
## 🛠️ Features

- Interactive Launch Timeline: Visualize past and upcoming SpaceX  launches.

- Mission Details: Access comprehensive information about each mission.

- Real-Time Updates: Stay informed with the latest launch data.

- Responsive Design: Enjoy a seamless experience across devices.

## ⚙️ Tech Stack

- Frontend: React 18, Vite

- Styling: Tailwind CSS

- Routing: React Router DOM

- State Management: React Context API

- Testing: Vitest, React Testing Library

- API: SpaceX Public API

## Installation

Clone the repository:

```bash
 git clone https://github.com/ankitsingh2403/SpaceXplorer.git
 cd SpaceXplorer
```

Install dependencies:

```bash
 npm install

```
Run the development server:

```bash
npm run dev 
```


    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Deployment

Deploying SpaceXplorer to Vercel is quick and easy:

1. Push Code to GitHub
Make sure your project is pushed to a GitHub repository:

```bash
 git add .
 git commit -m "Initial commit"
 git push origin main
```

2. Go to Vercel
- Visit https://vercel.com and log in (or sign up).

3. Import GitHub Repo

- Click "New Project".

- Select your SpaceXplorer repository.

- Vercel will auto-detect Vite + React.

4. Set Build Settings (if not auto-detected):

- Framework Preset: Vite

- Build Command: npm run build

- Output Directory: dist

5. Deploy 🚀
- Click Deploy and wait for the build to finish.
  Your app will be live at:
```bash
https://your-project-name.vercel.app

```

6. Optional - Custom Domain

- Go to your project in Vercel.

- Add a custom domain under the Domains tab.


## API Reference

#### Get all items

```http
    GET /launches

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `-` |  Returns all launches |

#### Get item

```http
    GET /launches/latest

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `None`      | `-` | Returns all upcoming launches |


```http
      GET /rockets/${id}

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `String` | **Required** ID of rocket to fetch|


## Authors

- [@ankitsingh2403](https://github.com/ankitsingh2403/SpaceXplorer)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


![Logo](https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-space-explorer-icon-telecommunication-satellite-png-image_4870567.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

