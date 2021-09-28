import arrow from '../images/arrow.png';

const Design = (props) => {
  return (
    <>
      <section className='sectionDesigns'>
        <article className='collapsible-title '>
          {/* Header - diseña */}
          <div
            className='a js-headerClick'
            id='design'
            onClick={props.handleCollapsable1}
          >
            <p>
              <i className='far fa-object-ungroup'></i>Diseña
            </p>
            <div className={props.rotate1}>
              <img className='arrow' src={arrow} alt='' />
            </div>
          </div>
          {/* Cuerpo - diseña */}
          <div className={props.mode1}>
            <div className='color'>
              <p className='text'>colores</p>
              {/* Todas las paletas */}
              <div className='palette'>
                <fieldset className='check' action='/signup'>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette1'>
                    <input
                      defaultChecked={true}
                      onChange={props.handlePalette}
                      className='one'
                      id='palette1'
                      type='radio'
                      value='1'
                      name='palette'
                    />
                    <div className='paletteA'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette2'>
                    <input
                      onChange={props.handlePalette}
                      className='one'
                      id='palette2'
                      type='radio'
                      value='2'
                      name='palette'
                    />
                    <div className='paletteB'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette3'>
                    <input
                      onChange={props.handlePalette}
                      className='one'
                      id='palette3'
                      type='radio'
                      value='3'
                      name='palette'
                    />
                    <div className='paletteC'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette4'>
                    <input
                      onChange={props.handlePalette}
                      className='one'
                      id='palette4'
                      type='radio'
                      value='4'
                      name='palette'
                    />
                    <div className='paletteD'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette5'>
                    <input
                      onChange={props.handlePalette}
                      className='one'
                      id='palette5'
                      type='radio'
                      value='5'
                      name='palette'
                    />
                    <div className='paletteE'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                  {/* Paleta */}
                  <label className='check_one' htmlFor='palette'>
                    <input
                      onChange={props.handlePalette}
                      className='one'
                      id='palette6'
                      type='radio'
                      value='6'
                      name='palette'
                    />
                    <div className='paletteF'>
                      <div className='palette_1'></div>
                      <div className='palette_2'></div>
                      <div className='palette_3'></div>
                    </div>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </article>
        {/* Línea divisoria */}
        <div className='line1'></div>
      </section>
    </>
  );
};

export default Design;
