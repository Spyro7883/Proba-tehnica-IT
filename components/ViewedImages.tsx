import * as React from 'react';

import Image from 'next/image';
import Favorite_1 from '../public/images/favorite-1.png';
import Favorite_2 from '../public/images/favorite-2.png';
import Favorite_3 from '../public/images/favorite-3.png';

const ViewedImages: React.FC = () => {
  return (
    <h1>
      <Image src={Favorite_1} className="favorite-image-1" alt="/" />
      <Image src={Favorite_2} className="favorite-image-2" alt="/" />
      <Image src={Favorite_3} className="favorite-image-3" alt="/" />
    </h1>
  );
};

export default ViewedImages;
