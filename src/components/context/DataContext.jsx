import { createContext, useEffect, useState } from "react";
import axios from "axios";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [imagenGet, setImagenGet] = useState([]);
  const [descripcion, setDescripcion] = useState([]);
  const [price, setPrice] = useState([]);
  const [talla, setTalla] = useState([]);

  const renderImagen1 = async () => {
    try {
      const response = await axios.get("https://storefullserver-production.up.railway.app/api/render");
      setImagenGet(response.data.images);
      setDescripcion(response.data.text);
      setPrice(response.data.text);
      setTalla(response.data.text);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  };

  useEffect(() => {
    renderImagen1();
  }, []);

  return (
    <dataContext.Provider value={{ imagenGet, descripcion, price, talla, renderImagen1 }}>
      {children}
    </dataContext.Provider>
  );
};

export { DataProvider, dataContext };