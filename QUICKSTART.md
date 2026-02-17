# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173` (or the URL shown in terminal)

## First Time Usage

1. **Login Page**: You'll see the login screen
   - Enter any email (e.g., `demo@example.com`)
   - Enter any password (e.g., `password123`)
   - Click "Sign In"

2. **Dashboard**: After login, you'll see:
   - Three columns: To Do, In Progress, Completed
   - Tasks automatically loaded from API
   - Search bar and filter dropdown at the top
   - "Add Task" button in the top right

3. **Managing Tasks**:
   - **Add**: Click "Add Task" button
   - **Edit**: Click pencil icon on any task
   - **Delete**: Click trash icon on any task
   - **Move**: Use dropdown on task to change status
   - **Search**: Type in search bar to filter by title
   - **Filter**: Use status dropdown to filter by status

4. **Logout**: Click the red "Logout" button in top right

## Features Overview

### ✅ Authentication
- Mocked login (accepts any credentials)
- Persistent session (survives page refresh)
- Protected routes

### ✅ Task Board
- Kanban-style three-column layout
- Real-time search and filtering
- Add, edit, delete, and move tasks
- Loading and error states

### ✅ Responsive Design
- Mobile-friendly
- Tablet optimized
- Desktop layout with sidebar

### ✅ State Management
- Zustand for global state
- LocalStorage persistence
- Optimistic updates

## Project Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### API Not Loading
The app uses JSONPlaceholder API. If tasks don't load:
1. Check your internet connection
2. Click "Try Again" button on error screen

### State Not Persisting
Clear browser localStorage and refresh:
```javascript
// In browser console
localStorage.clear()
location.reload()
```

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 3
- Zustand 4
- React Router 6
- Axios 1

## Next Steps

- Customize colors in `tailwind.config.js`
- Add more task fields in `TaskForm.jsx`
- Integrate with real backend API
- Add drag-and-drop functionality
- Implement task priorities
- Add due dates and reminders

Enjoy building with TaskBoard! 🚀
