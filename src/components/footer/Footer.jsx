

import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className='wave'></div>
      <div className="footer-content">
        {/* <div className="footer-section about">
          <h2 className="footer-section-title">Acerca de</h2>
          <p>Una breve descripción de tu empresa o sitio web.</p>
        </div> */}
        
        <div className="footer-section links">
          
          <ul>
          <div className="footer-section contact">
          <h2 className="footer-section-title">Contactanos</h2>
          <p>Dirección: Calle, Ciudad, País</p>
          <p>Teléfono: +123456789</p>
          <p>Email: info@ejemplo.com</p>
        </div>
            <li> <a href="mailto:pmguez1287@gmail.com">
              <img className='img-gmail' src="img/footer/gmail.jpg" alt="imagen de correo" />
    
  </a> </li>
            
           
           
          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-section-title">Redes Sociales</h2>
          <ul>
          <li><a href="mailto:pmguez1287@gmail.com">
              <img className='img-gmail' src="img/footer/facebook.jpg" alt="imagen de correo" />
    
  </a> </li>
            <li><a href="https://twitter.com/ejemplo"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/ejemplo"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/ejemplo"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Derechos de autor &copy; {new Date().getFullYear()} Ejemplo.com. Todos los derechos reservados.</p>
        <p><a href="/privacidad">Política de Privacidad</a> | <a href="/terminos">Términos de Servicio</a></p>
      </div>  
    </footer>
  );
};

export default Footer;

