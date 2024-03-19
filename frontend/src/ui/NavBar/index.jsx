import { Link } from 'react-router-dom';
import { MenuBar } from '../../components/Icons';
import Button from '../../components/Button'
import { Search } from '../../components/Icons';
import { Mark } from '../../components/Icons';
import { LogoFilmIn } from '../../components/Icons';
import MenuBurger from '../MenuBurger';
import { useState } from 'react';


export default function NavBar() {

  const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);

  const toggleMenuBurger = () => {
    setMenuBurgerOpen(!MenuBurgerOpen)
  }

  return (
    <>
      <nav className="bg-background">
      <div onClick={toggleMenuBurger}>
          <MenuBar className="w-8 mr-3 hidden lg:flex lg:pt-10 lg:ml-10 lg:z-10" onClick={toggleMenuBurger}>
            </MenuBar>
          </div>
        <ul className="flex justify-between p-3 flex-wrap">
          <li className="flex ">
            <LogoFilmIn className="w-16"></LogoFilmIn>
          </li>
          <li className="flex">
            <a className="text-forground">Home</a>
            <a className="text-forground">PO</a>
            <a>Salut</a>
          </li>
          <li className="">
            <Search className="w-8" ></Search>
          </li>
        </ul>
      </nav>
    </>
  );

}

