import './ImageAndLogoComponent.css';

export default function componenImageAndLogoComponenttName() {
  return (
    <>
      <div className='image-container'>
        <img src='main-home-banner-img.jpg' alt='home banner' />
      </div>
      <div id='logoImageDiv'>
        <img src='logo.png' alt='logo' />
      </div>{' '}
      <br />
      <br />
      <br />
      <h4> Your trusted partner in Condo and Car Cleanings</h4>
      <h5 className='centerLine'>Try us once and you'll see yourself.. </h5>
      <h5> Money Back guaranteed if not satisfied!</h5>
    </>
  );
}
