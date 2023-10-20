function Header() {
	return (
		<div>
			<div className="bg-gray-300 flex justify-between items-center p-5 text-black">
				<div>
					<a href="https://www.instagram.com/morat.uyy/" target="_blanck">
						<img src="/instagram.png" alt="" className="w-10 md:w-5 lg:w-10" />
					</a>
				</div>
				<div className="fontMerienda w-100 text-5xl">MORAT</div>
				<div></div>
			</div>

			<div className="fontMerienda bg-gray-600 flex justify-center items-center p-1 text-white">
				Accesorios hechos a mano
			</div>

			<div className="bg-red-50 flex justify-center items-center p-1 text-black text-center">
				Elegí tu modelo y mandanos captura por Instagram | Envíos en mvd y al
				interior
			</div>
		</div>
	);
}

export default Header;
