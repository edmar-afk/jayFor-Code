function Gradient() {
  return (
		<>
			<div
				aria-hidden="true"
				className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20">
				<div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
				<div className="blur-[106px] h-32 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
				<div className="blur-[206px] h-56 bg-gradient-to-r from-purple-400 to-indigo-600"></div>
			</div>
		</>
	);
}

export default Gradient
