import Button from "../Button/Button";
import { useEffect, useState } from 'react';

export default function MenuBurger({ isActive }) {

    const classActive = isActive ? "translate-x-0" : "-translate-x-full"

    const [isLg, setIsLg] = useState(false);

  // Mettre à jour l'état isLg lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appeler la fonction une fois au montage du composant

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={`flex flex-col gap-4 w-full max-w-72 fixed top-0 bottom-0 left-0 bg-bgSelectCat pt-16 p-4 ${classActive} md:flex-row md:static md:translate-x-0 md:bg-transparent md:p-0 md:justify-center md:items-center`}>
        <Button className="order-1 md:order-3" size={isLg ? "small" : "medium"}>S'inscrire</Button>
        <Button className="order-2 md:order-4 whitespace-nowrap" size={isLg ? "small" : "medium"} intent="secondary">Se connecter</Button>
        <a className="order-3 md:order-1 text-forground text-xl hover:text-button">Film</a>
        <a className="order-4 md:order-2 text-forground text-xl hover:text-button">Series</a>
    </div>
  );
}