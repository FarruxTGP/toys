import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import music from "../img/music.mp3";
function Navbar() {
  let location = useLocation();
  const homeClass = location.pathname === "/" ? "active" : "";
  const aboutClass = location.pathname === "/about" ? "active" : "";
  const productClass = location.pathname === "/product" ? "active" : "";
  console.log(location.pathname);
  let audio = useRef()
  const [changeimg, setchangeimg] = useState("./img/nav/volumeUp.svg")
  const play = () =>{
    if(changeimg === "./img/nav/volumeMute.svg"){
      setchangeimg("./img/nav/volumeUp.svg")
      audio.current.audioEl.current.pause()  
    }else{
      audio.current.audioEl.current.play()
      setchangeimg("./img/nav/volumeMute.svg")
    }
   
  }
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src="./img/nav/logo.svg" alt="" />
        </div>
        <ul>
          <li className={homeClass}></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className={productClass}>
            <Link to="product">
              Products <img src="./img/nav/arrow.svg" alt="toys" />
            </Link>
            <div className="drop">
              <a href="">Product</a>
              <a href="">Product</a>
            </div>
          </li>
          <li className={aboutClass}>
            <Link to="about">
              About <img src="./img/nav/arrow.svg" alt="toys" />{" "}
            </Link>
            <div className="drop">
              <a href="">Product</a>
              <a href="">Product</a>
            </div>
          </li>
          <li>
            <a href="">Showroom</a>
          </li>
          <li>
            <a href="">Partner</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <div className="volume">
              <div className="upper" onClick={play}>
                <img src={changeimg} alt="" />
                <ReactAudioPlayer src={music} ref={audio}  autoPlay controls id={'ms'} style={{display: 'none'}}/>
              </div>
              <input type="range" name="" id="" />
            </div>
          </li>
          <li>
            <button>
              <img src="./img/nav/call.svg" alt="" />
              90 1312000
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
