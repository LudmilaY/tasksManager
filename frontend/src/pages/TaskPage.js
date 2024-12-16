import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask } from '../services/api';

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks('user123').then((response) => setTasks(response.data));
  }, []);

  const handleAddTask = () => {
    createTask({ title: newTask, userId: 'user123' }).then((response) => {
      setTasks([...tasks, response.data]);
      setNewTask('');
    });
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
