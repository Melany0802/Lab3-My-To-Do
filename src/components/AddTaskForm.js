import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask, onCancel }) => {
  // Estado para los campos del formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  // Manejar cambios en el archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {  
      setFile(selectedFile);
    } else {
      alert("El archivo excede el tamaño máximo de 5MB.");
      setFile(null);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('El título es obligatorio');
      return;
    }

    // Crear la nueva tarea con los datos ingresados
    const newTask = {
      title,
      description,
      file
    };

    // Llamar al callback para agregar la nueva tarea
    onAddTask(newTask);

    // Limpiar el formulario
    setTitle('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="modal-content">
      <h2>Agregar tarea a la lista</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskTitle">Título de la tarea (Obligatorio):</label>
          <input
            type="text"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Título de la tarea"
          />
        </div>
        <div>
          <label htmlFor="taskDescription">Descripción de la tarea (Opcional):</label>
          <textarea
            id="taskDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la tarea"
          ></textarea>
        </div>
        <div>
          <label htmlFor="fileInput">Adjuntar archivo (Opcional, máx 5MB):</label>
          <input type="file" id="fileInput" onChange={handleFileChange} />
        </div>
        <div className="form-actions">
          <button type="button" onClick={onCancel}>Cancelar</button>
          <button type="submit">Agregar tarea</button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
