import React from 'react';
import './FourSectionsComponent.css'; // import your CSS file for styling

const ServiceSelector = () => {
  const services = [
    {
      name: 'Extra Fresh Condo Clean - $35',
      image: 'home-clean.jpg',
      descriprion: '1:15 hours of freshennig session',
    },
    {
      name: 'Premium Condo Service - $65',
      image: 'carpets-clean.jpg',
      descriprion: '2:15 hours of deep clean',
    },
    {
      name: 'Property Management - book to quote - free',
      image: 'property-management.jpg',
      descriprion: 'Full building management by tailored requirements',
    },
    {
      name: 'Office Clean - $65',
      image: 'office-clean.jpg',
      descriprion: 'Office brightening and cleaning by requirements',
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
            <div className='serviceParagraph'>{service.descriprion}</div>

            <br />
            <br />
            <p className='callToAction'>Click here to Book</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
