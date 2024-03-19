import { Link } from 'react-router-dom';
import { MenuBar } from '../../components/MenuBar';
import Button from '../../components/Button'
import { Search } from '../../components/Search';
import { Mark } from '../../components/Mark';
import { LogoFilm } from '../../components/logofilm';
import { LogoIn } from '../../components/Logoin';


export default function NavBar() {

  return (
    <>
      <nav className="bg-background ">
        <ul className="flex">
          <li className="flex">
            <MenuBar className="w-10"></MenuBar>
            <LogoFilm></LogoFilm>
            <LogoIn></LogoIn>
          </li>
          <li><Search className="w-10" ></Search></li>
        </ul>
      </nav>
    </>
  );

}

