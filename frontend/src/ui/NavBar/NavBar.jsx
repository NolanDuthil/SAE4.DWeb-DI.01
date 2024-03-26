import { Link } from 'react-router-dom';
import { MenuBar } from '../Icons/Icons';
import Button from '../Button/Button'
import { Search } from '../Icons/Icons';
import { Mark } from '../Icons/Icons';
import { LogoFilmIn } from '../Icons/Icons';
import MenuBurger from '../MenuBurger/MenuBurger';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar() {

  const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);

  const toggleMenuBurger = () => {
    setMenuBurgerOpen(!MenuBurgerOpen)
  }

  return (
    <>
      <nav className="bg-background flex justify-between p-3">
      <div className='flex'>
          {MenuBurgerOpen ? 
            <Mark className="w-8 mr-3 relative z-30  md:hidden " onClick={toggleMenuBurger} /> :
            <MenuBar className="w-8 mr-3 relative z-30  md:hidden " onClick={toggleMenuBurger} />
          }
          <LogoFilmIn className="w-16 z-30"/>
        </div>

        <MenuBurger isActive={MenuBurgerOpen} />

        <Search className="w-8" ></Search>

      </nav>
    </>
  );

}

