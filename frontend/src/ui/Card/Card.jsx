import { useState, useEffect } from 'react';
import Cardhover from './Cardhover';

export default function Card() {
  const [hover, setHover] = useState(false);
  const [isMd, setIsMd] = useState(false);

  // Mettre à jour l'état isMd lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appeler la fonction une fois au montage du composant

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="w-1/3 rounded-md relative h-56 bg-header bg-cover bg-center"
      onMouseEnter={() => !isMd && setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && <Cardhover className="absolute inset-0" />}
    </div>
  );
}