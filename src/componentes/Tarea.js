import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea}) => {

   // definimos el state mostrar u ocultar el form para editar tarea
   const [editandoTarea, cambiarEditandoTarea] = useState(false);
   // definimos el estado para el form de editar tarea
   const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

   // **** ***** ***** METODOS
   const handleSubmit = e => {
      e.preventDefault();

      // ocultamos el formulario
      cambiarEditandoTarea(false);
   }


   return ( 
      <li          
         className="lista-tareas__tarea">
         <FontAwesomeIcon 
            icon={faCheckSquare}
            className="lista-tareas__icono lista-tareas__icono-check"
         />
         <div className="lista-tareas__texto">
            {editandoTarea ? 
               <form 
                  className="formulario-editar-tarea"
                  onSubmit={handleSubmit}
               >
                  <input 
                     type="text"
                     className="formulario-editar-tarea__input"
                     value={nuevaTarea}
                     onChange={(e) => cambiarNuevaTarea(e.target.value)}
                  />
                  <button
                     type="submit"
                     className="formulario-editar-tarea__btn"
                  >Actualizar
                  </button>
               </form>
               : tarea.texto
            }            
         </div>
         <div className="lista-tareas__contenedor-botones">
            <FontAwesomeIcon 
               icon={faEdit}
               className="lista-tareas__icono lista-tareas__icono-accion"
               onClick={ () => cambiarEditandoTarea(!editandoTarea)}
            />
            <FontAwesomeIcon 
               icon={faTimes}
               className="lista-tareas__icono lista-tareas__icono-accion"
            />
         </div>
      </li>
    );
}
 
export default Tarea;
