import "./Footer.css";
const Footer = () => {
    return (
<div className=" container-fluid navbar-expand bg-primary footer d-flex align-items-center justify-content-around">
  <div className="row">
    <div className="col">
      <h2>Nosotros</h2>
      <p>Somos el almacén de barrio dispuesto a llevar las compras a tu puerta.</p>
    </div>
    <div className="col">
      <h2>Ubicación</h2>
      <p>Nos ubicamos en la calle Sarmiento 3052 del barrio El libertador, Buenos Aires.</p>
    </div>
    <div className="col">
      <h2>Consultas al WhatsApp</h2>
      <p>Si tenés alguna pregunta escribinos al 1165451943, de lunes a sábados de 8 a 20 hs y domingos de 8 a 13 hs.</p>
    </div>
  </div>
</div>

        
    );
}

export default Footer;
