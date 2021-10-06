import { useState } from 'react';
import arrow from '../images/arrow.png';
import target from '../images/target.png';
import Design from './Design';
import ImageReader from './ImageReader';
import Api from '../service/Api';

const Form = (props) => {
  const [urlShare, setUrlShare] = useState('');
  const [successCard, setSuccessCard] = useState('hidden');
  const [cardCreated, setCardCreated] = useState('');
  const [linkTwitter, setLinkTwitter] = useState('');

  const handleClick = () => {
    Api(props.data).then((response) => {
      setUrlShare(response.cardURL);

      if (response.success) {
        // Estas variable es para remover/añadir la clase hidden
        setSuccessCard('');
        setCardCreated('');
        setLinkTwitter('');
      } else {
        setSuccessCard('');
        setCardCreated('hidden');
        setLinkTwitter('hidden');

        if (props.data.name === '') {
          setUrlShare(' Debes rellenar tu nombre ');
        } else if (props.data.job === '') {
          setUrlShare(' Debes rellenar tu profesión ');
        } else if (props.data.photo === '') {
          setUrlShare(' Debes rellenar tu foto ');
        } else if (props.data.email === '') {
          setUrlShare(' Debes rellenar tu email ');
        } else if (props.data.phone === '') {
          setUrlShare(' Debes rellenar tu móvil ');
        } else if (props.data.linkedin === '') {
          setUrlShare(' Debes rellenar tu linkedin ');
        } else if (props.data.github === '') {
          setUrlShare(' Debes rellenar tu github ');
        }
      }
    });
  };

  return (
    <>
      {/* Formulario*/}
      <form className='formMarginGeneral js-textForm js-form' id='myForm'>
        {/* Sección diseña */}
        <Design
          handleCollapsable1={props.handleCollapsable1}
          rotate1={props.rotate1}
          mode1={props.mode1}
          handlePalette={props.handlePalette}
        />
        {/* Sección Rellena */}
        <section className='sectionDesigns'>
          <article className='collapsible-title'>
            {/* Header - Rellena */}
            <div
              className='a js-headerClick'
              onClick={props.handleCollapsable2}
            >
              <p>
                <i className='far fa-keyboard keyfill '></i>Rellena
              </p>
              <div className={props.rotate2}>
                <img className='arrow' src={arrow} alt='' />
              </div>
            </div>
            {/* Cuerpo - Rellena */}
            <div className={props.mode2}>
              <fieldset
                className='quest hidden js-textForm'
                action='/signup'
                method='post'
              >
                {/* Nombre */}
                <label className='quest__label' htmlFor='name'>
                  Nombre completo
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataName}
                  className='quest__input js-name js_input_name'
                  placeholder='Ej: Sali Jill'
                  id='name'
                  type='text'
                  name='name'
                  required
                />
                {/* Job */}
                <label className='quest__label' htmlFor='job'>
                  Puesto
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataJob}
                  className='quest__input js_input_job'
                  placeholder='Ej: Front-end unicorn'
                  id='job'
                  type='text'
                  name='job'
                  required
                />

                <ImageReader
                  handleImage={props.handleImage}
                  dataImage={props.dataImage}
                />

                {/* Email*/}
                <label className='quest__label' htmlFor='email'>
                  Email
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataEmail}
                  className='quest__input js_input_email'
                  placeholder='Ej: sally-hill@gmail.com'
                  id='email'
                  type='email'
                  name='email'
                  required
                />
                {/* Phone */}
                <label className='quest__label' htmlFor='phone'>
                  Teléfono
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataPhone}
                  className='quest__input js_input_phone'
                  placeholder='Ej:555-55-55-55'
                  id='phone'
                  type='tel'
                  name='phone'
                  required
                />
                {/* linkedin */}
                <label className='quest__label' htmlFor='linkedin'>
                  Linkedin
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataLink}
                  className='quest__input js_input_linkedin'
                  placeholder='Ej: sally-hill'
                  id='linkedin'
                  type='text'
                  name='linkedin'
                  required
                />
                {/* github */}
                <label className='quest__label' htmlFor='github'>
                  Github
                </label>
                <input
                  onChange={props.handleInput}
                  value={props.dataGit}
                  className='quest__input js_input_github'
                  placeholder='@sally-hill'
                  id='github'
                  type='text'
                  name='github'
                  required
                />
              </fieldset>
            </div>
          </article>
          {/* Línea divisoria */}
          <div className='line1'></div>
        </section>

        {/* Sección Comparte */}
        <section className='sectionDesigns'>
          <article className='collapsible-title '>
            {/* Header - Comparte */}
            <div
              className='a js-headerClick'
              onClick={props.handleCollapsable3}
            >
              <p>
                <i className='fas fa-share-alt'></i>Comparte
              </p>
              <div className={props.rotate3}>
                <img className='arrow' src={arrow} alt='' />
              </div>
            </div>
            {/* Cuerpo - comparte*/}
            <div className={props.mode3}>
              {/* Botón crear tarjeta*/}
              <article className='button'>
                <button className='button1 js_create_btn' onClick={handleClick}>
                  <img className='target' src={target} alt='' />
                  <p>Crear tarjeta</p>
                </button>
              </article>
              {/* Línea divisoria*/}
              <div className='line3'></div>
              {/* Sección tarjeta ya creada*/}
              <article className='share js-shareTwitter'>
                <h1 className='title js-title'>La tarjeta ha sido creada:</h1>
                <a
                  href={urlShare}
                  className='url js-url'
                  target='_blank'
                  rel='noreferrer'
                >
                  {urlShare}
                </a>
                <button className='button js-buttonTwitterOne'>
                  <a
                    href='/twitter'
                    target='_blank'
                    className='js-buttonTwitter'
                  >
                    <i className='fab fa-twitter'>
                      <p className='twitter js-shareTwitter'>
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
          <div className=' line4 js-line'></div>
        </section>
      </form>
    </>
  );
};

export default Form;
