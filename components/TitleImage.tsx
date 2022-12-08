import * as React from 'react';
import { useState } from 'react';

import Image from 'next/image';
import MemeIt from '../public/images/title.png';

const TitleImage: React.FC = () => {
  const [state, setState] = useState('');
  return (
    <Image src={MemeIt} className="image-title" alt="/" />
    //<h2 className={state} onClick={ ()=>{console.log("Hello")}}>MemeIT</h2>
  );
};

export default TitleImage;
