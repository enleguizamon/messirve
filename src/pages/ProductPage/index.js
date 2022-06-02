import { Link, useParams } from "react-router-dom";
import Item from "../../components/Item";
import "./style.scss";

function ProductPage() {
  const { id } = useParams();

  return (
    <div className="productWrapper">
      <Item id={id} />
      <Link to="/" className="link">
        <button className="button-30">volver</button>
      </Link>
    </div>
  );
}

export default ProductPage;
