import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { FormattedMessage } from "react-intl";

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
                  <h1>
                    <FormattedMessage id="home.discount" /> -30%
                  </h1>
                  <p>
                    <FormattedMessage id="home.slidetxt" />{" "}
                  </p>
                  <button>
                    <FormattedMessage id="home.more" />{" "}
                    <img src="./img/home/btnarrow.svg" alt="toys" />
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
                  <h1>
                    <FormattedMessage id="home.discount" /> -30%
                  </h1>
                  <p>
                    <FormattedMessage id="home.slidetxt" />{" "}
                  </p>
                  <button>
                    <FormattedMessage id="home.more" />{" "}
                    <img src="./img/home/btnarrow.svg" alt="toys" />
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
              <img src="./img/home/down.svg" alt="toys" />{" "}
              <FormattedMessage id="home.download" />
            </button>
          </div>
        </div>
        <div className="container">
          <div className="product">
            <div className="title">
              <span>
                {" "}
                <FormattedMessage id="home.cotegory" />
              </span>
              <h1>
                <FormattedMessage id="nav.products" />
              </h1>
              <hr />
            </div>
            <div className="product__body">
              <Slider {...settings2}>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/ayiqcha.png" alt="toys" />
                    <p>
                      <FormattedMessage id="home.gamers" />
                    </p>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kamazcard.png" alt="toys" />
                    <p>
                      <FormattedMessage id="home.gamers" />
                    </p>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/shtuk.png" alt="toys" />
                    <p>
                      <FormattedMessage id="home.gamers" />
                    </p>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>
                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kazan.png" alt="toys" />
                    <p>
                      <FormattedMessage id="home.gamers" />
                    </p>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/cardar.svg" alt="toys" />
                    </button>
                  </div>
                </div>

                <div className={"card__slide"}>
                  <div className="card" data-aos="flip-left">
                    <img src="./img/home/kamazcard.png" alt="toys" />
                    <p>
                      <FormattedMessage id="home.gamers" />
                    </p>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/cardar.svg" alt="toys" />
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
            <div className="dino__txt" data-aos="flip-left">
              <div className="title">
                <span>
                  <FormattedMessage id="nav.about" />
                </span>
                <h1>
                  <FormattedMessage id="home.mader" />
                </h1>
                <hr />
              </div>
              <div className="dino__txt__body">
                <p>
                  <FormattedMessage id="home.abouttxt" />
                </p>
                <button>
                  <FormattedMessage id="home.more" />{" "}
                  <img src="./img/home/cardar.svg" alt="toys" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="on__counter">
          <div className="title">
            <span>
              <FormattedMessage id="home.infograph" />
            </span>
            <h1>
              <FormattedMessage id="home.number" />
            </h1>
            <hr />
          </div>
          <div className="container">
            <div className="counter__cards">
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>
                  {" "}
                  <FormattedMessage id="home.numberof" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>
                  <FormattedMessage id="home.numberof2" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>
                  <FormattedMessage id="home.numberof3" />
                </p>
              </div>
              <div className="c__card" data-aos="flip-left">
                <h1>200</h1>
                <p>
                  <FormattedMessage id="home.numberof4" />
                </p>
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
            <span>
              <FormattedMessage id="home.process" />
            </span>
            <h1> <FormattedMessage id="home.processtit" /></h1>
            <hr />
          </div>
          <div className="body__protsess">
            <div className="img__protsess">
              <img src="./img/home/tree.svg" alt="" />
            </div>
            <div className="column" style={{ textAlign: "right" }}>
              <p data-aos="zoom-out" style={{ left: "4vw" }}>
                {" "}
                <FormattedMessage id="home.info1" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                <FormattedMessage id="home.info2" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", right: "1vw" }}>
                <FormattedMessage id="home.info3" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "-1vw" }}>
                <FormattedMessage id="home.info4" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", right: "-3vw" }}>
                <FormattedMessage id="home.info5" />
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", right: "-10vw" }}>
                {" "}
                <FormattedMessage id="home.info6" />
              </p>
            </div>
            <div className="column" style={{ textAlign: "left" }}>
              <p data-aos="zoom-out" style={{ right: "4vw" }}>
                {" "}
                <FormattedMessage id="home.info7" />
              </p>
              <p data-aos="zoom-out">
                <FormattedMessage id="home.info8" />
              </p>
              <p data-aos="zoom-out" style={{ top: "1vw", left: "1vw" }}>
                <FormattedMessage id="home.info9" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "-1vw" }}>
                <FormattedMessage id="home.info10" />
              </p>
              <p data-aos="zoom-out" style={{ top: "3vw", left: "-3vw" }}>
                <FormattedMessage id="home.info11" />
              </p>
              <p data-aos="zoom-out" style={{ top: "2vw", left: "-10vw" }}>
                {" "}
                <FormattedMessage id="home.info12" />
              </p>
            </div>
          </div>
        </div>
        <div className="export">
          <div className="title">
            <span>
              <FormattedMessage id="home.world" />
            </span>
            <h1>
              <FormattedMessage id="home.world2" />
            </h1>
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
            <span>
              <FormattedMessage id="home.gradus" />
            </span>
            <h1>
              <FormattedMessage id="nav.showroom" />
            </h1>
            <hr />
          </div>
          <div className="container">
            <div className="dubl">
              <div className="item" data-aos="flip-left">
                <img src="./img/home/farm1.png" alt="toys uzb" />
                <button>
                  <img src="./img/home/360.svg" alt="toys" />
                  <FormattedMessage id="home.gradusbtn" />
                </button>
              </div>
              <div className="item" data-aos="flip-left">
                <img src="./img/home/farm2.png" alt="toys uzb" />
                <button>
                  <img src="./img/home/360.svg" alt="toys" />
                  <FormattedMessage id="home.gradusbtn2" />
                </button>
              </div>
            </div>
            <div className="product partner">
              <div className="title">
                <span>
                  {" "}
                  <FormattedMessage id="home.prtitle" />
                </span>
                <h1><FormattedMessage id="nav.partner" /></h1>
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
            <h1><FormattedMessage id="home.form" /></h1>
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
