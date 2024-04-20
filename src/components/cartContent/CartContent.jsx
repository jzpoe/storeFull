import './cartContent.css';
import  {useContext}  from "react";
import {dataContext} from "../context/DataContext";
import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes';
export const CartContent = () => {

  const { selectProduct, descripcion } = useContext(dataContext);
  

  return (
    <div className="image-grid-cart">
      <h1 className='h1-image-grid-cart'>Tus Productos </h1>
          {selectProduct.map((imagen, index) => (
            <div key={imagen.public_id} className="image-card">
              <Box>
                <Card>
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src={imagen.url}
                      alt={imagen.original_filename}
                      className="image-item"
                      style={{
              
                        
                        objectFit: 'cover',
                        backgroundColor: 'var(--gray-5)',
                      }}
                    />
                    <Text as="p" size="3">
                      <Strong>Typography</Strong> {descripcion[index] && descripcion[index].description}
                    </Text>
                  </Inset>
                </Card>
              </Box>
              
              {/* <button onClick={() => handleEliminarImagen(imagen)} className="btn-delete">
                Eliminar
              </button> */}
            </div>
          ))}
        </div>
  );
};
