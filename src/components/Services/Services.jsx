import React, { useState } from 'react';
import './Services.css';
import services from '../../data/servicesData';

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  const handleClick = (serviceId) => {
    const clickedService = services.find((service) => service.id === serviceId);
    setActiveService(clickedService);
  };

  return (
    <section>
    <h2 className='services__title'>/ Services</h2>
    <div className="services-container">
      <div className="services">
        <div className="services-list">
          {services.map((service) => (
            <button
              key={service.id}
              className={`service-button ${activeService?.id === service.id ? 'active' : ''}`}
              onClick={() => handleClick(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>
        <div className="service-details">
          {activeService && (
            <>
              <p className='service-id'>/{activeService.id}</p>
              <h3 className="service-title">{activeService.title}</h3>
              <p className="service-description">{activeService.description}</p>
              <button className="want-button">Want</button>
            </>
          )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;
