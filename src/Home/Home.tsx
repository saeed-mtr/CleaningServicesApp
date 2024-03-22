import ServiceSelector from '../Components/FourSectionsComponent/FourSectionsComponent';
import ImageAndLogoComponent from '../Components/ImageAndLogoComponent/ImageAndLogoComponent';
import SmallParagraph from '../Components/SmallParagraph/SmallParagraph';
import WhateverComponent from '../Components/WhateverComponent/WhateverComponent';
import Footer from '../Components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <ImageAndLogoComponent />
      <ServiceSelector />
      <SmallParagraph />
      <WhateverComponent />
      <Footer />
    </>
  );
};
