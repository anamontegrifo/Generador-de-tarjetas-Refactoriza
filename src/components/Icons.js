const Icons = (props) => {
	return (
		<>
			<li className="item item1">
				<a
					href={props.hrefIcon}
					target="_blank"
					title={props.titleIcon}
					className="itemLink previewIcons"
					rel="noreferrer"
				>
					<i className={props.classIcon}></i>
				</a>
			</li>
		</>
	);
};

export default Icons;
