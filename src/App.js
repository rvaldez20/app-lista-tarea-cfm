import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {

	//MI LOGICA -obtenemos los datos que tenemos guardados en localstorage, si no hay datos es un array vacio 
	// let tareasGuardadas = localStorage.getItem('tareas');
	// if (tareasGuardadas === null) {
	// 	tareasGuardadas = [];
	// } else {
	// 	tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
	// }

	/* ++++++++++++++++ useEstat y useEffect para as tareas ++++++++++++++++ */

	//obtenemos los datos que tenemos guardados en localstorage, si no hay sera [] 
	const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];	

	// Se define el Estado para as tareas   localStorage.getItem('tareas') 
	const [tareas, cambiarTareas] = useState(tareasGuardadas);
	// console.log(tareas);

	// definimos el useEffect para guardar el estado de las tareas en localstorage
	useEffect(() => {	
		localStorage.setItem('tareas', JSON.stringify(tareas));			
	},[tareas]);


	/* +++++++++++++ useEstat y useEffect para ver o no completadas +++++++++++++ */

	// Accedemos al localstorage y comprobar si mostrarCompletadas es null
	let configMostrarCompletadas = '';
	if (localStorage.getItem('mostrarCompletadas') === null) {
		configMostrarCompletadas = true;
	} else {		
		configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
	}

	// se define el state para mostrar | ocultar las tareas Completadas
	const [mostrarCompletadas, cambiarmostrarCompletadas] = useState(configMostrarCompletadas);

	// definimos el useEffect para guardar el estado del boton ocultar y mostrar completadas
	useEffect(() => {	
		localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
	},[mostrarCompletadas]);

	
  	return (
		<div className="contenedor">
			<Header 
				mostrarCompletadas={mostrarCompletadas}
				cambiarmostrarCompletadas={cambiarmostrarCompletadas}
			/>

			<FormularioTareas 
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>

			<ListaTareas 
				tareas={tareas}
				cambiarTareas={cambiarTareas}
				mostrarCompletadas={mostrarCompletadas}
			/>
		</div>
  );
}

export default App;
