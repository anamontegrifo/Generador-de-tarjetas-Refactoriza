import arrow from '../images/arrow.png';
import target from '../images/target.png';
import Design from './Design';
import ImageReader from './ImageReader';
import Share from './Share';

const Form = (props) => {
	return (
		<>
			{/* Formulario*/}
			<form
				className="formMarginGeneral js-textForm js-form"
				id="myForm"
				onSubmit={(ev) => ev.preventDefault()}
			>
				{/* Sección diseña */}
				<Design
					handleCollapsable1={props.handleCollapsable1}
					rotate1={props.rotate1}
					mode1={props.mode1}
					handlePalette={props.handlePalette}
					palette={props.dataPalette}
				/>
				{/* Sección Rellena */}
				<section className="sectionDesigns">
					<article className="collapsible-title">
						{/* Header - Rellena */}
						<div
							className="a js-headerClick"
							onClick={props.handleCollapsable2}
						>
							<p>
								<i className="far fa-keyboard keyfill "></i>Rellena
							</p>
							<div className={props.rotate2}>
								<img className="arrow" src={arrow} alt="" />
							</div>
						</div>
						{/* Cuerpo - Rellena */}
						<div className={props.mode2}>
							<fieldset
								className="quest hidden js-textForm"
								action="/signup"
								method="post"
							>
								{/* Nombre */}
								<label className="quest__label" htmlFor="name">
									Nombre completo
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataName}
									className="quest__input js-name js_input_name"
									placeholder="Ej: Sali Jill"
									id="name"
									type="text"
									name="name"
									required
								/>
								{/* Job */}
								<label className="quest__label" htmlFor="job">
									Puesto
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataJob}
									className="quest__input js_input_job"
									placeholder="Ej: Front-end unicorn"
									id="job"
									type="text"
									name="job"
									required
								/>

								<ImageReader
									handleImage={props.handleImage}
									dataImage={props.dataImage}
								/>

								{/* Email*/}
								<label className="quest__label" htmlFor="email">
									Email
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataEmail}
									className="quest__input js_input_email"
									placeholder="Ej: sally-hill@gmail.com"
									id="email"
									type="email"
									name="email"
									required
								/>
								{/* Phone */}
								<label className="quest__label" htmlFor="phone">
									Teléfono
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataPhone}
									className="quest__input js_input_phone"
									placeholder="Ej:555-55-55-55"
									id="phone"
									type="tel"
									name="phone"
									required
								/>
								{/* linkedin */}
								<label className="quest__label" htmlFor="linkedin">
									Linkedin
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataLink}
									className="quest__input js_input_linkedin"
									placeholder="Ej: sally-hill"
									id="linkedin"
									type="text"
									name="linkedin"
									required
								/>
								{/* github */}
								<label className="quest__label" htmlFor="github">
									Github
								</label>
								<input
									onChange={props.handleInput}
									value={props.dataGit}
									className="quest__input js_input_github"
									placeholder="@sally-hill"
									id="github"
									type="text"
									name="github"
									required
								/>
							</fieldset>
						</div>
					</article>
					{/* Línea divisoria */}
					<div className="line1"></div>
				</section>

				{/* Sección Comparte */}
				<Share
					handleCollapsable3={props.handleCollapsable3}
					rotate3={props.rotate3}
					arrow={arrow}
					mode3={props.mode3}
					target={target}
					data={props.data}
					success={props.success}
					setSuccess={props.setSuccess}
					error={props.error}
					setError={props.setError}
				/>
			</form>
		</>
	);
};

export default Form;
