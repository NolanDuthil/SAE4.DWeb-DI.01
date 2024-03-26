import { useState } from 'react';
import Cardhover from './Cardhover';

export default function Card() {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="w-90 relative" 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <img className="rounded-md" src="img/testcard.webp"></img>
      {hover && <Cardhover className="absolute inset-0" />}
    </div>
  );
}