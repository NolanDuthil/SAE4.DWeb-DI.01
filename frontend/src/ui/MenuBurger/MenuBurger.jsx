import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from 'react';

export default function MenuBurger({ user, isActive }) {

  const classActive = isActive ? "translate-x-0" : "-translate-x-full"

  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={`flex flex-col gap-4 w-full max-w-72 md:max-w-[80rem] justify-between fixed top-0 bottom-0 left-0 bg-bgSelectCat pt-16 p-4 ${classActive} md:flex-row md:justify-between md:static md:translate-x-0 md:bg-transparent md:p-0 md:items-center`}>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Link to="/Select" ><h2 className="order-3 md:order-1 text-forground text-xl hover:text-button">Film</h2></Link>
        {user && user.img ? (
          <Link to="/Playlist" ><h2 className="order-3 md:order-1 text-forground text-xl hover:text-button">Playlist</h2></Link>
        ) : null}
      </div>
      {user && user.img ? (
        <div className="flex items-center flex-col md:flex-row gap-5">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <img className='rounded-full h-[10rem] w-[10rem] md:w-11 md:h-11 ' src={`./img/${user.img}`} alt="" />
          </div>
          <div>
            <Button className="order-2 md:order-4 w-[9rem] whitespace-nowrap" onClick={() => window.location.href = 'http://localhost:8080/logout'} size={isLg ? "medium" : "small"} intent="secondary">Se déconnecter</Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center md:flex-row justify-center gap-5">
          <Button className=" order-1 md:order-3 w-[9rem]" onClick={() => window.location.href = 'http://localhost:8080/register'} size={isLg ? "medium" : "small"}>S'inscrire</Button>
          <Button className="order-2 md:order-4 whitespace-nowrap w-[9rem]" onClick={() => window.location.href = 'http://localhost:8080/login'} size={isLg ? "medium" : "small"} intent="secondary">Se connecter</Button>
        </div>
      )}
    </div>
  );
}