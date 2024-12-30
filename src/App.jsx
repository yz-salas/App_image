import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = '9vSo4nGAtUCmlzecGZtwmD4MMPpBtXYcfrVQvxVoCwIBwdVJohLgsdu5';

function App() {
	const [images, setImages] = useState([]);
	const [index, setIndex] = useState(0);

	// Función para obtener imágenes de la API
	const FetchImage = () => {
		fetch('https://api.pexels.com/v1/search?query=nature', {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP Error ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				setImages(data.photos); // Guardar imágenes en el estado
			})
			.catch((error) => {
				console.error('Error al obtener imágenes: ' + error);
			});
	};

	// Llamar a FetchImage al montar el componente
	useEffect(() => {
		FetchImage();
	}, []);

	// Función para agregar una nueva imagen
	const addImages = () => {
		if (index < images.length) {
			setIndex(index + 1); // Incrementar el índice si hay más imágenes disponibles
		} else {
			console.log('No hay más imágenes para agregar.');
		}
	};

	// Función para eliminar una imagen
	const deleteImages = () => {
		setIndex(0);
	};

	return (
		<div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
			<header style={{ textAlign: 'center', marginBottom: '20px' }}>
				<h1 style={{ fontSize: '2.5em', color: '#333' }}>App de Imágenes</h1>
				<p style={{ fontSize: '1.2em', color: '#555' }}>Haz clic en el botón para agregar imágenes de la naturaleza.</p>
				<div
					style={{
						display: 'flex',
						gap: 10,
					}}
				>
					<button
						onClick={addImages}
						style={{
							padding: '10px 20px',
							fontSize: '1em',
							backgroundColor: '#007BFF',
							color: '#fff',
							border: 'none',
							borderRadius: '5px',
							cursor: 'pointer',
						}}
					>
						Agregar Imagen
					</button>

					<button
						onClick={deleteImages}
						style={{
							padding: '10px 20px',
							fontSize: '1em',
							backgroundColor: 'red',
							color: '#fff',
							border: 'none',
							borderRadius: '5px',
							cursor: 'pointer',
						}}
					>
						Delete Imagenes
					</button>
				</div>
				<div
					style={{
						padding: 10,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 10,
					}}
				>
					<h2>number of image</h2>
					<h1>{index}</h1>
				</div>
			</header>

			{/* Contenedor inicial bonito */}
			<div
				id="contImagenes"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '16px',
					justifyItems: 'center',
				}}
			>
				{index === 0 ? (
					<div
						style={{
							gridColumn: '1 / -1',
							textAlign: 'center',
							color: '#888',
							fontSize: '1.5em',
						}}
					>
						<p>¡No hay imágenes aún!</p>
						<p>Haz clic en el botón para comenzar.</p>
					</div>
				) : (
					images.slice(0, index).map((image) => (
						<div
							key={image.id}
							style={{
								boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
								borderRadius: '8px',
								overflow: 'hidden',
							}}
						>
							<img src={image.src.medium} alt={image.alt} style={{ width: '100%', display: 'block' }} />
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default App;
