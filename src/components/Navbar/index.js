import "./style.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navContainer">
      <p className="contactUs">Contactanos</p>
      <a
        className="mobilePhone"
        href="https://wa.me/5491551163638?text=Hola Eli!Me%20interesa%20un%20artículo%20a%20la%20venta"
      >
        Eli 📞
      </a>

      <a
        className="mobilePhone"
        href="https://wa.me/5491158453892?text=Hola Juan! Me%20interesa%20un%20artículo%20a%20la%20venta"
      >
        Juan 📞
      </a>
    </div>
  );
}
export default Navbar;
