import React from 'react'
import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconStart from '../img/start.svg'
import iconTimeline from '../img/time-line.svg'

const Tournuocngoai = () => {
    const [ngoainuoc, Setngoainuoc] = useState([])
    useEffect(() => {
        const fetchData2 = async () => {
            const response = await fetch('https://data-booking-tour-default-rtdb.firebaseio.com/tournuocngoai.json');
            const jsonData = await response.json();
            Setngoainuoc(jsonData);
            console.log(ngoainuoc);
        };
    
        fetchData2();
      }, []);
  return (
   <>
       <div className="danhmuc">
      <div className="title">
        <h1>Tour <span>Nước Ngoài</span></h1>
      </div>
      <div className="container">
            { ngoainuoc && (
             <div className="tour row">
                 {Object.keys(ngoainuoc).map((value) => (   
                   <div className="item-tour col-12 col-md-4">
                    <Link to={`/detail2/${value}`} >
                    <div className="main-item">
                     <div className="img-tour">
                       <img src={ngoainuoc[value].img1} alt="" width="100%" />
                     </div>
                     <div className="name-tour">
                       <h5>{ngoainuoc[value].name}</h5>
                     </div>
                     <div className="price-tour">
                       <h4>{parseInt(ngoainuoc[value].priceL || "0").toLocaleString('vi-VN')}Đ</h4>
                     </div>
                   <div className="times">
                     <div className="item-time">
                       <img src={iconStart} alt="" width="20px" />
                       <h5>{ngoainuoc[value].start}</h5>
                     </div>
                     <div className="item-time">
                       <img src={iconTimeline} alt="" width="20px" />
                       <h5>{ngoainuoc[value].timeline}</h5>
                     </div>
                   </div>
                   </div>
                    </Link>
                  
                 </div>
                
                
          ))}
             </div>
              )
  
            }
       
       
      </div>
    </div>
    
   </>
  )
}

export default Tournuocngoai
