export const transformApiTasks = (apiTasks) => {
  return apiTasks.slice(0, 20).map((task, index) => {
    let status;
    
    // Distribute tasks across statuses
    if (index % 3 === 0) {
      status = 'inprogress';
    } else if (task.completed) {
      status = 'completed';
    } else {
      status = 'todo';
    }
    
    return {
      id: task.id,
      title: task.title,
      description: `Task description for: ${task.title}`,
      status: status,
    };
  });
};
