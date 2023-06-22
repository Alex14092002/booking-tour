import React from 'react'
import logo from '../img/BOOKING TOUR.png'
import '../Component/Gioithieu.css'
import { Link } from 'react-router-dom'
const Gioithieu = () => {
  return (
   <>
   <div className="container">
    <div className="row main-gioithieu">
        <div className="col-12 col-md-8">
            <h5>Giới Thiệu</h5>
            <p>Dịch vụ booking tour du lịch là một giải pháp tiện lợi và đáng tin cậy để khách hàng có thể tìm kiếm, chọn lựa và đặt tour du lịch một cách dễ dàng và nhanh chóng. Dịch vụ này giúp khách hàng tiết kiệm thời gian và công sức trong việc lên kế hoạch và tổ chức chuyến đi, đồng thời mang đến cho họ những trải nghiệm du lịch tuyệt vời.</p>
            <p>Lựa chọn đa dạng: Dịch vụ booking tour cung cấp cho khách hàng một danh sách các tour đa dạng, bao gồm các điểm đến phổ biến và hấp dẫn trên toàn thế giới. Khách hàng có thể dễ dàng tìm hiểu về các địa điểm du lịch, lịch trình, hoạt động và dịch vụ đi kèm của từng tour.</p>
            <Link to='/'>
                BOOKING NGAY
            </Link>
        </div>
        <div className="col-12 col-md-4">
            <img src={logo} alt="" width='100%' />
        </div>
    </div>
   </div>
   </>
  )
}

export default Gioithieu
