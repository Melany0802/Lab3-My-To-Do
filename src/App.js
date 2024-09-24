import React, { useState } from 'react';
import './App.css';
import AddTaskBackground from './components/AddTaskBackground';
import AddTaskForm from './components/AddTaskForm';
import FilterableTasksList from './components/FilterableTasksList';
import NavigationBar from './components/NavigationBar';

function App() {
  const [tasks, setTasks] = useState([]);  // Estado para almacenar las tareas
  const [isAddingTask, setIsAddingTask] = useState(false);  // Estado para controlar el modal

  // Función para agregar una nueva tarea a la lista
  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
    setIsAddingTask(false);
  };

  return (
    <div className="app">
      {/* Barra de navegación con botón para agregar tareas */}
      <NavigationBar onAddTask={() => setIsAddingTask(true)} />

      {/* Lista de tareas con opción de filtrado */}
      <FilterableTasksList tasks={tasks} />

      {/* Modal para agregar nuevas tareas */}
      {isAddingTask && (
        <AddTaskBackground onClose={() => setIsAddingTask(false)}>
          <AddTaskForm onAddTask={handleAddTask} onCancel={() => setIsAddingTask(false)} />
        </AddTaskBackground>
      )}
    </div>
  );
}

export default App;
