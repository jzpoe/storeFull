import './navbar.css'
import { Link } from 'react-router-dom';

import  {useContext, useEffect, useState}  from "react";
import { dataContext } from "../context/DataContext";


export const Navbar = () => {
  const { selectProduct } = useContext(dataContext);
  const [cartItemCount, setCartItemCount] = useState([]);


  useEffect(() => {
    // Actualizar la cantidad de elementos en el carrito cuando selectProduct cambie
    setCartItemCount(selectProduct.length);
  }, [selectProduct]);

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
              
              <Link to= "/content" >| CART | {cartItemCount}
              </Link>
           
            </li>
             
            
            
        </ul>

    </nav>
  )
}
