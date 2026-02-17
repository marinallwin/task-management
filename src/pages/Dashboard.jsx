import { useState, useMemo } from 'react';
import useStore from '../store/useStore';
import { useTasks } from '../hooks/useTasks';
import { useTaskFilter } from '../hooks/useTaskFilter';
import TaskColumn from '../components/TaskColumn';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import ConfirmDialog from '../components/ConfirmDialog';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Dashboard = () => {
  const { tasks, addTask, updateTask, deleteTask, changeStatus } = useStore();
  const { loading, error, refetch } = useTasks();
  const { searchQuery, setSearchQuery, statusFilter, setStatusFilter, filteredTasks } = useTaskFilter(tasks);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const tasksByStatus = useMemo(() => {
    return {
      todo: filteredTasks.filter((task) => task.status === 'todo'),
      inprogress: filteredTasks.filter((task) => task.status === 'inprogress'),
      completed: filteredTasks.filter((task) => task.status === 'completed'),
    };
  }, [filteredTasks]);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSubmitTask = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTaskToDelete(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete);
      setTaskToDelete(null);
    }
  };

  const handleStatusChange = (id, status) => {
    changeStatus(id, status);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6 flex-shrink-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Task Board</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage and organize your tasks efficiently</p>
        </div>
        <button
          onClick={handleAddTask}
          className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>
      </div>

      <div className="sticky top-0 z-10 bg-gray-100 pb-4 sm:pb-6 flex-shrink-0">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 flex-1 overflow-y-auto pb-4 sm:pb-6">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={tasksByStatus.todo}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="In Progress"
          status="inprogress"
          tasks={tasksByStatus.inprogress}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="Completed"
          status="completed"
          tasks={tasksByStatus.completed}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        title={editingTask ? 'Edit Task' : 'Add New Task'}
      >
        <TaskForm
          task={editingTask}
          onSubmit={handleSubmitTask}
          onCancel={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
        />
      </Modal>

      <ConfirmDialog
        isOpen={isConfirmOpen}
        onClose={() => {
          setIsConfirmOpen(false);
          setTaskToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Delete Task"
        message="Are you sure you want to delete this task? This action cannot be undone."
      />
    </div>
  );
};

export default Dashboard;
