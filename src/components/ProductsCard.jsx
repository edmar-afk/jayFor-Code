/* eslint-disable react/prop-types */ import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ConversionRate = 0.018; // Assuming 1 PHP = 0.020 USD
function ProductsCard(props) {
	const { name, stack, status, fileName, downloads, price } = props;
	const convertedPrice = (price * ConversionRate).toFixed(2);
	return (
		<>
			<div className="relative m-4 w-full max-w-md overflow-hidden rounded-lg">
				<a href="#">
					<img
						className="h-fit rounded-t-lg  w-fit"
						src={fileName}
						alt="product image"
						draggable="false"
					/>
				</a>
				<span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-purple-400 text-center text-sm text-white">
					{status}
				</span>
				<div className="mt-4 px-1 pb-5">
					<a href="#">
						<h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
						<p className="text-sm font-semibold text-gray-400">{stack}</p>
					</a>
					<div className="mt-2.5 mb-5 flex items-center">
						<span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-bold">
							<FontAwesomeIcon
								icon={faDownload}
								className="mr-1"
							/>
							{downloads}
						</span>
						<p className="text-red-400 font-bold">Under Maintenance</p>
					</div>
					<div className="flex items-center justify-between">
						<p className="text-white">
							<span className="text-3xl font-bold">₱{price}</span>
							<span className="text-sm ml-2">${convertedPrice}</span>
						</p>
						<a
							href="#"
							className="flex items-center rounded-md bg-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-400 focus:scale-90 duration-200">
							<FontAwesomeIcon
								icon={faEye}
								className="mr-2"
							/>
							More Details
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductsCard;
