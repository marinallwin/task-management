# Task Management Dashboard

A modern, responsive Task Management Dashboard built with React, Vite, Tailwind CSS, and Zustand. This mini Trello-like board allows users to manage tasks across three columns: To Do, In Progress, and Completed.

## Features

### Authentication (Mocked)
- Login page with email and password fields
- Accepts any credentials for demo purposes
- Persistent login state using Zustand with localStorage
- Automatic redirect to dashboard after login
- Logout functionality with state cleanup

### Dashboard Layout
- Responsive design using Tailwind CSS
- Sidebar navigation (hidden on mobile)
- Top navbar with user info and logout button
- Main content area for task board

### Task Management
- Fetches tasks from JSONPlaceholder API
- Loading and error states with retry functionality
- Transforms API data into local format with custom statuses
- Three-column Kanban board (To Do, In Progress, Completed)

### Task Operations
- **Add Task**: Modal form with title, description, and status fields
- **Edit Task**: Update existing tasks via modal
- **Delete Task**: Remove tasks with confirmation
- **Change Status**: Move tasks between columns using dropdown or drag

### Search & Filter
- Search tasks by title (real-time)
- Filter tasks by status (All, To Do, In Progress, Completed)
- Combined search and filter functionality

### State Management
- Zustand store with persist middleware
- Centralized state for user and tasks
- Actions: setUser, logout, setTasks, addTask, updateTask, deleteTask, changeStatus

## Tech Stack

- **React 19** - UI library with hooks
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Zustand 4** - Lightweight state management
- **Axios 1** - HTTP client for API calls
- **React Router 6** - Client-side routing
- **JavaScript** - No TypeScript


## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm preview
   ```

## Usage

1. **Login**: Navigate to the login page and enter any email and password
2. **View Tasks**: Tasks are automatically fetched from the API on dashboard load
3. **Add Task**: Click the "Add Task" button to create a new task
4. **Edit Task**: Click the edit icon on any task card
5. **Delete Task**: Click the delete icon and confirm
6. **Change Status**: Use the dropdown on each task card to move between columns
7. **Search**: Type in the search bar to filter tasks by title
8. **Filter**: Use the status dropdown to filter by task status
9. **Logout**: Click the logout button in the navbar

## Architecture Highlights

### State Management
- Zustand provides a simple, hook-based API for state management
- Persist middleware automatically saves state to localStorage
- No boilerplate or complex setup required

### Custom Hooks
- `useTasks`: Handles API fetching, loading, and error states
- `useTaskFilter`: Manages search and filter logic with memoization

### Component Design
- Functional components only
- Reusable Modal component for forms
- Separate TaskCard and TaskColumn for better organization
- Responsive design with mobile-first approach

### API Integration
- Axios instance with base URL configuration
- Error handling with user-friendly messages
- Data transformation layer to adapt API response

### Routing
- Protected routes with authentication check
- Automatic redirects based on auth state
- Nested routes with layout components

## API

The application uses JSONPlaceholder API:
- **Endpoint**: `https://jsonplaceholder.typicode.com/todos`
- **Method**: GET
- **Response**: Array of todo objects

Tasks are transformed from the API format:
```javascript
{
  id: number,
  title: string,
  completed: boolean
}
```

To local format:
```javascript
{
  id: number,
  title: string,
  description: string,
  status: 'todo' | 'inprogress' | 'completed'
}
```

## Customization

### Adding New Task Statuses
1. Update `transformTasks.js` to include new status
2. Add new column in `Dashboard.jsx`
3. Update status options in `TaskForm.jsx` and `TaskCard.jsx`

### Styling
- Modify `tailwind.config.js` for theme customization
- Update component classes for design changes
- All colors and spacing use Tailwind utilities

### API Integration
- Replace `fetchTodos` in `services/api.js` with your API
- Update `transformApiTasks` in `utils/transformTasks.js` for your data format

