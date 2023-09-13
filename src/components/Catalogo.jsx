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
	var Collar2 = [
		{
			url: '/Collares/Collar3.jpeg',
		},
		{
			url: '/Collares/Collar5.jpeg',
		},
	];
	var Collar3 = [
		{
			url: '/Collares/Collar40.jpg',
		},
		{
			url: '/Collares/Collar13.jpeg',
		},
		{
			url: '/Collares/Collar12.jpeg',
		},
	];
	var Collar4 = [
		{
			url: '/Collares/Collar39.jpg',
		},
		{
			url: '/Collares/Collar16.jpeg',
		},
		{
			url: '/Collares/Collar14.jpeg',
		},
		{
			url: '/Collares/Collar15.jpeg',
		},
	];

	var Collar5 = [
		{
			url: '/Collares/Collar41.jpg',
		},
		{
			url: '/Collares/Collar18.jpeg',
		},
		{
			url: '/Collares/Collar17.jpeg',
		},
		{
			url: '/Collares/Collar19.jpeg',
		},
	];

	var Collar6 = [
		{
			url: '/Collares/Collar20.jpeg',
		},
		{
			url: '/Collares/Collar21.jpeg',
		},
		{
			url: '/Collares/Collar24.jpeg',
		},
	];

	var Collar7 = [
		{
			url: '/Collares/Collar22.jpeg',
		},
		{
			url: '/Collares/Collar23.jpeg',
		},
	];

	var Collar8 = [
		{
			url: '/Collares/Collar25.jpeg',
		},
		{
			url: '/Collares/Collar26.jpeg',
		},
	];

	var Collar9 = [
		{
			url: '/Collares/Collar27.jpeg',
		},
		{
			url: '/Collares/Collar28.jpeg',
		},
		{
			url: '/Collares/Collar29.jpeg',
		},
	];

	var Collar10 = [
		{
			url: '/Collares/Collar30.jpeg',
		},
		{
			url: '/Collares/Collar31.jpeg',
		},
	];

	var Collar11 = [
		{
			url: '/Collares/Collar32.jpeg',
		},
		{
			url: '/Collares/Collar33.jpeg',
		},
	];

	var Collar12 = [
		{
			url: '/Collares/Collar34.jpeg',
		},
		{
			url: '/Collares/Collar35.jpeg',
		},
	];

	var Collar13 = [
		{
			url: '/Collares/Collar36.jpeg',
		},
		{
			url: '/Collares/Collar37.jpeg',
		},
	];

	var Collar14 = [
		{
			url: '/Collares/Collar38.jpg',
		},
		{
			url: '/Collares/Collar7.jpeg',
		},
	];

	var Collar15 = [
		{
			url: '/Collares/Collar45.jpg',
		},
		{
			url: '/Collares/Collar44.jpg',
		},
		{
			url: '/Collares/Collar42.jpg',
		},
		{
			url: '/Collares/Collar43.jpg',
		},
	];

	var Collar16 = [
		{
			url: '/Collares/Collar47.jpg',
		},
		{
			url: '/Collares/Collar46.jpg',
		},
		{
			url: '/Collares/Collar48.jpg',
		},
	];

	var Collar17 = [
		{
			url: '/Collares/Collar49.jpg',
		},
		{
			url: '/Collares/Collar51.jpg',
		},
		{
			url: '/Collares/Collar50.jpg',
		},
	];

	var Collar18 = [
		{
			url: '/Collares/Collar52.jpg',
		},
		{
			url: '/Collares/Collar53.jpg',
		},
	];

	var Collar19 = [
		{
			url: '/Collares/Collar54.jpg',
		},
		{
			url: '/Collares/Collar55.jpg',
		},
		{
			url: '/Collares/Collar56.jpg',
		},
	];

	var Collar20 = [
		{
			url: '/Collares/Collar57.jpg',
		},
		{
			url: '/Collares/Collar58.jpg',
		},
		{
			url: '/Collares/Collar59.jpg',
		},
		{
			url: '/Collares/Collar60.jpg',
		},
	];

	var Collar21 = [
		{
			url: '/Collares/Collar62.jpg',
		},
		{
			url: '/Collares/Collar63.jpg',
		},
		{
			url: '/Collares/Collar64.jpg',
		},
	];

	var Collar22 = [
		{
			url: '/Collares/Collar65.jpg',
		},
		{
			url: '/Collares/Collar66.jpg',
		},
	];

	var Collar23 = [
		{
			url: '/Collares/Collar67.jpg',
		},
		{
			url: '/Collares/Collar68.jpg',
		},
	];

	return (
		<div>
			<div className="container">
				<div className="flex justify-center text-5xl mx-40 mt-5 mb-10">
					Catálogo
				</div>

				<div className="mx-10 grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar23} />
						<div className="text-2xl font-bold my-2">$300</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar22} />
						<div className="text-2xl font-bold my-2">$250</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar21} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar20} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar19} />
						<div className="text-2xl font-bold my-2">$250</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar18} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar17} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar16} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar15} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar14} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar9} />
						<div className="text-2xl font-bold my-2">$450</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar10} />
						<div className="text-2xl font-bold my-2">$450</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar11} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar12} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar13} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar6} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar7} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar8} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar5} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar4} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar3} />
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar1} />
						<div className="text-2xl font-bold my-2">$400</div>
					</div>
					<div className="flex flex-col items-center">
						<CarouselFotos fotos={Collar2} />
						<div className="text-2xl font-bold my-2">$300</div>
					</div>
					<div className="flex flex-col items-center py-5">
						<img
							src="/Collares/Collar4.jpeg"
							alt=""
							className="sm:w-30 lg:w-60 rounded-2xl"
						/>
						<div className="text-2xl font-bold my-2">$300</div>
					</div>
					<div className="flex flex-col items-center py-5">
						<img
							src="/Collares/Collar8.jpeg"
							alt=""
							className="sm:w-30 lg:w-60 rounded-2xl"
						/>
						<div className="text-2xl font-bold my-2">$300</div>
					</div>
					<div className="flex flex-col items-center py-5">
						<img
							src="/Collares/Collar10.jpeg"
							alt=""
							className="sm:w-30 lg:w-60 rounded-2xl"
						/>
						<div className="text-2xl font-bold my-2">$350</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalogo;
