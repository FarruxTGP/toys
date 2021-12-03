import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 700,
      easing: "ease-in-sine",
      delay: 0,
    });
    AOS.refresh();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <div className="slide__menu">
          <Slider {...settings}>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>Скидка -30%</h1>
                  <p>от розничной цене при покупке от 10 000 рублей </p>
                  <button>
                    подробнее <img src="./img/home/btnarrow.svg" alt="toys" />
                  </button>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>Скидка -30%</h1>
                  <p>от розничной цене при покупке от 10 000 рублей </p>
                  <button>
                    подробнее <img src="./img/home/btnarrow.svg" alt="toys" />
                  </button>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="download__cat">
          <div className="container">
            <button>
              <img src="./img/home/down.svg" alt="toys" /> Скачать каталог
            </button>
          </div>
        </div>
        <div className="container">
          <div className="product">
            <div className="title">
              <span>категория</span>
              <h1>Продукты</h1>
              <hr />
            </div>
            <div className="product__body">
              <Slider {...settings2}>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/ayiqcha.png" alt="toys" />
                    <p>Игрушка для уморазвития</p>
                    <button>
                      Подробнее <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kamazcard.png" alt="toys" />
                    <p>Игрушка для уморазвития</p>
                    <button>
                      Подробнее <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/shtuk.png" alt="toys" />
                    <p>Игрушка для уморазвития</p>
                    <button>
                      Подробнее <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kazan.png" alt="toys" />
                    <p>Игрушка для уморазвития</p>
                    <button>
                      Подробнее <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>

                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kamazcard.png" alt="toys" />
                    <p>Игрушка для уморазвития</p>
                    <button>
                      Подробнее <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="dino">
          <div className="container">
            <img data-aos="flip-right" src="./img/home/dino.png" alt="" />
            <div className="dino__txt"  data-aos="flip-left">
              <div className="title">
                <span>о нас</span>
                <h1>Cамый лучший производителть </h1>
                <hr />
              </div>
              <div className="dino__txt__body">
                <p>
                  Компания была основана в 2009 году и сейчас производит сотни
                  игрушек. Компания производит различные виды пластиковых
                  игрушек для детей, а также экспортирует их по всему миру.
                  Игрушки изготовлены из высококачественного пластика с
                  использованием современных технологий.
                </p>
                <button>
                  подробнее <img src="./img/home/cardar.svg" alt="toys" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="on__counter">
          <div className="title">
            <span>инфографика</span>
            <h1>Мы в числах</h1>
            <hr />
          </div>
          <div className="container">
            <div className="counter__cards">
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>Количество производств</p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>Количество производств</p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>Количество производств</p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>Количество производств</p>
              </div>
            </div>
            <div className="txt__counter">
              <h3>Lorem ipsum dolor sit </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magnafringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis, lectus magna fringilla urna, porttitor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="protsess">
          <div className="title">
            <span>Процесс</span>
            <h1>Мы как производим игрушки</h1>
            <hr />
          </div>
          <div className="body__protsess">
            <div className="img__protsess">
              <img src="./img/home/tree.svg" alt="" />
            </div>
            <div className="column" style={{ textAlign: "right" }}>
              <p data-aos="zoom-out" style={{ left: "4vw" }}>
                {" "}
                Закупается пластмассовое сырьё (пропелиен, полиэтилен) самого
                высокого качества
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                Для безопасности детей сырьё подвергают повторной очистке с
                помощью специальной техники
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                Игрушки упаковываются в формы специальными механиками
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "-1vw" }}>
                Для работы на станках нанимается необходимая рабочая сила
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "-3vw" }}>
                Функции станков настраиваются для выпуска качественной продукции
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", right: "-10vw" }}>
                {" "}
                Станки запускаются при необходимой температуре
              </p>
            </div>
            <div className="column" style={{ textAlign: "left" }}>
              <p data-aos="zoom-out" style={{ right: "4vw" }}>
                {" "}
                Закупается пластмассовое сырьё (пропелиен, полиэтилен) самого
                высокого качества
              </p>
              <p data-aos="zoom-out">
                Для безопасности детей сырьё подвергают повторной очистке с
                помощью специальной техники
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", left: "1vw" }}>
                Игрушки упаковываются в формы специальными механиками
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "-1vw" }}>
                Для работы на станках нанимается необходимая рабочая сила
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "-3vw" }}>
                Функции станков настраиваются для выпуска качественной продукции
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", left: "-10vw" }}>
                {" "}
                Станки запускаются при необходимой температуре
              </p>
            </div>
          </div>
        </div>
        <div className="export">
          <div className="title">
            <span>Мы в мире!</span>
            <h1>Куда мы экспортируем?</h1>
            <hr />
          </div>
          <div className="container" data-aos="zoom-in-down">
            <div className="txt__export">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magnafringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis, lectus magna fringilla urna, porttitor.{" "}
              </p>
            </div>
            <img src="./img/home/map.png" alt="map toys" />
          </div>
        </div>
        <div className="farm">
          <div className="title">
            <span>Смотрите в 360 градусе</span>
            <h1>Шоврум и завод</h1>
            <hr />
          </div>
          <div className="container">
            <div className="dubl">
              <div className="item" data-aos="flip-left">
                <img src="./img/home/farm1.png" alt="toys uzb" />
                <button>
                  <img src="./img/home/360.svg" alt="toys" />
                  Cмотреть шоурум
                </button>
              </div>
              <div className="item" data-aos="flip-left">
                <img src="./img/home/farm2.png" alt="toys uzb" />
                <button>
                  <img src="./img/home/360.svg" alt="toys" />
                  Cмотреть завод
                </button>
              </div>
            </div>
            <div className="product partner">
              <div className="title">
                <span>на доверяют</span>
                <h1>Партнеры</h1>
                <hr />
              </div>
              <div className="product__body">
                <Slider {...settings2}>
                  <div className={"card__slide"}>
                    <div className="card" data-aos="flip-left">
                      <img src="./img/home/erkatoy.png" alt="toys" />
                    </div>
                  </div>
                  <div className={"card__slide"}>
                    <div className="card" data-aos="flip-left">
                      <img src="./img/home/shag.png" alt="toys" />
                    </div>
                  </div>
                  <div className={"card__slide"}>
                    <div className="card" data-aos="flip-left">
                      <img src="./img/home/new.png" alt="toys" />
                    </div>
                  </div>
                  <div className={"card__slide"}>
                    <div className="card" data-aos="flip-left">
                      <img src="./img/home/jiraf.png" alt="toys" />
                    </div>
                  </div>

                  <div className={"card__slide"}>
                    <div className="card" data-aos="flip-left">
                      <img src="./img/home/shag.png" alt="toys" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <form>
            <h1>Есть вопросы? Мы вам перезвоним</h1>
            <div className="row">
              <input type="text" placeholder="Ваш номер" />
              <input type="text" placeholder="Ваша имя" />
            </div>
            <textarea
              name=""
              placeholder="Сообщения"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
