// import React, { useState } from "react";

import "./Header.css";
import { useState } from "react";
import { Link , NavLink  } from "react-router-dom";
import logo from '../img/BOOKING TOUR.png'
const Header = () => {
  
  
 
  const openBar = () =>{
    const bar = document.querySelector('.sidebarMobi')
    bar.classList.toggle('onSide')
  }

  return (
    <>
      <div className="sticky-top main-header">
        <div className="container header ">
          <div className="logo">
            <img
              src={logo}
              alt=""
              width="70px"
            />
          </div>
          <div className="list-category">
            <ul>
              <li>
               
                <NavLink  activeClassName="active"   to="/">TRANG CHỦ</NavLink>
              </li>
              <li>
                <NavLink to="/uudai"> GIỚI THIỆU</NavLink>
              </li>
              <li>
                <NavLink to="/room1">TOUR TRONG NƯỚC</NavLink>
              </li>
              <li>
                <NavLink to="/room2">TOUR NƯỚC NGOÀI</NavLink>
              </li>
              
              <li>
                <NavLink to="/lienhe">LIÊN HỆ VỚI CHÚNG TÔI</NavLink>
              </li>
            </ul>
          </div>
         
          <div className="hambur-menu" onClick={()=>openBar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>


        <div className="sidebarMobi">
         
           <ul>
            <li className="logo-mobile">
              <img src="https://www.sedonavietnam.com/wp-content/uploads/2018/02/SSHCMC-Logo.jpg" alt=""  width='75%'/>
            </li>
              <li>
                {" "}
                <Link to="/">TRANG CHỦ</Link>{" "}
              </li>
              <li>
                <Link to="/uudai"> CÁC ƯU ĐÃI</Link>
              </li>
              <li>
                <Link to="/room1">PHÒNG NGỦ 1 NGƯỜI</Link>{" "}
              </li>
              <li>
                <Link to="/room2">PHÒNG NGỦ 2 NGƯỜI</Link>
              </li>
              <li>
                <Link to='/homestay'>HOME STAY</Link>
              </li>
              <li>
                <Link to="/tienich">TIỆN ÍCH</Link>
              </li>
              <li>
                <Link to="/lienhe">LIÊN HỆ VỚI CHÚNG TÔI</Link>
              </li>
            </ul>
           
        </div>
      </div>
    </>
  );
};

export default Header;
