import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Swal from 'sweetalert2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';


const FormularioTareas = ({tareas, cambiarTareas}) => {

   // **** ***** ***** useState
   const [inputTarea, cambiarInputTarea] = useState('');



   // **** ***** ***** METODOS
   const handleInput = e => {
      cambiarInputTarea(e.target.value);
   }

   const handleSubmit = e => {
      e.preventDefault();

      if (inputTarea !== '') {
         cambiarTareas(
            [ ...tareas,
               {
                  id: uuidv4(),
                  texto: inputTarea,
                  completada: false
               }
            ]   
         );
         cambiarInputTarea('');
      } else {
         Swal.fire(
         '',
         'Es necesario añadir un nombre a la Tarea',
         'error'
         )
      }      
   }

   return ( 
      <form 
         className="formulario-tareas"
         onSubmit={handleSubmit}
      >
         <input 
            type="text" 
            className="formulario-tareas__input" 
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
         />
         <button
            type="submit"
            className="formulario-tareas__btn"

         >
            <FontAwesomeIcon 
               icon={faPlusSquare}
               className="formulario-tareas__icono-btn"
            />
         </button>
      </form>
    );
}
 
export default FormularioTareas;