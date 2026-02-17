import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, status, onEdit, onDelete, onStatusChange }) => {
  const headerColors = {
    todo: 'bg-blue-500',
    inprogress: 'bg-yellow-500',
    completed: 'bg-green-500',
  };

  return (
    <div className="flex-1 min-w-full lg:min-w-[280px] flex flex-col">
      <div className={`${headerColors[status]} text-white p-3 rounded-t-lg flex-shrink-0`}>
        <h2 className="font-semibold text-base sm:text-lg flex items-center justify-between">
          {title}
          <span className="bg-white bg-opacity-30 px-2 py-1 rounded-full text-xs sm:text-sm">
            {tasks.length}
          </span>
        </h2>
      </div>
      <div className="bg-gray-50 p-2 sm:p-3 rounded-b-lg flex-1 space-y-2 sm:space-y-3 overflow-y-auto">
        {tasks.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-sm">No tasks</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
