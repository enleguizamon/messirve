import "./style.scss";

function Navbar(props) {
  return (
    <div className="navContainer">
      <p className="contactUs">Contactanos</p>
      <a
        className="mobilePhone"
        href="https://wa.me/5491122737665?text=Hola Lu! Me%20interesa%20un%20artículo%20a%20la%20venta"
      >
        Lu 📞
      </a>

      <a
        className="mobilePhone"
        href="https://wa.me/5491168393025?text=Hola Gera! Me%20interesa%20un%20artículo%20a%20la%20venta"
      >
        Gera 📞
      </a>
    </div>
  );
}
export default Navbar;
