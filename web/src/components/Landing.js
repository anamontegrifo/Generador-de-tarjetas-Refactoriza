import { Link } from 'react-router-dom';
import landingLogo from '../images/Lateral.png';
import StartButton from './StartButton';
const Landing = () => {
  return (
    <section className='landing__hero'>
      <img className='landing__logo' src={landingLogo} alt='tarjetas-molonas' />
      <h1 className='landing__title'>Crea tu tarjeta de visita</h1>
      <p className='landing__paragraf'>
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>
      <div className='landing__wrapper--icons'>
        <span className='text__icon'>
          <i className='far fa-object-ungroup'></i> Diseña
        </span>
        <span className='text__icon'>
          <i className='far fa-keyboard'></i>Rellena
        </span>
        <span className='text__icon'>
          <i className='fas fa-share-alt'></i>Comparte
        </span>
      </div>

      <Link to='/cards'>
        <StartButton className='link1' text='COMENZAR'></StartButton>
      </Link>
    </section>
  );
};
export default Landing;
