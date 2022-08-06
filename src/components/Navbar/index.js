import "./style.scss";

function Navbar(props) {
  return (
    <div className="navContainer">
      <p className="contactUs">Contactanos!</p>
      <a
        className="mobilePhone"
        href="https://wa.me/5491122737665?text=Hola Lu! Me%20interesa%20un%20artículo%20a%20la%20venta"
        target="_blank"
      >
        Lu
      </a>

      <a
        className="mobilePhone"
        href="https://wa.me/5491168383025?text=Hola Gera! Me%20interesa%20un%20artículo%20a%20la%20venta"
        target="_blank"
      >
        Gera
      </a>
    </div>
  );
}
export default Navbar;
