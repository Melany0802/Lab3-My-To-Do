/* se utilizará para mostrar un 
contenedor de color negro con opacidad al 40% que cubrirá la totalidad del 
tamaño de la ventana del sitio web en el navegador y que contendrá centrado 
al componente “AddTaskForm”. */

import React from 'react';
import './AddTaskBackground.css'; 

const AddTaskBackground = ({ children, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-background" onClick={handleClickOutside}>
      {children}
    </div>
  );
};

export default AddTaskBackground;
