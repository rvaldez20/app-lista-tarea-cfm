import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faSquare, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {

   // definimos el state mostrar u ocultar el form para editar tarea
   const [editandoTarea, cambiarEditandoTarea] = useState(false);
   // definimos el estado para el form de editar tarea
   const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

   // **** ***** ***** METODOS
   const handleSubmit = e => {
      e.preventDefault();

      // funcion que va actualizar la tarea
      editarTarea(tarea.id, nuevaTarea);

      // ocultamos el formulario
      cambiarEditandoTarea(false);
   }

  
   return ( 
      <li          
         className="lista-tareas__tarea">
         <FontAwesomeIcon 
            icon={tarea.completada ? faCheckSquare : faSquare}
            className="lista-tareas__icono lista-tareas__icono-check"
            onClick={() => toggleCompletada(tarea.id)}
         />
         <div className={tarea.completada ? "lista-tareas__texto tachado" : "lista-tareas__texto"}>
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
               onClick={() => borrarTarea(tarea.id)}
            />
         </div>
      </li>
    );
}
 
export default Tarea;
