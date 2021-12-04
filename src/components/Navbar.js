import React, { useRef, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import music from "../img/music.mp3";
import { FormattedMessage } from "react-intl";
import { Context } from "../components/Wrapper";
function Navbar(props) {
  const context = useContext(Context);
  let location = useLocation();
  const homeClass = location.pathname === "/" ? "active" : "";
  const aboutClass = location.pathname === "/about" ? "active" : "";
  const productClass = location.pathname === "/product" ? "active" : "";
  let audio = useRef();
  const [changeimg, setchangeimg] = useState("/img/nav/volumeUp.svg");
  const play = () => {
    if (changeimg === "/img/nav/volumeMute.svg") {
      setchangeimg("/img/nav/volumeUp.svg");
      audio.current.audioEl.current.pause();
    } else {
      audio.current.audioEl.current.play();
      setchangeimg("/img/nav/volumeMute.svg");
    }
  };
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src="/img/nav/logo.svg" alt="" />
        </div>
        <ul>
          <li className={homeClass}></li>
          <li>
            <Link to="/">
              <FormattedMessage id="nav.home" />
            </Link>
          </li>
          <li className={productClass}>
            <Link to="product">
              <FormattedMessage id="nav.products" />
              <img src="/img/nav/arrow.svg" alt="toys" />
            </Link>
            <div className="drop">
              <a href="">Product</a>
              <a href="" className="blue">
                Product
              </a>
            </div>
          </li>
          <li className={aboutClass}>
            <Link to="about">
              <FormattedMessage id="nav.about" />
              <img src="/img/nav/arrow.svg" alt="toys" />{" "}
            </Link>
            <div className="drop">
              <a href="">Product</a>
              <a href="" className="blue">
                Product
              </a>
            </div>
          </li>
          <li>
            <a href="">
              <FormattedMessage id="nav.showroom" />
            </a>
          </li>
          <li>
            <a href="">
              <FormattedMessage id="nav.partner" />
            </a>
          </li>
          <li>
            <a href="">
              <FormattedMessage id="nav.contact" />
            </a>
            <select value={context.locale} onChange={context.selectLanguage}>
              <option value="ru">Русский</option>
              <option value="uz">O'zbek</option>
              <option value="en">English</option>
            </select>
          </li>
          <li>
            <div className="volume">
              <div className="upper" onClick={play}>
                <img src={changeimg} alt="" />
                <ReactAudioPlayer
                  src={music}
                  ref={audio}
                  autoPlay
                  controls
                  id={"ms"}
                  style={{ display: "none" }}
                />
              </div>
              <input type="range" name="" id="" />
            </div>
          </li>
          <li>
            <button>
              <img src="/img/nav/call.svg" alt="" />
              90 1312000
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
