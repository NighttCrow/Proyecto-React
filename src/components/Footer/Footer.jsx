import "./Footer.css";
const Footer = () => {
    return (
<div className=" container-fluid navbar-expand bg-info bg-opacity-75 footer d-flex align-items-center justify-content-around">
  <div className="row">
    <div className="col">
      <h4>Nosotros</h4><i class="fa fa-4x fa-users"></i>
      <p>Somos el almacén de barrio dispuesto a llevar las compras a tu puerta.</p>
    </div>
    <div className="col">
      <h4>Ubicación</h4> <i class="fa fa-4x fa-map-marker"></i>
      <p>Nos ubicamos en la calle Loreto 352 del barrio Bellavista, Santiago de Chile.</p>
    </div>
    <div className="col">
      <h4>Consultas al WhatsApp</h4> <i className="footerA" class="fa fa-5x fa-whatsapp"></i>
      <p>Escribinos al 5819 4221, de lunes a sábados de 8 a 20 hs y domingos de 8 a 13 hs.</p>
      <h4>Seguinos en nuestras redes sociales</h4>      
      <a className="footerA" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-5x fa-instagram"></i></a>
      <a className="footerA" href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer"> <i class="fa fa-5x fa-facebook-square"></i></a>
    </div>
  </div>
</div>

        
    );
}

export default Footer;
