import '../styles/App.scss';
import { useState } from 'react';
import picRandom from '../images/picrandom.jpg';
import arrow from '../images/arrow.png';
import lateral from '../images/Lateral.png';
import target from '../images/target.png';

function App() {
	const [mode1, setMode1] = useState('');
	const [mode2, setMode2] = useState('hidden');
	const [mode3, setMode3] = useState('hidden');
	const [rotate1, setRotate1] = useState('down');
	const [rotate2, setRotate2] = useState('up');
	const [rotate3, setRotate3] = useState('up');
	const [palette, setPalette] = useState('palette1');

	const [data, setData] = useState({
		palette: '',
		name: '',
		job: '',
		phone: '',
		email: '',
		linkedin: '',
		github: '',
	});

	const handlePalette = (event) => {
		setPalette(event.target.id);
	};

	const handleInput = (event) => {
		const wichInput = event.currentTarget.name;

		if (wichInput === 'name') {
			setData({
				...data,
				name: event.currentTarget.value,
			});
			data.name = event.currentTarget.value;
		} else if (wichInput === 'job') {
			setData({
				...data,
				job: event.currentTarget.value,
			});
			data.job = event.currentTarget.value;
		} else if (wichInput === 'phone') {
			setData({
				...data,
				phone: event.currentTarget.value,
			});
			data.phone = event.currentTarget.value;
		} else if (wichInput === 'email') {
			setData({
				...data,
				email: event.currentTarget.value,
			});
			data.email = event.currentTarget.value;
		} else if (wichInput === 'linkedin') {
			setData({
				...data,
				linkedin: event.currentTarget.value,
			});
			data.linkedin = event.currentTarget.value;
		} else if (wichInput === 'github') {
			setData({
				...data,
				github: event.currentTarget.value,
			});
			data.github = event.currentTarget.value;
		}
	};

	const handleCollapsable1 = (event) => {
		console.log(event.currentTarget.id);
		if (mode1 === 'hidden') {
			setMode1('');
			setRotate1('down');
		} else {
			setMode1('hidden');
			setRotate1('up');
		}
	};

	const handleCollapsable2 = (event) => {
		console.log(event.currentTarget.id);
		if (mode2 === 'hidden') {
			setMode2('');
			setRotate2('down');
		} else {
			setMode2('hidden');
			setRotate2('up');
		}
	};

	const handleCollapsable3 = (event) => {
		console.log(event.currentTarget.id);
		if (mode3 === 'hidden') {
			setMode3('');
			setRotate3('down');
		} else {
			setMode3('hidden');
			setRotate3('up');
		}
	};

	return (
		<div>
			<header>
				<header id="header" className="header">
					<nav className="header__menu">
					
							<img className="header__menu--img" src={lateral} alt="Menu" />
					
					</nav>
				</header>
			</header>

			<main className="page">
				<section className="sample">
					{/* Botón Reset */}
					<button className="sample__reset js-resetButton" type="reset">
						<i className="far fa-trash-alt icon"></i>
						Reset
					</button>
					{/* Tarjeta previsualización */}
					<article className={`sample__card js_card_result ${palette}`}>
						<hgroup className="sample___card--title ">
							<h2 className="sample__card--title--name previewName">
								{data.name === '' ? 'Nombre Apellidos' : data.name}
							</h2>
							<h3 className="sample__card--title--job previewJob">
								{data.job === '' ? 'Front-end developer' : data.job}
							</h3>
						</hgroup>
						{/* Previsualización imagen */}
						<div
							className="sample__card--img js__profile-image"
							style={{ backgroundImage: `url(${picRandom})` }}
						></div>
						{/* Listado iconos redes */}
						<ul className="sample__card--contact  ">
							{/* Icono phone */}
							<li className="item item1">
								<a
									href={`tel: ${data.phone}`}
									target="_blank"
									title="Llamar"
									className="itemLink previewIcons"
									rel="noreferrer"
								>
									<i className="fas fa-mobile-alt"></i>
								</a>
							</li>
							{/* Icono mail */}
							<li className="item item2">
								<a
									href={`mailto: ${data.email}`}
									target="_blank"
									className="itemLink previewIcons"
									rel="noreferrer"
								>
									<i className="far fa-envelope"></i>
								</a>
							</li>
							{/* Icono linkedin */}
							<li className="item item3">
								<a
									href={`https://www.linkedin.com/in/${data.linkedin}`}
									target="_blank"
									className="itemLink previewIcons"
									rel="noreferrer"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							{/* Icono github */}
							<li className="item item4">
								<a
									href={`https://www.github.com/${data.github}`}
									target="_blank"
									className="itemLink previewIcons"
									rel="noreferrer"
								>
									<i className="fab fa-github-alt"></i>
								</a>
							</li>
						</ul>
					</article>
				</section>
				{/* - - - - - - - - - - - - - - - - - - - - - - */}

				{/* Formulario*/}
				<form className="formMarginGeneral js-textForm js-form" id="myForm">
					{/* Sección diseña */}
					<section className="sectionDesigns">
						<article className="collapsible-title ">
							{/* Header - diseña */}
							<div
								className="a js-headerClick"
								id="design"
								onClick={handleCollapsable1}
							>
								<p>
									<i className="far fa-object-ungroup"></i>Diseña
								</p>
								<div className={rotate1}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - diseña */}
							<div className={mode1}>
								<div className="color">
									<p className="text">colores</p>
									{/* Todas las paletas */}
									<div className="palette">
										<fieldset className="check" action="/signup">
											{/* Paleta */}
											<label className="check_one" htmlFor="palette1">
												<input
													defaultChecked={true}
													onChange={handlePalette}
													className="one"
													id="palette1"
													type="radio"
													value="1"
													name="palette"
												/>
												<div className="paletteA">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
											{/* Paleta */}
											<label className="check_one" htmlFor="palette2">
												<input
													onChange={handlePalette}
													className="one"
													id="palette2"
													type="radio"
													value="2"
													name="palette"
												/>
												<div className="paletteB">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
											{/* Paleta */}
											<label className="check_one" htmlFor="palette3">
												<input
													onChange={handlePalette}
													className="one"
													id="palette3"
													type="radio"
													value="3"
													name="palette"
												/>
												<div className="paletteC">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
											{/* Paleta */}
											<label className="check_one" htmlFor="palette4">
												<input
													onChange={handlePalette}
													className="one"
													id="palette4"
													type="radio"
													value="4"
													name="palette"
												/>
												<div className="paletteD">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
											{/* Paleta */}
											<label className="check_one" htmlFor="palette5">
												<input
													onChange={handlePalette}
													className="one"
													id="palette5"
													type="radio"
													value="5"
													name="palette"
												/>
												<div className="paletteE">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
											{/* Paleta */}
											<label className="check_one" htmlFor="palette">
												<input
													onChange={handlePalette}
													className="one"
													id="palette6"
													type="radio"
													value="6"
													name="palette"
												/>
												<div className="paletteF">
													<div className="palette_1"></div>
													<div className="palette_2"></div>
													<div className="palette_3"></div>
												</div>
											</label>
										</fieldset>
									</div>
								</div>
							</div>
						</article>
						{/* Línea divisoria */}
						<div className="line1"></div>
					</section>

					{/* Sección Rellena */}
					<section className="sectionDesigns">
						<article className="collapsible-title">
							{/* Header - Rellena */}
							<div className="a js-headerClick" onClick={handleCollapsable2}>
								<p>
									<i className="far fa-keyboard keyfill "></i>Rellena
								</p>
								<div className={rotate2}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - Rellena */}
							<div className={mode2}>
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
										onChange={handleInput}
										value={data.name}
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
										onChange={handleInput}
										value={data.job}
										className="quest__input js_input_job"
										placeholder="Ej: Front-end unicorn"
										id="job"
										type="text"
										name="job"
										required
									/>
									{/* Componente imagen */}
									<fieldset className="quest__secondfield">
										<label
											htmlFor="photo"
											className="quest__button js__profile-trigger"
										>
											Añadir imagen
										</label>

										<div className="action">
											<input
												type="file"
												name="photo"
												id="photo"
												className="action__hiddenField js__profile-upload-btn"
												required
											/>
										</div>
										<div className="quest__button--window js__profile-preview"></div>
									</fieldset>

									{/* Email*/}
									<label className="quest__label" htmlFor="email">
										Email
									</label>
									<input
										onChange={handleInput}
										value={data.email}
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
										onChange={handleInput}
										value={data.phone}
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
										onChange={handleInput}
										value={data.linkedin}
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
										onChange={handleInput}
										value={data.github}
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
					<section className="sectionDesigns">
						<article className="collapsible-title ">
							{/* Header - Comparte */}
							<div className="a js-headerClick" onClick={handleCollapsable3}>
								<p>
									<i className="fas fa-share-alt"></i>Comparte
								</p>
								<div className={rotate3}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - comparte*/}
							<div className={mode3}>
								{/* Botón crear tarjeta*/}
								<article className="button">
									<button className="button1 js_create_btn">
										<img className="target" src={target} alt="" />
										<p>Crear tarjeta</p>
									</button>
								</article>
								{/* Línea divisoria*/}
								<div className="line3"></div>
								{/* Sección tarjeta ya creada*/}
								<article className="share js-shareTwitter hiddenTwitter">
									<h1 className="title js-title">La tarjeta ha sido creada:</h1>
									<a
										href="/twitter"
										className="url js-url"
										target="_blank"
										rel="noreferrer"
									>
										¡Pulsa aquí!
									</a>
									<button className="button js-buttonTwitterOne">
										<a
											href="/twitter"
											target="_blank"
											className="js-buttonTwitter"
										>
											<i className="fab fa-twitter">
												<p className="twitter js-shareTwitter">
													{' '}
													Compartir en twitter
												</p>
											</i>
										</a>
									</button>
								</article>
							</div>
						</article>
						{/* Línea divisoria*/}
						<div className=" line4 js-line"></div>
					</section>
				</form>
			</main>

			<footer>
				<footer className="footer__container">
					<small className="footer__text"> &copy;Card-AdaS @2021 </small>
					<img
						className="logo__adalab"
						src="./assets/images/oks-2filas.png"
						alt=""
					/>
				</footer>
			</footer>
		</div>
	);
}

export default App;
