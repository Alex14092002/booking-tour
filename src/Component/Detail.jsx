import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Component/Detail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";




const Detail = () => {
   

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [adultQuantity, setAdultQuantity] = useState(1);
  const [childQuantity, setChildQuantity] = useState(0);
  const [babyQuantity, setBabyQuantity] = useState(0);
  const [adultPrice, setAdultPrice] = useState(0);
  const [childPrice, setChildPrice] = useState(0);
  const [babyPrice, setBabyPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(adultPrice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async ()=>{
        const res = await fetch(
            `https://data-booking-tour-default-rtdb.firebaseio.com/tourtrongnuoc/${id}.json`
          );
          const db = await res.json();
          setData(db);
    })()
  }, []);

  useEffect(() => {
    if (data) {
      setAdultPrice(data.priceL);
      setChildPrice(data.priceM);
      setBabyPrice(data.priceS);
      setLoading(false);
    }
  }, [data]);

  const decreaseQuantity = (type) => {
    if (type === "adult" && adultQuantity > 1) {
      setAdultQuantity(adultQuantity - 1);
    } else if (type === "child" && childQuantity > 0) {
      setChildQuantity(childQuantity - 1);
    } else if (type === "baby" && babyQuantity > 0) {
      setBabyQuantity(babyQuantity - 1);
    }
  };

  const increaseQuantity = (type) => {
    if (type === "adult") {
      setAdultQuantity(adultQuantity + 1);
    } else if (type === "child") {
      setChildQuantity(childQuantity + 1);
    } else if (type === "baby") {
      setBabyQuantity(babyQuantity + 1);
    }
  };

  useEffect(() => {
    const total =
      adultQuantity * adultPrice +
      childQuantity * childPrice +
      babyQuantity * babyPrice;
    setTotalPrice(total);
  }, [
    adultQuantity,
    childQuantity,
    babyQuantity,
    adultPrice,
    childPrice,
    babyPrice,
  ]);

  const Loading = () => {
    return (
      <>
        <h1>Loading</h1>
      </>
    );
  };

  const handleAddToCart = () => {
    const tourData = {
      tourName: data.name,
      img1: data.img1,
      departureDate: document.getElementById("departure-date").value,
      totalPrice,
    };

    // Get the existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add the tour data to the cart items
    existingCartItems.push(tourData);

    // Save the updated cart items back to local storage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      // Show a success message or perform any additional actions
      
    };
  
  const showContent = () => {
    return (
        
      <>
      
        {
           
            
            <div className="container">
            <div className="main-detail row">
              <div className="col-12 col-md-6">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img
                      src={data.img1}
                      width="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={data.img2}
                      width="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={data.img3}
                      width="100%"
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src={data.img1}
                      height="10%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={data.img2}
                      height="10%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={data.img3}
                      height="10%"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="item-detail col-12 col-md-6">
                <h5>{data.name}</h5>
                <p>Hành trình: {data.trip}</p>
                <ul>
                  <li>
                    <img
                      src="https://bizweb.dktcdn.net/100/299/077/themes/642224/assets/tag_icon_1.svg?1676860854146"
                      alt=""
                      width="18px"
                    />
                    {data.move1}
                  </li>
                  <li>
                    <img
                      src="https://bizweb.dktcdn.net/100/299/077/themes/642224/assets/tag_icon_3.svg?1676860854146"
                      alt=""
                      width="18px"
                    />
                     {data.move2}
                  </li>
                  <li>
                    <img
                      src="https://bizweb.dktcdn.net/100/299/077/themes/642224/assets/tag_icon_4.svg?1676860854146"
                      alt=""
                      width="18px"
                    />
                    {data.start}
                  </li>
                  <li>
                    <img
                      src="https://bizweb.dktcdn.net/100/299/077/themes/642224/assets/tag_icon_5.svg?1676860854146"
                      alt=""
                      width="18px"
                    />
                    {data.timeline}
                  </li>
                </ul>
                <ul>
                  <li>
                    {data.describe1}
                  </li>
                  <li>
                  {data.describe2}
                  </li>
                  <li>
                  {data.describe3}
                  </li>
                  <li>
                  {data.describe4}
                  </li>
                </ul>
  
                <div className="btn-option">
                  <div className="btn-dattour">
                    <a href="#booking">ĐẶT TOUR</a>
                  </div>
                  <div className="btn-lienhe">
                    <Link to='/lienhe'>GỌI LẠI CHO TÔI SAU</Link>
                  </div>
                </div>

               
              </div>
            </div>
  
            <div className="dontour" id="booking">
              <table>
                <thead>
                  <tr>
                    <th>Loại khách</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Tổng giá</th>
                  </tr>
                </thead>
  
                <tbody>
                  <tr>
                    <td>Người lớn</td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => decreaseQuantity("adult")}
                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          value={adultQuantity}
                          readOnly
                        />
                        <button
                          onClick={() => increaseQuantity("adult")}
                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      {parseInt(adultPrice || "0").toLocaleString("vi-VN")}₫
                    </td>
                    <td className="tongtien">
                      {parseInt(adultPrice * adultQuantity || "0").toLocaleString(
                        "vi-VN"
                      )}
                      ₫
                    </td>
                  </tr>
                  <tr>
                    <td>Trẻ Em</td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => decreaseQuantity("child")}
                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          value={childQuantity}
                          readOnly
                        />
                        <button
                          onClick={() => increaseQuantity("child")}
                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      {parseInt(childPrice || "0").toLocaleString("vi-VN")}₫
                    </td>
                    <td className="tongtien">
                      {parseInt(childQuantity * childPrice || "0").toLocaleString(
                        "vi-VN"
                      )}
                      ₫
                    </td>
                  </tr>
                  <tr>
                    <td>Em bé</td>
                    <td>
                      <div className="quantity-input">
                        <button
                          onClick={() => decreaseQuantity("baby")}
                          id="decrease-btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="quantity"
                          value={babyQuantity}
                          readOnly
                        />
                        <button
                          onClick={() => increaseQuantity("baby")}
                          id="increase-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{parseInt(babyPrice || "0").toLocaleString("vi-VN")}₫</td>
                    <td className="tongtien">
                      {parseInt(babyPrice * babyQuantity || "0").toLocaleString(
                        "vi-VN"
                      )}
                      ₫
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="tongtien">Tổng Tiền:</td>
                    <td className="tong">
                      {parseInt(totalPrice || "0").toLocaleString("vi-VN")}₫
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="select-booking">
                <div className="select">
                  <label htmlFor="">Chọn Ngày</label>
                  <input type="date" name="" id="departure-date" />
                </div>
                <div className="btn-booking">
                  <Link to='/cart' onClick={handleAddToCart} >THÊM TOUR VÀO GIỎ HÀNG</Link>
                </div>
              </div>
            </div>
          </div>
          
        }
      
      </>
    );
  };

  return <>
  {loading ? Loading() : showContent()}

  </>;
};

export default Detail;
