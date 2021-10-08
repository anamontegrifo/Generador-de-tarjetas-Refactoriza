const Share = (props) => {
  const handleClick = () => {
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      body: JSON.stringify(props.data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          props.setError(data.error);
          props.setSuccess('');
        } else if (data.success === true) {
          props.setSuccess(data.cardURL);

          props.setError('');
        }
      });
  };

  return (
    <section className='sectionDesigns'>
      <article className='collapsible-title '>
        {/* Header - Comparte */}
        <div className='a js-headerClick' onClick={props.handleCollapsable3}>
          <p>
            <i className='fas fa-share-alt'></i>Comparte
          </p>
          <div className={props.rotate3}>
            <img className='arrow' src={props.arrow} alt='' />
          </div>
        </div>
        {/* Cuerpo - comparte*/}
        <div className={props.mode3}>
          {/* Botón crear tarjeta*/}
          <article className='button'>
            <button className='button1 js_create_btn' onClick={handleClick}>
              <img className='target' src={props.target} alt='' />
              <p>Crear tarjeta</p>
            </button>
          </article>
          {/* Línea divisoria*/}
          <div className='line3'></div>
          {/* Sección tarjeta ya creada*/}
          {props.success !== '' ? (
            <article className='share js-shareTwitter'>
              <h1 className='title js-title'>La tarjeta ha sido creada:</h1>
              <a
                href={props.success}
                className='url js-url'
                target='_blank'
                rel='noreferrer'
              >
                {props.success}
              </a>
              <button className='button js-buttonTwitterOne'>
                <a href='/twitter' target='_blank' className='js-buttonTwitter'>
                  <i className='fab fa-twitter'>
                    <p className='twitter js-shareTwitter'>
                      {' '}
                      Compartir en twitter
                    </p>
                  </i>
                </a>
              </button>
            </article>
          ) : (
            ''
          )}
          {props.error !== '' ? (
            <article className='share js-shareTwitter'>
              <h1 className='title js-title'>La tarjeta NO ha sido creada:</h1>
              <p>{props.error}</p>
            </article>
          ) : (
            ''
          )}
        </div>
      </article>
      {/* Línea divisoria*/}
      <div className=' line4 js-line'></div>
    </section>
  );
};
export default Share;
