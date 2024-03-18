import { Link } from 'react-router-dom';
import { MenuBar } from '../../components/MenuBar';
import Button from '../../components/Button'


export default function NavBar() {

  return (
    <>
      <nav className="bg-background">
        <MenuBar ></MenuBar>
      </nav>
    </>
  );

}

