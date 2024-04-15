import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import { IoMan } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const { selectProduct } = useContext(dataContext);
  const [cartItemCount, setCartItemCount] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Actualizar la cantidad de elementos en el carrito cuando selectProduct cambie
    setCartItemCount(selectProduct.length);
  }, [selectProduct]);

  return (
    <>
      <div className="logo">
        <h1>
          <span className="clas-spam">•M</span>
          <span>y</span>
          <span className="class-span">S</span>tore
          <span className="class-span">s</span>•
        </h1>
      </div>

      <nav className="container-navbar">
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu  className="menu-hamburguesa"/>
        </div>
        <ul className={`ul-navbar ${isOpen ? "open" : ""}`}>
          <li className="navbar-li">
            <Link to="/">
              {" "}
              <IoMan />
            </Link>
          </li>
          {/* Comenté los elementos que no deseas mostrar */}
          {/* <li className="navbar-li">
      <Link to="/contacto">MUJER</Link>
    </li>
    <li className="centered-element">
      <Link to="/contacto">CALISTORE</Link>
    </li> */}
          <div className="right-icons">
            <li className="navbar-li">
              <Link to="/update">
                <MdOutlineManageAccounts />
              </Link>
            </li>
            <li className="navbar-li">
              <Link to="/content" className="carrito">
                <div className="carrito-container">
                  <FaCartPlus />
                  <span className="cart-item-count">{cartItemCount}</span>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
