# Digital Clock App (React + Vite)

A feature-rich digital clock web app built with React, Vite, and Tailwind CSS. Includes a real-time clock, stopwatch, and timer, with theme and time format toggles.

## Features

- **Digital Clock**: Displays current time and date, with 12/24-hour format toggle.
- **Stopwatch**: Start, pause, and reset a stopwatch with millisecond precision.
- **Timer**: Set a countdown timer (hours, minutes, seconds), start, pause, and reset.
- **Theme Toggle**: Switch between Light, Dark, and System themes.
- **Sidebar Navigation**: Easily switch between clock, stopwatch, and timer views.
- **Responsive Design**: Works well on desktop and mobile.
- **About Section**: Info about the app and author.

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/) (installed, not used in code)
- [React Icons](https://react-icons.github.io/react-icons/)

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  layout/
    AppLayout.jsx
  sections/
    Nav.jsx
    Main.jsx
  components/
    Time.jsx
    Date.jsx
    Stopwatch.jsx
    Timer.jsx
    ThemeToggle.jsx
    TimeFormat.jsx
    Dropdown.jsx
    NavSections.jsx
  context/
    ThemeContext.jsx
    TimeFormatContext.jsx
  hooks/
    useClock.js
    useStopwatch.js
    useTimer.js
    useDarkMode.js
    useDropDown.js
  assets/
    react.svg
public/
  vite.svg
server/
```

## How It Works

- **Theme Management**: Uses `ThemeProvider` for theme state and applies theme to `<html>` via class.
- **Time Format**: Uses `TimeFormatProvider` for 12/24-hour toggle.
- **Clock**: `useClock` hook updates time every second.
- **Stopwatch**: `useStopwatch` hook updates every 10ms.
- **Timer**: `useTimer` hook counts down from a set time.
- **Sidebar/Dropdown**: `useDropdown` manages sidebar open/close state.

## Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Customization

- **Theme**: Click the sun/hat/monitor icons in the sidebar to switch themes.
- **Time Format**: Toggle between 12h/24h in the sidebar.
- **Navigation**: Use sidebar to switch between clock, stopwatch, and timer.

## Author

Made by **Chandan**.  
Portfolio: [https://portfolio-vite-orcin.vercel.app/](https://portfolio-vite-orcin.vercel.app/)

---

*This project is a showcase of time-based features in React. If you like it, check out more on the author's