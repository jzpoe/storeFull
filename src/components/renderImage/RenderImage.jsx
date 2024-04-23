import  { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/DataContext";
import Header from "../header/Header";
import Swal from "sweetalert2";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes';

import "./render.css";

export const RenderImage = () => {
  const { imagenGet, descripcion, price, talla, renderImagen1, selectProduct, setSelectProduct } = useContext(dataContext);
  
  

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
        
      }
      renderImagen1();
      
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al eliminar la imagen",
      });
    }
  };

  const addCartProduct = (imagen) => {
    console.log(imagen);
    setSelectProduct([...selectProduct, imagen])
  }

  return (
    <>
      <Header />

      <div className="container-image">
      <div>
            <h1 className="container-h1-productos">
              <p className="parrafo-nuestros-productos">Nuestros Productos</p>
            </h1>
          </div>
        <div className="image-grid">
          
          {imagenGet.map((imagen, index) => (
            <div key={imagen.public_id} >
              <Box className="container-box">
                <Card  style={{ width: '100%', height: '100%' }}>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src={imagen.url}
                      alt={imagen.original_filename}
                      className="image-item"
                      style={{
                        
                       
                      }}
                    />
                    <Text as="p" size="10" color="white">
                      <Strong style={{
                        
                      }}>{descripcion[index] && descripcion[index].description}
                      {price && descripcion[index].description}
                      </Strong> 
                      
                    </Text>
                  </Inset>
                </Card>
              </Box>
              <button onClick={() => addCartProduct(imagen)} className="btn-delete">
                <CiHeart className={selectProduct.some((item) => item.imagen === item.imagen) ? 'red-heart' : ''} />
              </button>
              {/* <button onClick={() => handleEliminarImagen(imagen)} className="btn-delete">
                Eliminar
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};