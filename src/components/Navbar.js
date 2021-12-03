import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  let location = useLocation()
  const homeClass = location.pathname === "/" ? "active" : "";
  const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
  const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src="./img/nav/logo.svg" alt="" />
        </div>
        <ul>
          <li className="active"></li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">
              Products <img src="./img/nav/arrow.svg" alt="toys" />
            </a>
            <div className="drop">
              <a href="">Product</a>
              <a href="">Product</a>
            </div>
          </li>
          <li>
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
              <div className="upper">
                <img src="./img/nav/volumeUp.svg" alt="" />
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
