import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './components/dashboard.js';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
   
    axios
      .get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then((response) => {
      
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []); 


  return (
    <div>
      <Dashboard tasks={tasks} /> 
    </div>
  );
}

export default App;
