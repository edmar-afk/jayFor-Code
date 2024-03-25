function Gradient(props) {
	// eslint-disable-next-line react/prop-types
	const { customStyle } = props;
	return (
		<>
			<div
				aria-hidden="true"
				className={`absolute ${customStyle} opacity-60`}>
				<div className="blur-[80px] h-24 w-44 bg-purple-400"></div>
			</div>
		</>
	);
}

export default Gradient;
