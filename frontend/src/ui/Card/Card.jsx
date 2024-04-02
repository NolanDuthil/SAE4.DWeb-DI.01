import { useState, useEffect } from 'react';
import Cardhover from './Cardhover';

export default function Card({data}) {
  const [hover, setHover] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="w-1/3 rounded-md relative h-56"
      onMouseEnter={() => !isMd && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover && (
        <div className="absolute inset-0">
          <img src={`/img/${data.img}`} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md" />
        </div>
      )}
      {hover && <Cardhover data={data} className="absolute inset-0" />}
    </div>
);
}