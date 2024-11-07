import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(response.data.tasks);
      } catch (err) {
        console.error('Error fetching tasks', err);
      }
    };
    fetchTasks();
  }, [token]);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default DashboardPage;
