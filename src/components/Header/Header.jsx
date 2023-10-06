import Widget from '../Widget/Widget';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__name'>
        <img src="/images/logo.png" alt="vnv_solutions" className='header__logo'/>
        <h1 className='header__logo-name'>SOLUTIONS</h1>
      </div>
      <p className='header__description'>Easy, quality, IT - winning solutions for your business</p>
      <div className='header__inner'>
        <h2 className='header__title'>/ IT company </h2>
        <button className='header__button'>Order →</button>
      </div>
      <Widget />
    </header>
  )
}

export default Header;
