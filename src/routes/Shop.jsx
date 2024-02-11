import ChatBot from "../components/ChatBot";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";
import Gradient from "../components/Gradient";
import axios from "axios";

function Shop() {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(`https://heolinapi.pythonanywhere.com/api/products/`);
			setProducts(response.data);
			console.log(response);
		} catch (error) {
			console.log("Error: ", error.response);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			<Gradient />

			<div className="max-w-7xl mx-auto px-4 mb-16 mt-44">
				<div className="mb-12 space-y-2 text-center">
					<h2 className="text-3xl font-bold md:text-7xl text-white mb-4">Cart-astrophic Creations</h2>
					<div
						className="p-2 bg-indigo-800 items-center rounded-2xl text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
						role="alert">
						<span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-sm font-bold mr-3">BETA</span>
						<span className="font-semibold mr-2 text-left flex-auto text-xs md:text-[15px]">
							Where users turn into superheroes, defeating bugs and glitches with their mighty feedback!
						</span>
					</div>
					<p className="lg:mx-auto lg:w-7/12 text-gray-300">
						Looking for a capstone project? Discover innovation, find your perfect capstone system today! 🚀 <br />
						<b className="text-blue-600">#CapstoneSystems #Innovation #Technology</b>
					</p>
				</div>
			</div>

			<div className="flex flex-row justify-evenly flex-wrap mt-24">
				{products.map((items) => {
					const { name, stack, status, fileName, downloads, price } = items;
					return (
						<ProductsCard
							key={items.id}
							name={name}
							status={status}
							stack={stack}
							fileName={fileName}
							downloads={downloads}
							price={price}
						/>
					);
				})}
			</div>
			{/* <NotFound /> */}
			<ChatBot />
		</>
	);
}

export default Shop;
