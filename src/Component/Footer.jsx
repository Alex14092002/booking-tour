// eslint-disable-next-line no-unused-vars
import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="row">
                <div className="item-footer col-6 col-md-3">
                    <h5>TỔNG QUAN</h5>
                    <ul>
                        <li>TOUR TRONG NƯỚC</li>
                        <li>TOUR NƯỚC NGOÀI</li>
                        
                        <li>TIỆN ÍCH</li>
                    </ul>
                </div>
                <div className="item-footer col-6 col-md-3">
                    <h5>CÁC TIỆN ÍCH</h5>
                    <ul>
                        <li>VIEW NGẮM CẢNH ĐẸP</li>
                        <li>MÓN ĂN CHUẨN ÂU</li>
                        <li>NHÂN VIÊN THÂN THIỆN</li>
                    </ul>
                </div>
                <div className="item-footer col-6 col-md-3">
                    <h5>ƯU ĐÃI</h5>
                    <ul>
                       
                        <li>FREE CÁC MÓN ĂN NHẸ</li>
                        <li>GIẢM ĐẾN 30%</li>
                        <li>GIÁ CẠNH TRANH LỄ TÉT</li>
                    </ul>
                </div>
                <div className="item-footer col-6 col-md-3">
                    <h5>LIÊN HỆ</h5>
                    <ul>
                       
                        <li>LIÊN HỆ CHÚNG TÔI</li>
                        <li>BẢO MẬT THÔNG TIN KHÁCH HÀNG</li>
                        <li>BẢO MẬT THÔNG TIN THANH TOÁN</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
