import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      // User state
      user: null,
      
      // Tasks state
      tasks: [],
      
      // User actions
      setUser: (user) => set({ user }),
      
      logout: () => set({ user: null, tasks: [] }),
      
      // Task actions
      setTasks: (tasks) => set({ tasks }),
      
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Date.now() }]
      })),
      
      updateTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        )
      })),
      
      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id)
      })),
      
      changeStatus: (id, status) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, status } : task
        )
      })),
    }),
    {
      name: 'task-management-storage',
    }
  )
);

export default useStore;
