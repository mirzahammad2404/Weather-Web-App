# Weather App

**Live demo:** https://webforcastingapplication.netlify.app/



A weather app built with React and Vite. Search for any city and see the current temperature, humidity and wind speed from the OpenWeatherMap API. It opens on a default city so the page is never empty.

## Features
- City search with live data from OpenWeatherMap
- Temperature (°C), humidity and wind speed
- Weather icon that changes with conditions
- Responsive layout

## Tech stack
React 19, Vite, OpenWeatherMap API, CSS

## Run locally
1. Get a free API key from https://openweathermap.org/api
2. Clone the repo and install dependencies:
```bash
   npm install
```
3. Create a `.env` file in the project root:
```
   VITE_APP_ID=your_api_key_here
```
4. Start the app:
```bash
   npm run dev
```

## What I learned
- Fetching data with `useEffect` and `async/await`
- Keeping API keys in environment variables
- Mapping API weather codes to icons

## What I would improve next
- Show a friendly message when a city isn't found
- Support every weather icon, not just a few
- Call the API through a small server so the key never reaches the browser
