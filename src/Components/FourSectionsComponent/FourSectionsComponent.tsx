import React from 'react';
import './FourSectionsComponent.css'; // import your CSS file for styling

const ServiceSelector = () => {
  const services = [
    {
      name: 'House Clean',
      image: 'home-clean.jpg',
    },
    {
      name: 'Car Clean',
      image: 'car-clean.jpg',
    },
    {
      name: 'Office Clean',
      image: 'office-clean.jpg',
    },
    {
      name: 'Carpets',
      image: 'carpets-clean.jpg',
    },
  ];

  const handleNavigate = () => {
    window.location.href = 'https://tidycal.com/assyjohn/detailingbooking';
  };

  return (
    <div className='service-selector'>
      {services.map((service, index) => (
        <div className='service-item-line'>
          <div
            key={index}
            className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => {
              handleNavigate();
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
          </div>
          <div className='serviceParagraph'>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id
              dolorum repellat exercitationem nobis. Dolorum, debitis.
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
