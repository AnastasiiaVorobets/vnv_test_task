import React from 'react';
import './Links.css';
import socialLinks from '../../data/linksData';

function Links() {
  return (
    <>
    <h2 className='links__title'>/ You can find us</h2>
    <div className="block">
      <ul className="social-links">
        {Object.keys(socialLinks).map((network) => (
          <li key={network}>
            <a href={socialLinks[network]} target="_blank" rel="noopener noreferrer">
              {network}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Links;
