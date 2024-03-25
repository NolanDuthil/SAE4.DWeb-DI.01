import { Link } from 'react-router-dom';
import { MenuBar } from '../../components/Icons';
import Button from '../../components/Button'
import { Search } from '../../components/Icons';
import { Mark } from '../../components/Icons';
import { LogoFilmIn } from '../../components/Icons';
import MenuBurger from '../MenuBurger/MenuBurger';
import { useState } from 'react';


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
            <Mark className="w-8 mr-3 relative z-10  md:hidden " onClick={toggleMenuBurger} /> :
            <MenuBar className="w-8 mr-3 relative z-10  md:hidden " onClick={toggleMenuBurger} />
          }
          <LogoFilmIn className="w-16 z-10"/>
        </div>

        <MenuBurger isActive={MenuBurgerOpen} />

        <Search className="w-8" ></Search>

      </nav>
    </>
  );

}

