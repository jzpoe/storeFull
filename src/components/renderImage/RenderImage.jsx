import "./render.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {dataContext} from "../context/DataContext"
import Header from "../header/Header";
import Swal from "sweetalert2";

export const RenderImage = ({gender}) => {

const {imagenGet, descripcion, price, talla, renderImagen1} = useContext(dataContext)

 
renderImagen1()
  

  const handleEliminarImagen = async (image) => {
    try {
      const result = await Swal.fire({
        icon: "warning",
        title: "¿Está seguro que desea eliminar la imagen?",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `https://storefullserver-production.up.railway.app/${image.public_id}`
        );
        Swal.fire({
          icon: "success",
          title: "¡Imagen eliminada!",
          text: response.data.message,
        });
        // Actualizar la lista de imágenes después de eliminar
        renderImagen1();
      }
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al eliminar la imagen",
      });
    }
  };

  return (
    <>
    
      <Header />

      <div className="container-image">
        <div className="image-grid">
          
        
          {imagenGet.map((imagen, index) => (
            <div key={imagen.public_id} className="image-card">
              <div className="image">
                <img
                  src={imagen.url} // O imagen.secure_url según tus necesidades
                  alt={imagen.original_filename} // O el texto que desees
                  className="image-item"
                />
                {/* Asociar la descripción con la imagen utilizando el mismo índice */}
                <h2>{descripcion[index] && descripcion[index].description}</h2>
                <h2>{price[index] && price[index].price}</h2>
                <h2>{talla[index] && talla[index].talla}</h2>

              </div>

              <button onClick={() => handleEliminarImagen(imagen)} className="btn-delete">
                Eliminar
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};
