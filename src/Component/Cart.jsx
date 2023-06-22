import React from "react";
import "../Component/Cart.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: ""
  });
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += parseInt(item.totalPrice) || 0;
    });
    return totalPrice.toLocaleString("vi-VN") + "đ";
  };
  const handleRemoveItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleBooking = () => {
    const bookingData = {
      name: customerInfo.name,
      phone: customerInfo.phone,
      email: customerInfo.email,
      cart: cart
    };

    fetch("https://data-booking-tour-default-rtdb.firebaseio.com/customer.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    })
      .then((response) => {
        if (response.ok) {
          console.log("Booking successful!");
          toast.success('Booking tour thành công . Chúng tôi sẽ liên hệ bạn sớm nhất');
          setCustomerInfo({
            name: "",
            phone: "",
            email: ""
          });
          setCart([]);
          localStorage.removeItem("cartItems");
        } else {
          console.error("Booking error:", response.status);
        }
      })
      .catch((error) => {
        console.error("Booking error:", error);
      });
  };
  return (
    
    <>
     
      <div className="container main-cart">
        <div className="head">
          <h5>Giỏ hàng</h5>
        </div>
        <div className="cart-main row">
          <div className="col-12 col-md-8">
            {cart.map((value,index) => {
              return (
                <>
                  <div className="item-cart" key={index}>
                    <div className="row">
                      <div className="col-4 detail-cart">
                        <img src={value.img1} alt="" width="100%" />
                      </div>
                      <div className="col-6 detail-cart">
                        <h4>{value.tourName}</h4>
                        <h5>Ngày đi : {value.departureDate} </h5>
                        <button onClick={() => handleRemoveItem(index)}>Xóa</button>
                      </div>
                      <div className="col-2 detail-cart">
                        <h3>
                          {parseInt(value.totalPrice || "0").toLocaleString(
                            "vi-VN"
                          )}
                          ₫
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="item-cart col-12 col-md-4">
            <table>
              <tr>
                <td>Thành tiền : </td>
                <td className="tong">{calculateTotalPrice()}</td>
              </tr>
            </table>
            <div className="form-info">
                <div className="item-form">
                    <label htmlFor="name">Tên khách hàng : </label>
                    <input type="text" name='name' placeholder="Nhập tên khách hàng" value={customerInfo.name}
                onChange={handleInputChange} />
                </div>
                <div className="item-form">
                    <label htmlFor="phone">Số điện thoại : </label>
                    <input type="text" name="phone" placeholder="Nhập số điện thoại"  value={customerInfo.phone}
                onChange={handleInputChange} />
                </div>
                <div className="item-form">
                    <label htmlFor="email">Email : </label>
                    <input type="text" name='email' placeholder="Nhập email khách hàng" value={customerInfo.email}
                onChange={handleInputChange} />
                </div>
                
            </div>
            <div className="btn-dat">
              <button onClick={handleBooking}>ĐẶT TOUR NGAY</button>
              <Link to="/">TIẾP TỤC TÌM TOUR</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
