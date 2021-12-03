import React from "react";

function About() {
  return (
    <div className="container">
      <div className="about__page">
        <div className="item__about">
          <h1>О нас</h1>
          <p>
            Компания была основана в 2009 году и производит сотни игрушек. Он
            производит глухие пластмассовые игрушки для детей, а также
            экспортирует их по всему миру. Игрушки изготовлены из
            высококачественного пластика современными технологами. Сегодня в
            компании работает более 40 человек, она экспортирует свою продукцию
            в Россию, Азербайджан, Таджикистан, Казахстан, Киргизию и Грузию.
          </p>
        </div>
        <div className="item__about">
            <div className="grid__imgs">
                <img src="../img/about/image 6.png" alt="toys" />
                <img src="../img/about/image 5.png" alt="toys" style={{top: "5vw"}} />
                <img src="../img/about/image 7.png" alt="toys" />
                <img src="../img/about/image 8.png" alt="toys" style={{top: "5vw"}} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
