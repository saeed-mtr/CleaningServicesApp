import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='first-block'>
          <h3>Fresh Toronto</h3>
          <h5>#1 Cleaning Partner</h5>
          <img src='logo.png' alt='' />
          <p>
            We are committed to providing top-notch cleaning services to our
            customers.
          </p>
        </div>
        <div className='footer-links'>
          <ul>
            {/* <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li> */}
            {/* Add more footer links as needed */}
            <li>
              <a href='https://wa.me/+972507744588'>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  color='#26ff00'
                  fontSize='3rem'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
