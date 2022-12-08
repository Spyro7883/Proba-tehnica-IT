import * as React from 'react';

import Image from 'next/image';
import WhySoSalty from '../public/images/salty.png';

const SaltyImage: React.FC = () => {
  return <Image src={WhySoSalty} className="salty-image" alt="/" />;
};

export default SaltyImage;
