import { useState } from "react";
import products from "../../data/products.json";
import { Link } from "react-router-dom";
import "./style.scss";

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="homeContainer">
      <div className="inputContainer">
        <input
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="search"
          placeholder="Buscar..."
        />
      </div>
      <div className="title">
        <p>SE VENDE</p>
      </div>
      <ul className="productsContainer">
        {products
          .filter((product) => {
            if (search === "") {
              return product;
            } else if (
              product.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return product;
            }
          })
          .sort((productA, productB) =>
            !productA.is_sold && productB.is_sold && productA.id > productB.id
              ? -1
              : 1
          )
          .map((product, key) => {
            if (!product.is_sold) {
              return (
                <li key={key} className="productContainer" ontouchstart="">
                  <Link to={`/product/${product.id}`}>
                    <div className="imageContainer">
                      <img src={product.thumbnail} className="image" alt="" />
                    </div>
                    <div className="cardDesc">
                      <p className="name">{product.name}</p>
                      <p className="homePrice">$ {product.price}</p>
                    </div>
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  key={key}
                  className="productContainer isSold"
                  ontouchstart=""
                >
                  <div className="sold">VENDIDO</div>
                  <div className="imageContainer isSold">
                    <img
                      src={product.thumbnail}
                      className="image isSold"
                      alt=""
                    />
                  </div>
                  <div className="cardDesc">
                    <p className="name">{product.name}</p>
                    <p className="homePrice">$ {product.price}</p>
                  </div>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export default HomePage;
