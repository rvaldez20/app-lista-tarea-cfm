import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';

const App = () => {

	// Se define el Estado
	const [tareas, cambiarTareas] = useState([]);

	console.log(tareas);

  	return (
		<div className="contenedor">
			<Header />

			<FormularioTareas 
				tareas={tareas}
				cambiarTareas={cambiarTareas}
			/>

		</div>
  );
}

export default App;
