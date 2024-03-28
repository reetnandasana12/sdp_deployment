import React, { useState } from 'react';

const BookTableSection = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', bookingData);
  };

  return (
    <section id="book-table">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <h2>Book Your Table Now</h2>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <div className="left-image">
              <img src="img/book_left_image.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-info">
              <h4>Reservation</h4>
              <form id="form-submit" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                        onChange={handleChange}
                        value={bookingData.name}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required=""
                        onChange={handleChange}
                        value={bookingData.email}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Your Password"
                        required=""
                        onChange={handleChange}
                        value={bookingData.password}
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" className="btn">
                        Book Table
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTableSection;
