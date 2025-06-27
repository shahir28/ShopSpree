import { useState } from "react";

const ContactPage = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message sent successfully!");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4">
			<h1 className="text-4xl font-bold text-emerald-400 mb-6">Contact ShopSpree</h1>
			<form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
				<input
					type="text"
					placeholder="Your Name"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
					required
				/>
				<input
					type="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
					required
				/>
				<textarea
					placeholder="Your Message"
					value={formData.message}
					onChange={(e) => setFormData({ ...formData, message: e.target.value })}
					className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
					required
				/>
				<button
					type="submit"
					className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded transition duration-300"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
