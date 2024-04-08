import "./render.css";
import axios from "axios";
import  { useEffect, useState } from "react";
import Header from "../header/Header";
import Swal from "sweetalert2";

export const RenderImage = () => {
  const [imagenGet, setImagenGet] = useState([]);

  const renderImagen1 = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/render");
      console.log(response.data);
      setImagenGet(response.data);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  };

  useEffect(() => {
    renderImagen1();
  }, []);

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
          `http://localhost:3002/api/delete/${image.public_id}`
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
          {imagenGet.map((imagen) => (
            <div key={imagen.public_id} className="image-card">
              <div className="image">
                <img
                  src={imagen.url} // O imagen.secure_url según tus necesidades
                  alt={imagen.original_filename} // O el texto que desees
                  className="image-item"
                />
              </div>
              <div className="container-description">
              <h2>{imagen.description}</h2>

              </div>
                <button onClick={handleEliminarImagen}  className="btn-delete">eliminar</button>
              </div>
            
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};
