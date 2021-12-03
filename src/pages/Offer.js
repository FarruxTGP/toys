import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Offer() {
  return (
    <div className="container offer__page">
      <div className="item__offer">
        <h1>Mattel Barbie GTN61 </h1>
        <Carousel
          showThumbs={true}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          transitionTime={300}
          width="600px"
        >
          <div className="slide-holder">
            <img className={"img__one"} src={"/img/about/bear.png"} />
          </div>
          <div className="slide-holder">
            <img className={"img__one"} src={"/img/about/bear.png"} />
          </div>
          <div className="slide-holder">
            <img className={"img__one"} src={"/img/about/bear.png"} />
          </div>
        </Carousel>
      </div>
      <div className="item__offer sp__around">
        <button className="blue">Характеристики</button>
        <p>
          Радиоуправляемая спортивная машина с металлическим корпусом и
          подвижными колесами. Дизайн красного цвета, с фирменными знаками
          хоккейной команды Red machine. Скорость движения около 10 км/ч. В
          комплекте пульт, работающий на частоте 2.4 ГГц, и USB-зарядка. Длина
          машины 25 см.{" "}
        </p>
        <span> <b>Внимание! </b> Для работы игрушки необходимы 2 батарейки АА.</span>
        <div className="flex">
            <div className="price">
                <span>25 000 uzs</span>
            </div>
            <button>Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
