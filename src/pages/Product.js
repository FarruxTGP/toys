import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { Context } from "../components/Wrapper";
function Product() {
  const [rest, setrest] = useState([]);
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "https://toys-abba.techdatasoft.uz/api/v1/offers"
      );
      setrest(response.data);
    };
    axiosGet();
  }, []);
  let context = useContext(Context)
  return (
    <Tabs>
      <div className="container products">
        <div className="tabs__grid">
          <h2>Категория</h2>
          <h1>Машинки и модели</h1>
          <TabList className="tabs">
            <Tab>
              <button>Машинки и модели</button>
            </Tab>
            <Tab>
              <button>Конструкторы</button>
            </Tab>
            <Tab>
              <button>Игрушка для девчонок</button>
            </Tab>
            <Tab>
              <button>Игрушка для уморазвития</button>
            </Tab>
            <Tab>
              <button>Качели для плашадок</button>
            </Tab>
            <Tab>
              <button>Спортивные игрушки</button>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Машинки")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Конструкторы")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "девчонок")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "уморазвития")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "плашадок")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              {rest
                .filter((item) => item.type === "Спортивные")
                .map((item) => (
                  <Link to={"/product/" + item.id}>
                    <div className="offer">
                      <img
                        src={
                          "https://toys-abba.techdatasoft.uz/img/" + item.img[0]
                        }
                        alt=""
                      />
                      <p>
                        {context.locale === "uz"
                          ? item.name_uz
                          : context.locale === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </p>
                      <span>25 000 uzs</span>
                      <div className="hover__offer">
                        <span>Подробнее</span>
                        <img src={"./img/home/cardar.svg"} alt="" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

export default Product;
