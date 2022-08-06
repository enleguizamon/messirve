import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import products from "../../data/products.json";
import Price from "../Price";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Item(props) {
  const { id } = props;

  const { name, images, price, description } = products[id];
  const formatDesc = description.split("\n");

  return (
    <div>
      <div className="productDescContainer">

        <div className="imagesContainer">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {images.map((image, key) => {
              return (
                <SwiperSlide>
                  <img src={image} alt="" className="productImage" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="productInfoContainer">
          <p className="productName">{name}</p>
          <Price amount={price}/>
          <div className="descWrapper">
            {formatDesc.map((desc) => {
              return (
                <p className="description">
                  {desc}
                  <br />
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
