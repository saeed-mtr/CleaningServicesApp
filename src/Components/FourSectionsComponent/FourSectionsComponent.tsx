import React from 'react';
import './FourSectionsComponent.css'; // import your CSS file for styling

const ServiceSelector = () => {
  const services = [
    {
      name: 'Extra Fresh Condo Clean - $35',
      image: 'home-clean.jpg',
    },
    {
      name: 'Premium Condo Service - $65',
      image: 'carpets-clean.jpg',
    },
    {
      name: 'Property Management - book to quote - free',
      image: 'property-management.jpg',
    },
    {
      name: 'Office Clean - $65',
      image: 'office-clean.jpg',
    },
  ];

  const handleNavigate = (service: string) => {
    if (service === 'Extra Fresh Condo Clean') {
      window.location.href = 'https://tidycal.com/freshtoronto/extrafreshcondo';
    } else {
      window.location.href = 'https://tidycal.com/freshtoronto/premiumcondo';
    }
  };

  return (
    <div className='service-selector'>
      {services.map((service, index) => (
        <div className='service-item-line'>
          <div
            key={index}
            className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => {
              handleNavigate(service.name);
            }}
          >
            <img
              src={`${service.image}`}
              alt={service.name}
              className={`service-image ${
                index % 2 === 0 ? 'ServiceLeft' : 'ServiceRight'
              }`}
            />
            <div className='service-name'>{service.name}</div>
            <br />
            <br />
            <p className='callToAction'>Click here to Book</p>
          </div>
          <div className='serviceParagraph'></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
