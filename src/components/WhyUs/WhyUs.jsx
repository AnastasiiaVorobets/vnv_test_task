import React, { useRef, useState } from 'react';
import './WhyUs.css';
import advantages from '../../data/advantagesData';

function WhyUs() {
  const containerRef = useRef(null);
  const [visibleAdvantageIndex, setVisibleAdvantageIndex] = useState(0);
  const totalAdvantages = advantages.length;

  const scrollLeft = () => {
    if (visibleAdvantageIndex > 0) {
      setVisibleAdvantageIndex(visibleAdvantageIndex - 1);
    }
  };

  const scrollRight = () => {
    if (visibleAdvantageIndex < totalAdvantages - 1) {
      setVisibleAdvantageIndex(visibleAdvantageIndex + 1);
    }
  };

  return (
    <section>
      <h2 className='whyUs__title'>/ Why Us?</h2>
      <div className="whyUs">
        <button className="scroll-button" onClick={scrollLeft}>←</button>
        <div className="advantages-container" ref={containerRef}>
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className="advantage"
              style={{ display: index === visibleAdvantageIndex ? 'block' : 'none' }}
            >
              <p className='advantage__id'>0{advantage.id}/</p>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={scrollRight}>→</button>
      </div>
    </section>
  );
}

export default WhyUs;

