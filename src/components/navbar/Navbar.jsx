import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = ({gender}) => {

  return (
    <nav className="container-navbar">
        
        <ul className="ul-navbar">
            <li className="navbar-li">
                <Link to= "/">| HOMBRE |</Link>
                </li>
            <li className="navbar-li">
            <Link to= "/contacto" >| MUJER |</Link>
            </li>
            <li className="centered-element">
            <Link to= "/contacto" >| CALISTORE |</Link>
            </li>
            <li className="right-aligned2">
                <Link to= "/update" >| SELECCIONAR |</Link>
                </li>
            <li className="right-aligned">
            <Link to= "/content" >| CART |</Link>
            </li>
            
        </ul>

    </nav>
  )
}
