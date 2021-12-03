import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
function Product() {
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
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="offers">
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link to="/product/3">
                <div className="offer">
                  <img src="./img/about/bear.png" alt="" />
                  <p>Mattel Barbie GTN61 Барби Набор игровой "Клиника"</p>
                  <span>25 000 uzs</span>
                  <div className="hover__offer">
                    <span>Подробнее</span>
                    <img src="./img/home/cardar.svg" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

export default Product;
