import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Modal from "react-modal";
import axios from "axios";
import { Context } from "../components/Wrapper";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    let fixDate = {
      price: offer?.price || 0,
      name: data.name,
      product_name: offer?.name_uz,
      count: data.number
    };
    function buildFormData(formData, data, parentKey) {
      if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
          buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
      } else {
        const value = data == null ? '' : data;
    
        formData.append(parentKey, value);
      }
    }
    function jsonToFormData(data) {
      const formData = new FormData();
      
      buildFormData(formData, data);
      
      return formData;
    }
    const headers = { 
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    axios.post('https://toys-abba.techdatasoft.uz/api/v1/order',  jsonToFormData(fixDate) , { headers })
        .then(response => console.clear() );
        setIsOpen(false);
  };

  const context = useContext(Context);
  let location = useParams();
  console.log(location);
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
  let { id } = useParams();
  const activeIds = [Number(id)];
  const result = rest.filter(({ id }) => activeIds.includes(id));
  const offer = result[0];
  console.log(offer);

  return (
    <>
      <div className="container offer__page">
        <div className="item__offer">
          <h1>
            {context.locale === "uz"
              ? offer?.name_uz
              : context.locale === "ru"
              ? offer?.name_ru
              : offer?.name_en}
          </h1>
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            transitionTime={300}
            width="600px"
          >
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://toys-abba.techdatasoft.uz/img/" + offer?.img?.[0]}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://toys-abba.techdatasoft.uz/img/" + offer?.img?.[1]}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://toys-abba.techdatasoft.uz/img/" + offer?.img?.[2]}
              />
            </div>
          </Carousel>
        </div>
        <div className="item__offer sp__around">
          <button className="blue">Характеристики</button>
          <p>
            {context.locale === "uz"
              ? offer?.title_uz
              : context.locale === "ru"
              ? offer?.title_ru
              : offer?.title_en}
            .{" "}
          </p>
          <span>
            {" "}
            <b>Внимание! </b>{" "}
            {context.locale === "uz"
              ? offer?.info_uz
              : context.locale === "ru"
              ? offer?.info_ru
              : offer?.info_en}
            .
          </span>
          <div className="flex">
            <div className="price">
              <span>{offer?.price} uzs</span>
            </div>
            <button onClick={openModal}>Заказать</button>
          </div>
        </div>
      </div>
      <div className="container offer__slider">
        <Slider {...settings2}>
          {rest.map((item) => (
            <a href={"/product/" + item.id}>
              <div className="offer">
                <img
                  src={"https://toys-abba.techdatasoft.uz/img/" + item.img[0]}
                  alt=""
                />
                <p>
                  {" "}
                  {context.locale === "uz"
                    ? offer?.name_uz
                    : context.locale === "ru"
                    ? offer?.name_ru
                    : offer?.name_en}
                </p>
                <span>25 000 uzs</span>
                <div className="hover__offer">
                  <span>Подробнее</span>
                  <img src={"/img/home/cardar.svg"} alt="" />
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Ваш номер или e-mail"
            {...register("number")}
          />
          <input type="text" placeholder="Ваша имя" {...register("name")} />
          <button>Заказать</button>
        </form>
      </Modal>
    </>
  );
}

export default Offer;
