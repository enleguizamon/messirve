import { useState } from "react";
import products from "../../data/products.json";
import { Link } from "react-router-dom";
import "./style.scss";
import Price from "../../components/Price";

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
          placeholder="🔍 Buscar..."
        />
      </div>
      <div className="titleWrapper">
        <p className="title">SE VENDE</p>
        <p className="contactText">Entregas a coordinar</p>
      </div>
      <div className="productsAdvise">
        Todas las semanas subimos artículos nuevos
      </div>
      <ul className="productsContainer">
        {products
          .filter((product) => product.is_visible)
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
            ((productA.is_new && !productB.is_new) ||
              (!productA.is_sold && productB.is_sold)) &&
            productA.id > productB.id
              ? -1
              : 1
          )
          .map((product, key) => {
            if (product.is_new) {
              return (
                <li
                  key={key}
                  className="productContainer isNew"
                  ontouchstart=""
                >
                  <div className="newContainer">
                    <div className="minibox"></div>
                    <p className="new">Nuevo</p>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <div className="imageContainer">
                      <img src={product.thumbnail} className="image" alt="" />
                    </div>
                    <div className="cardDesc">
                      <p className="name">{product.name}</p>
                      <Price className="homePrice"amount={product.price}/>
                    </div>
                  </Link>
                </li>
              );
            } else if (product.coming_soon) {
              return (
                <li
                  key={key}
                  className="productContainer soonContainer"
                  ontouchstart=""
                >
                  <p className="soonTitle">PRÓXIMAMENTE</p>
                  <div className="imageContainer soonImage">
                    <img src={product.thumbnail} className="image" alt="" />
                  </div>
                  <div className="cardDesc">
                    <p className="name">{product.name}</p>
                  </div>
                </li>
              );
            } else if (!product.is_sold) {
              return (
                <li key={key} className="productContainer" ontouchstart="">
                  <Link to={`/product/${product.id}`}>
                    <div className="imageContainer">
                      <img src={product.thumbnail} className="image" alt="" />
                    </div>
                    <div className="cardDesc">
                      <p className="name">{product.name}</p>
                      <Price className="homePrice"amount={product.price}/>
                    </div>
                  </Link>
                </li>
              );
            } else if (product.is_sold) {
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
                    <Price className="homePrice"amount={product.price}/>
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
