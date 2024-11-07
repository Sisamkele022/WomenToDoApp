import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.task_name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.is_completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
};

export default TaskItem;
