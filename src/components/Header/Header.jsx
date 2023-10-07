import './Header.css';
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="vnv_solutions"
        className='header__logo'
      />
      <p className='header__description'>Easy, quality, IT - winning solutions for your business</p>
      <div className='header__inner'>
        <h2 className='header__title'>/ IT company </h2>
        <button className='header__button'>Order →</button>
      </div>
    </header>
  )
}

export default Header;
