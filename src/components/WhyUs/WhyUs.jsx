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
        <div className='scroll-left'>
          <button
            className="scroll-button"
            onClick={scrollLeft}
          >
            ←
          </button>
        </div>
        <div className="advantages-container" ref={containerRef}>
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className="advantage"
              style={{ display: index === visibleAdvantageIndex ? 'block' : 'none' }}
            >
              <p className='advantage__id'>0{advantage.id}/</p>
              <div className='advantage__text'>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
              <button
                className="order-button"
                onClick={scrollRight}
              >
                Order
              </button>
            </div>
          ))}
        </div>
        <div className="scroll-right">
          <button
            className="scroll-button"
            onClick={scrollRight}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
