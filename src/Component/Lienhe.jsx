import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Room1.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Room1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      note: note,
    };

    try {
      const response = await fetch(
        'https://data-booking-tour-default-rtdb.firebaseio.com/lienhe.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log('Dữ liệu đã được gửi thành công!');
        toast.success('Gửi yêu cầu thành công')
        setName('');
        setEmail('');
        setNote('');
        // Thực hiện các hành động khác sau khi gửi thành công
      } else {
        console.log('Đã xảy ra lỗi khi gửi dữ liệu.');
        // Xử lý lỗi nếu cần thiết
      }
    } catch (error) {
      console.log('Đã xảy ra lỗi:', error);
      // Xử lý lỗi nếu cần thiết
    }
  };

  return (
    <>
      <div className="container main-offer">
        <div className="content-offer">
          <h4>Liên Hệ</h4>
          <p>
            Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi
            nhận được.
          </p>
          <form className="form-lienhe" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Nhập Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="ghichu">Ghi chú</label>
                <input
                  type="text"
                  id="ghichu"
                  placeholder="Nhập ghi chú"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="btn-lienhe">
              <button type="submit">GỬI YÊU CẦU</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Room1;
