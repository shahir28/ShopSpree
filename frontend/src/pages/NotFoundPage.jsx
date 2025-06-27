import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center">
			<h1 className="text-4xl font-bold text-emerald-400 mb-4">404 - Page Not Found</h1>
			<p className="text-gray-300 mb-6">The page you are looking for does not exist on ShopSpree.</p>
			<Link
				to="/"
				className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition duration-300"
			>
				Go to Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
