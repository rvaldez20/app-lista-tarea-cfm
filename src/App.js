import React, {useState} from 'react';
import './App.css';

import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';

const App = () => {

	// Se define el Estado
	const [tareas, cambiarTareas] = useState([
		{
			id: 1,
			texto: 'Lavar la ropa',
			completada: false
		},
		{
			id: 2,
			texto: 'Bañar al perro',
			completada: true
		}
	]);

	console.log(tareas);

  	return (
		<div className="contenedor">
			<Header />

			<FormularioTareas 
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>

			<ListaTareas 
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>

		</div>
  );
}

export default App;
