import React, {useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Offer() {
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
          <span>
            {" "}
            <b>Внимание! </b> Для работы игрушки необходимы 2 батарейки АА.
          </span>
          <div className="flex">
            <div className="price">
              <span>25 000 uzs</span>
            </div>
            <button onClick={openModal}>Заказать</button>
          </div>
        </div>
      </div>
      <div className="container offer__slider">
        <Slider {...settings2}>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
          <Link to="/product/3">
            <div className="offer">
              <img src="/img/about/bear.png" alt="" />
              <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
              <span>25 000 uzs</span>
              <div className="hover__offer">
                <span>Подробнее</span>
                <img src="/img/home/cardar.svg" alt="" />
              </div>
            </div>
          </Link>
        </Slider>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <form>
          <input type="text" placeholder="Ваш номер или e-mail" />
          <input type="text" placeholder="Ваша имя"  />
          <button>Заказать</button>
        </form>
      </Modal>
    </>
  );
}

export default Offer;
