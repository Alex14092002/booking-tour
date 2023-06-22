import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconStart from '../img/start.svg'
import iconTimeline from '../img/time-line.svg'
const Tourtrongnuoc = () => {
  const [trongnuoc, Settrongnuoc] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://data-booking-tour-default-rtdb.firebaseio.com/tourtrongnuoc.json"
      );
      const jsonData = await response.json();
      Settrongnuoc(jsonData);
      console.log(trongnuoc);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="danhmuc">
        <div className="title">
          <h1>
            Tour <span>Trong Nước</span>
          </h1>
        </div>
        <div className="container">
          {trongnuoc && (
            <div className="tour row">
              {Object.keys(trongnuoc).map((value) => (
                <div className="item-tour col-12 col-md-4">
                  <Link to={`/detail/${value}`}>
                    <div className="main-item">
                      <div className="img-tour">
                        <img src={trongnuoc[value].img1} alt="" width="100%" />
                      </div>
                      <div className="name-tour">
                        <h5>{trongnuoc[value].name}</h5>
                      </div>
                      <div className="price-tour">
                        <h4>
                          {parseInt(
                            trongnuoc[value].priceL || "0"
                          ).toLocaleString("vi-VN")}
                          ₫
                        </h4>
                      </div>
                      <div className="times">
                        <div className="item-time">
                          <img src={iconStart} alt="" width="20px" />
                          <h5>{trongnuoc[value].start}</h5>
                        </div>
                        <div className="item-time">
                          <img src={iconTimeline} alt="" width="20px" />
                          <h5>{trongnuoc[value].timeline}</h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tourtrongnuoc;
