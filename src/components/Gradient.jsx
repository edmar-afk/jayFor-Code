function Gradient(props) {
	// eslint-disable-next-line react/prop-types
	const { customStyle } = props;
	return (
		<>
			<div
				aria-hidden="true"
				className={`absolute ${customStyle} opacity-40`}>
				<div className="blur-[90px] h-44 w-72 bg-purple-400"></div>
			</div>
		</>
	);
}

export default Gradient;
