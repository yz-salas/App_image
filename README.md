# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

URL : "https://api.pexels.com/v1/search?query=nature"
KEY : "9vSo4nGAtUCmlzecGZtwmD4MMPpBtXYcfrVQvxVoCwIBwdVJohLgsdu5"

code : "

import { useState, useEffect } from 'react';
import './App.css';

function App() {
const [images, setImages] = useState([]); // Inicializar como array vacío
const API_KEY = '9vSo4nGAtUCmlzecGZtwmD4MMPpBtXYcfrVQvxVoCwIBwdVJohLgsdu5';

    useEffect(() => {
    	fetch('https://api.pexels.com/v1/search?query=nature', {
    		headers: {
    			Authorization: API_KEY, // Clave API de Pexels
    		},
    	})
    		.then((response) => {
    			if (!response.ok) {
    				throw new Error(`HTTP error! Status: ${response.status}`);
    			}
    			return response.json();
    		})
    		.then((data) => {
    			console.log(data);
    			setImages(data.photos); // Guarda la lista de fotos
    		})
    		.catch((error) => console.error('Error:', error));
    }, []) ; // Ejecuta el fetch solo una vez al montar el componente

    return (
    	<div>
    		<h1>Imágenes desde la API de Pexels</h1>
    		{images.length > 0 ? ( // Verifica si el array tiene elementos
    			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
    				{images.map((item) => (
    					<div key={item.id}>
    						<img src={item.src.medium} alt={item.alt} style={{ width: '100%' }} />
    						<p>{item.photographer}</p>
    					</div>
    				))}
    			</div>
    		) : (
    			<p>Cargando imágenes...</p>
    		)}
    	</div>
    );

}

export default App;

"

Funcion para llamar imagenes con precionar el boton:

cada vez que se precione el boton deve aparecer una imagen

DESGLOSE [
	✅ CREAR BOTON CON ONCLICK

]
