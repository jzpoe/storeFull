import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="container-navbar">
        
        <ul className="ul-navbar">
            <li className="navbar-li">
                <Link to= "/">| HOMBRE |</Link>
                
                </li>
            <li className="navbar-li">
                <Link to= "/update" >| MUJER |</Link>
                </li>
            <li className="navbar-li">
            <Link to= "/contacto" >| MIXTO |</Link>
            </li>
            <li className="centered-element">
            <Link to= "/contacto" >| CALISTORE |</Link>
            </li>
            <li className="right-aligned">
            <Link to= "/contacto" >| PERFIL |</Link>
            </li>
        </ul>

    </nav>
  )
}
