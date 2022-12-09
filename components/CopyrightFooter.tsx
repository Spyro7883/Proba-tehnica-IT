import * as React from 'react';

import Image from 'next/image';
import Instagram from '../public/images/instagram.png';
import Twitch from '../public/images/twitch.png';
import Facebook from '../public/images/facebook.png';

const CopyrightFooter: React.FC = () => {
  return (
    <h1>
      <Image src={Instagram} className="instagram-logo" alt="/" />
      <Image src={Twitch} className="twitch-logo" alt="/" />
      <Image src={Facebook} className="facebook-logo" alt="/" />
    </h1>
  );
};

export default CopyrightFooter;
