
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import iconStart from '../img/start.svg'
import iconTimeline from '../img/time-line.svg'
import banner from '../img/banner.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  const [trongnuoc , Settrongnuoc] = useState([])
  const [ngoainuoc, Setngoainuoc] = useState([])
 
  

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://data-booking-tour-default-rtdb.firebaseio.com/tourtrongnuoc.json');
        const jsonData = await response.json();
        Settrongnuoc(jsonData);
        console.log(trongnuoc);
    };
    fetchData()
    
   
  }, []);
  useEffect(() => {
    const fetchData2 = async () => {
        const response = await fetch('https://data-booking-tour-default-rtdb.firebaseio.com/tournuocngoai.json');
        const jsonData = await response.json();
        Setngoainuoc(jsonData);
        console.log(ngoainuoc);
    };

    fetchData2();
  }, []);
  
  return(
    <>
    <div className="banners">
      <img src={banner} alt="" width="100%" />
    </div>
    <div className="danhmuc">
      <div className="title">
        <h1>Tour <span>Trong Nước</span></h1>
      </div>
      <div className="container">
            { trongnuoc && (
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
                       <h4>{parseInt(trongnuoc[value].priceL || "0").toLocaleString('vi-VN')}₫</h4>
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
              )
  
            }
       
       
      </div>
    </div>
    <div className="danhmuc">
      <div className="title">
        <h1>Tour <span>Nước Ngoài</span></h1>
      </div>
      <div className="container">
            { ngoainuoc && (
             <div className="tour row">
                 {Object.keys(ngoainuoc).map((value) => (   
                   <div className="item-tour col-12 col-md-4">
                    <Link >
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
   
};

export default Home;
