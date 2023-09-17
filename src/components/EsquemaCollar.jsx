// Hecho por Guillermo Coelho

import { useState } from 'react';
import CarouselFotos from './CarouselFotos';

function EsquemaCollar(props) {
	var Collar22 = [
		{
			url: '/Collares/Collar65.jpg',
		},
		{
			url: '/Collares/Collar66.jpg',
		},
	];

	return (
		<div>
			<div className="flex justify-center p-2">
				<div className="text-4xl font-bold my-2">Choker Leaf</div>
			</div>

			<div className="grid grid-cols-2 content-center">
				<div className="flex flex-col items-center">
					<CarouselFotos fotos={Collar22} soloCollar="true" />
				</div>
				<div className="flex flex-col items-center align-middle">
					<div className="text-2xl font-bold my-2">Colores disponibles</div>
					<div className="text-2xl font-bold my-2">$250</div>
					<button className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 border rounded">
						Comprar
					</button>
					<div className="mt-2">Compras solo con MercadoPago</div>
				</div>
			</div>
		</div>
	);
}

export default EsquemaCollar;
