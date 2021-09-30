import arrow from '../images/arrow.png';
import target from '../images/target.png';
import Design from './Design';
import ImageReader from './ImageReader';

const Form = (props) => {
  return (
    <>
      {/* Formulario*/}
      <form className="formMarginGeneral js-textForm js-form" id="myForm">
        {/* Sección diseña */}
        <Design
          handleCollapsable1={props.handleCollapsable1}
          rotate1={props.rotate1}
          mode1={props.mode1}
          handlePalette={props.handlePalette}
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
                {/* Componente imagen */}
                {/* <fieldset className="quest__secondfield"> */}
                {/* <label
										htmlFor="photo"
										className="quest__button js__profile-trigger"
									>
										Añadir imagen
									</label> */}

                {/* <div className="action"> */}
                <ImageReader
                  handleImage={props.handleImage}
                  dataImage={props.dataImage}
                />
                {/* <input
											type="file"
											name="photo"
											id="photo"
											onChange={props.handleImage}
											className="action__hiddenField js__profile-upload-btn"
											required
										/> */}
                {/* </div> */}
                {/* <div className="quest__button--window js__profile-preview"></div> */}
                {/* </fieldset> */}

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
        <section className="sectionDesigns">
          <article className="collapsible-title ">
            {/* Header - Comparte */}
            <div
              className="a js-headerClick"
              onClick={props.handleCollapsable3}
            >
              <p>
                <i className="fas fa-share-alt"></i>Comparte
              </p>
              <div className={props.rotate3}>
                <img className="arrow" src={arrow} alt="" />
              </div>
            </div>
            {/* Cuerpo - comparte*/}
            <div className={props.mode3}>
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
                        {" "}
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
    </>
  );
};

export default Form;
