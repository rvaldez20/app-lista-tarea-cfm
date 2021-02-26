import Swal from 'sweetalert2'

import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {

   const toggleCompletada = id => {
      cambiarTareas(tareas.map(tarea => {
         if(tarea.id === id) {
            return {...tarea, completada: !tarea.completada}
         }
         return tarea;
      }));
   }

   const editarTarea = (id, nuevaTarea) => {
      cambiarTareas(tareas.map(tarea => {
         if(tarea.id === id) {
            return {...tarea, texto: nuevaTarea }
         }
         return tarea;
      }));
   }

   const borrarTarea = (id) => {
      Swal.fire({
         title: 'Estas Seguro?',
         text: "Una tarea borrada no se puede recuperar!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, Borrarla!',
         cancelButtonText: 'No, Cancelar'
       }).then((result) => {
         // console.log(result);
         if (result.isConfirmed) {

            // Obtenemos el nuevo array el cual ya no contiene la tarea a borrar
            const newArray = tareas.filter(tarea => tarea.id !== id);
            cambiarTareas(newArray);

            Swal.fire(
               'Borrada!',
               'La tarea ha sido borrda',
               'success'
            )
         }
       })
   }


   return (       
      <ul className="lista-tareas">
         {tareas.length > 0 
            ? 
               tareas.map((tarea) => {

                  if(mostrarCompletadas){
                     return   <Tarea 
                                 key={tarea.id}
                                 tarea={tarea}
                                 toggleCompletada={toggleCompletada}
                                 editarTarea={editarTarea}
                                 borrarTarea={borrarTarea}
                              />
                     // si la tarea no esta completada la devolvemos
                  } else if (!tarea.completada) {
                     return   <Tarea 
                                 key={tarea.id}
                                 tarea={tarea}
                                 toggleCompletada={toggleCompletada}
                                 editarTarea={editarTarea}
                                 borrarTarea={borrarTarea}
                               />                     
                  }
                   //si ya esta completada no la devolvemos
                  return;
               })
            : 
               <div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
         }
      </ul>
    );
}
 
export default ListaTareas;