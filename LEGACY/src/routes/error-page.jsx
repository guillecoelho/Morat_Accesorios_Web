import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="flex h-screen">
			<div className="m-auto">
				<div className="flex flex-col">
					<div className="flex justify-center my-2">
						<h1 className="text-5xl font-bold">Oops!</h1>
					</div>
					<div className="flex justify-center my-2">
						<p className="text-xl">Sorry, an unexpected error has occurred.</p>
					</div>
					<div className="flex justify-center my-2">
						<p>
							<i>{error.statusText || error.message}</i>
						</p>
					</div>
					<div className="flex flex-col my-2">
						<div className="flex justify-center">
							<img className="w-60 h-auto" src="/sad-bear.jpg" alt="" />
						</div>
						<div className="flex justify-center">
							<p>
								Drawing by EmpressShizuka in{' '}
								<a
									className="text-blue-600 visited:text-purple-600"
									href="https://www.deviantart.com/empressshizuka/art/Sad-bear-555026360"
								>
									DevianArt
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
