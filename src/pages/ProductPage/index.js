import { Link, useParams } from "react-router-dom";
import Item from "../../components/Item";
import "./style.scss";

function ProductPage() {
  const { id } = useParams();

  return (
    <div className="productWrapper">
      <Link to="/" className="link back-link">
        <button className="button-30">volver</button>
      </Link>
      <Item id={id} />
    </div>
  );
}

export default ProductPage;
