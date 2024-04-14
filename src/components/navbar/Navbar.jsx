import "./navbar.css";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import { IoMan } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  const { selectProduct } = useContext(dataContext);
  const [cartItemCount, setCartItemCount] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Actualizar la cantidad de elementos en el carrito cuando selectProduct cambie
    setCartItemCount(selectProduct.length);
  }, [selectProduct]);

  return (
    <nav className="container-navbar">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </div>
      <ul className={`ul-navbar ${isOpen ? 'open' : ''}`}>
        <div className="container-li">
        <li className="navbar-li">
            <Link to="/">
              {" "}
              <IoMan />
            </Link>
          </li>
          {/* <li className="navbar-li">
            <Link to="/contacto">MUJER</Link>
          </li> */}
          {/* <li className="centered-element">
            <Link to="/contacto">CALISTORE</Link>
          </li> */}
          <li className="right-aligned2">
            <Link to="/update">
              <MdOutlineManageAccounts />
            </Link>
          </li>

          <li className="right-aligned">
            <Link to="/content">
              <FaCartPlus /> {cartItemCount}
            </Link>
          </li>
        </div>
          
        </ul>
      
    </nav>
  );
};
