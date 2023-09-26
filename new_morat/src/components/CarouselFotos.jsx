'use client';

import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function CarouselFotos(props) {
	const slides = props.fotos;

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="flex flex-col items-center">
			<div className="text-2xl font-bold my-2">{props.nombre}</div>

			<div className="w-60 h-[500px] py-5 relative group">
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="w-full h-full rounded-2xl bg-center bg-cover duration-500 object-contain"
				></div>
				{/* Left Arrow */}
				<div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={20} />
				</div>
				{/* Right Arrow */}
				<div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={20} />
				</div>
				<div className="flex top-4 justify-center py-2">
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className="text-xl cursor-pointer"
						>
							<RxDotFilled />
						</div>
					))}
				</div>
			</div>

			<div className="text-2xl font-bold my-2">{props.precio}</div>
		</div>
	);
}

export default CarouselFotos;
