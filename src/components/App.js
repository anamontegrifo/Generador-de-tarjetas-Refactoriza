import '../styles/App.scss';
import { useState } from 'react';
import picRandom from '../images/picrandom.jpg';
import arrow from '../images/arrow.png';
import lateral from '../images/Lateral.png';
import target from '../images/target.png';

function App() {
	const [mode, setMode] = useState('');
	const [rotate, setRotate] = useState('up');

	const handleCollapsable = (event) => {
		console.log(event.currentTarget.id);
		if (mode === 'hidden') {
			setMode('');
			setRotate('down');
		} else {
			setMode('hidden');
			setRotate('up');
		}
	};

	return (
		<div>
			<header>
				<header id="header" className="header">
					<nav className="header__menu">
						<a
							href="http://beta.adalab.es/project-promo-n-module-2-team-5/"
							title="Menu"
						>
							<img className="header__menu--img" src={lateral} alt="Menu" />
						</a>
					</nav>
				</header>
			</header>

			<main className="page">
				<section className="sample">
					{/* Botón Reset */}
					<button className="sample__reset js-resetButton" type="reset">
						<i className="far fa-trash-alt"></i>
						Reset
					</button>
					{/* Tarjeta previsualización */}
					<article className="sample__card js_card_result">
						<hgroup className="sample___card--title">
							<h2 className="sample__card--title--name js-nameCard js-colorTitle">
								Nombre Apellido
							</h2>
							<h3 className="sample__card--title--job js-jobCard js-colorSubtitle">
								Front-end developer
							</h3>
						</hgroup>
						{/* Previsualización imagen */}
						<div
							className="sample__card--img js__profile-image"
							style={{ backgroundImage: `url(${picRandom})` }}
						></div>
						{/* Listado iconos redes */}
						<ul className="sample__card--contact">
							{/* Icono phone */}
							<li className="item item1">
								<a
									href="/phone"
									target="_blank"
									title="Llamar"
									className="itemLink js-colorIcon js-phoneCard"
								>
									<i className="fas fa-mobile-alt"></i>
								</a>
							</li>
							{/* Icono mail */}
							<li className="item item2">
								<a
									href="/mail"
									target="_blank"
									className="itemLink js-colorIcon js-emailCard"
								>
									<i className="far fa-envelope"></i>
								</a>
							</li>
							{/* Icono linkedin */}
							<li className="item item3">
								<a
									href="/linkedin"
									target="_blank"
									className="itemLink js-colorIcon js-linkedin"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							{/* Icono github */}
							<li className="item item4">
								<a
									href="/github"
									target="_blank"
									className="itemLink js-colorIcon js-githubcard"
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
								onClick={handleCollapsable}
							>
								<p>
									<i className="far fa-object-ungroup"></i>Diseña
								</p>
								<div className={rotate}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - diseña */}
							<div className={mode}>
								<div className="color">
									<p className="text">colores</p>
									{/* Todas las paletas */}
									<div className="palette">
										<fieldset className="check" action="/signup">
											{/* Paleta */}
											<label
												className="check_one js-paletteOne js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
											<label
												className="check_one js-paletteTwo js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
											<label
												className="check_one js-paletteThree js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
											<label
												className="check_one js-paletteFour js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
											<label
												className="check_one js-paletteFive js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
											<label
												className="check_one js-paletteSix js_palette"
												htmlFor="palette"
											>
												<input
													className="one"
													id="palette"
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
					<section className="section_fill">
						<article className="collapsible-title">
							{/* Header - Rellena */}
							<div
								className="boxt a js-headerClick"
								onClick={handleCollapsable}
							>
								<i className="far fa-keyboard keyfill"></i>
								<h2 className="boxt__title">Rellena</h2>
								<div className={rotate}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - Rellena */}
							<div className={mode}>
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
										className="quest__input js_input_email"
										placeholder="Ej: sally-hill@gmail.com"
										id="email"
										type="text"
										name="email"
										required
									/>
									{/* Phone */}
									<label className="quest__label" htmlFor="phone">
										Teléfono
									</label>
									<input
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
										className="quest__input js_input_linkedin"
										placeholder="Ej: sally-hill"
										id="linkedin"
										type="text"
										name="Linkedin-profile"
										required
									/>
									{/* github */}
									<label className="quest__label" htmlFor="github">
										Github
									</label>
									<input
										className="quest__input js_input_github"
										placeholder="@sally-hill"
										id="github"
										type="text"
										name="Github-profile"
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
							<div className="a js-headerClick" onClick={handleCollapsable}>
								<p>
									<i className="fas fa-share-alt"></i>Comparte
								</p>
								<div className={rotate}>
									<img className="arrow" src={arrow} alt="" />
								</div>
							</div>
							{/* Cuerpo - comparte*/}
							<div className={mode}>
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
								<article className="share js-shareTwitter ">
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
						<div className="line3 line4 js-line"></div>
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
