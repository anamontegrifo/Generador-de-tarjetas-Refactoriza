import Icons from './Icons';

const Preview = (props) => {
	return (
		<>
			<section className="sample">
				{/* Botón Reset */}
				<button
					className="sample__reset js-resetButton"
					type="reset"
					onClick={props.handleReset}
				>
					<i className="far fa-trash-alt icon"></i>
					Reset
				</button>
				{/* Tarjeta previsualización */}
				<article
					className={`sample__card js_card_result ${props.palettePreview}`}
				>
					<hgroup className="sample___card--title ">
						<h2 className="sample__card--title--name previewName">
							{props.dataPreview.name === ''
								? 'Nombre Apellidos'
								: props.dataPreview.name}
						</h2>
						<h3 className="sample__card--title--job previewJob">
							{props.dataPreview.job === ''
								? 'Front-end developer'
								: props.dataPreview.job}
						</h3>
					</hgroup>
					{/* Previsualización imagen */}

					<div
						className="sample__card--img js__profile-image"
						style={{ backgroundImage: `url(${props.dataImage})` }}
					></div>

					{/* Listado iconos redes */}
					<ul className="sample__card--contact  ">
						{/* Icono phone */}
						<Icons
							hrefIcon={`tel: ${props.dataPreview.phone}`}
							titleIcon="Llamar"
							classIcon="fas fa-mobile-alt"
						/>
						{/* Icono mail */}
						<Icons
							hrefIcon={`mailto: ${props.dataPreview.email}`}
							titleIcon="Email"
							classIcon="far fa-envelope"
						/>
						{/* Icono linkedin */}
						<Icons
							hrefIcon={`https://www.linkedin.com/in/${props.dataPreview.linkedin}`}
							titleIcon="Linkedin"
							classIcon="fab fa-linkedin-in"
						/>
						{/* Icono github */}
						<Icons
							hrefIcon={`https://www.github.com/${props.dataPreview.github}`}
							titleIcon="Github"
							classIcon="fab fa-github-alt"
						/>
					</ul>
				</article>
			</section>
		</>
	);
};

export default Preview;
