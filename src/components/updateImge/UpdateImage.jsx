

import './update.css';
import axios from 'axios';
import  { useState } from 'react';
import Swal from 'sweetalert2';

export const UpdateImage = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [talla, setTalla] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImageName = (e) => {
    setDescription(e.target.value);
  };
  const uploadPrice = (e) => {
    setPrice(e.target.value);
  };
  const uploadTalla = (e) => {
    setTalla(e.target.value);
  };
  
  
  

  const handleImage = async () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('upload_preset', 'mjxpq9vf'); // Aquí debes usar tu propio upload preset
    formData.append('description', description);
 


    try {
      const response = await axios.post('http://localhost:3002/api/upload', formData, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
     

      const publicId = response.data.images; // Obtén el publicId de la respuesta de Cloudinary
      formData.append('imagenPublicId', publicId); // Agrega el public_id de la imagen
      

      if (response.status === 200) {
         response.data.secure_url;

        Swal.fire({
          icon: 'success',
          title: '¡Imagen subida al servidor!',
          text: response.data.message,
        });
        setImage(null);
        setDescription(''); // Limpiar la descripción después de subir la imagen con éxito

    } else {
        Swal.fire({
          icon: 'error',
          title: '¡Error al subir la imagen!',
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error('Error al subir imagen al servidor:', error.response);
      setError('Error al subir la imagen');
    }
  };

  return (
    <div className="image-upload-container">
      <div className="image-preview">
        {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
      </div>
      <div className="image-form">
        <label htmlFor="image-upload" className="custom-file-upload">
          <i className="fas fa-cloud-upload-alt"></i> Selecciona una imagen
        </label>
        <div className='input-image'>
        <input type="file" id="image-upload" capture="" onChange={handleImageChange} />
        <input
          type="text"
          value={description}
          onChange={uploadImageName}
          placeholder="Agrega una descripción"
          className="input-description"
        />
        <input type="text" placeholder='precio' onChange={uploadPrice}  className="input-description"/>
        <input type="text" placeholder='talla' onChange={uploadTalla} className="input-description"/>
        </div>
        

        <button onClick={handleImage} className="submit-button">
          Enviar
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
      
    </div>
    
  );
 
};

