import CarouselFotos from './CarouselFotos';

function Catalogo() {
	var Collar1 = [
		{
			url: '/Collares/Collar1.jpeg',
		},
		{
			url: '/Collares/Collar2.jpeg',
		},
	];

	return (
		<div>
			<div className="container p-5">
				<div className="flex justify-center text-4xl mx-40 mt-5 mb-10">
					Catálogo
				</div>

				<div className="mx-10 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
					<CarouselFotos fotos={Collar1} nombre="Corbatin" precio="$400" />
				</div>
			</div>
		</div>
	);
}

export default Catalogo;
