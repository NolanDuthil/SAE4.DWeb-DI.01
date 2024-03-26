import { Link } from 'react-router-dom';
import { MenuBar } from '../Icons/Icons';
import Button from '../Button/Button'
import { Search } from '../Icons/Icons';
import { Mark } from '../Icons/Icons';
import { LogoFilmIn } from '../Icons/Icons';
import MenuBurger from '../MenuBurger/MenuBurger';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar() {
  const [MenuBurgerOpen, setMenuBurgerOpen] = useState(false);
  const [SearchBarOpen, setSearchBarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenuBurger = () => {
    setMenuBurgerOpen(!MenuBurgerOpen)
  }

  const toggleSearchBar = () => {
    setSearchBarOpen(!SearchBarOpen)
  }

  // Ecouter l'événement de défilement
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', checkScroll);

    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <>
      {SearchBarOpen ? (
        <SearchBar toggleSearchBar={toggleSearchBar} />
      ) : (
        <nav className={`fixed w-full p-2 z-30 flex justify-between items-center transition-colors duration-200 ${isScrolled ? 'bg-background' : 'bg-transparent'}`}>
          <div className='flex'>
            {MenuBurgerOpen ? 
              <Mark className="w-8 mr-3 relative z-50  md:hidden " onClick={toggleMenuBurger} /> :
              <MenuBar className="w-8 mr-3 relative z-50  md:hidden " onClick={toggleMenuBurger} />
            }
            <LogoFilmIn className="w-16 z-30"/>
          </div>

          <MenuBurger isActive={MenuBurgerOpen} className="z-50" />

          <button className="w-8" onClick={toggleSearchBar}>
            <Search />
          </button>
        </nav>
      )}
    </>
  );
}

