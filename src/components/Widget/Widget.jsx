import React, { useState } from 'react';
import './Widget.css';
import whiteLogo from '../../images/whiteLogo.png';

function Widget() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="widget">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>Right now you can get a FREE consultation</p>
        <a
          href="https://t.me/vnv_solutions"
          className='link'
        >
          Write to us → Telegram
        </a>
        <img 
          src={whiteLogo} 
          alt="vnv_solutions" 
          className='widget__logo'
        />
      </div>
    )
  );
}

export default Widget;
