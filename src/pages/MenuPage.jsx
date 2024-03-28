import React, { useEffect } from "react";

const MenuPage = () => {
//   useEffect(() => {
//     // navigation click actions
//     $(".scroll-link").on("click", function (event) {
//       event.preventDefault();
//       var sectionID = $(this).attr("data-id");
//       scrollToID("#" + sectionID, 750);
//     });

//     // scroll to top action
//     $(".scroll-top").on("click", function (event) {
//       event.preventDefault();
//       $("html, body").animate({ scrollTop: 0 }, "slow");
//     });

//     // mobile nav toggle
//     $("#nav-toggle").on("click", function (event) {
//       event.preventDefault();
//       $("#main-nav").toggleClass("open");
//     });
//   }, []);

//   // scroll function
//   const scrollToID = (id, speed) => {
//     var offSet = 0;
//     var targetOffset = $(id).offset().top - offSet;
//     var mainNav = $("#main-nav");
//     $("html,body").animate({ scrollTop: targetOffset }, speed);
//     if (mainNav.hasClass("open")) {
//       mainNav.css("height", "1px").removeClass("in").addClass("collapse");
//       mainNav.removeClass("open");
//     }
//   };

  return (
    <div>
      <div className="header">
        <div className="container">
          <a href="#" className="navbar-brand scroll-top">
            Victory
          </a>
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#main-nav"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="main-nav" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="menu.html">Our Menus</a>
                </li>
                <li>
                  <a href="blog.html">Blog Entries</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Menus</h1>
              <p>
                Curabitur at dolor sed felis lacinia ultricies sit amet vel sem.
                Vestibulum diam leo, sodales tempor lectus sed, varius gravida
                mi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="breakfast-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="breakfast-menu-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src="img/breakfast_menu.jpg" alt="Breakfast" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h2>Breakfast Menu</h2>
                    <div id="owl-breakfast" className="owl-carousel owl-theme">
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/breakfast_item.jpg" alt="" />
                          <div className="price">$3.50</div>
                          <div className="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/lunch_item.jpg" alt="" />
                          <div className="price">$7.25</div>
                          <div className="text-content">
                            <h4>Drink Vinegar Prism</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/dinner_item.jpg" alt="" />
                          <div className="price">$11.50</div>
                          <div className="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lunch-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="lunch-menu-content">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Lunch Menu</h2>
                    <div id="owl-lunch" className="owl-carousel owl-theme">
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/lunch_item.jpg" alt="" />
                          <div className="price">$6.50</div>
                          <div className="text-content">
                            <h4>Mumble Ditch Corn</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/breakfast_item.jpg" alt="" />
                          <div className="price">$11.75</div>
                          <div className="text-content">
                            <h4>Wayfare Lomo Core</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/dinner_item.jpg" alt="" />
                          <div className="price">$16.50</div>
                          <div className="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src="img/lunch_menu.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dinner-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="dinner-menu-content">
                <div className="row">
                  <div className="col-md-5">
                    <div className="left-image">
                      <img src="img/dinner_menu.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h2>Dinner Menu</h2>
                    <div id="owl-dinner" className="owl-carousel owl-theme">
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/dinner_item.jpg" alt="" />
                          <div className="price">$8.25</div>
                          <div className="text-content">
                            <h4>Meal Apples Almonds</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/lunch_item.jpg" alt="" />
                          <div className="price">$12.50</div>
                          <div className="text-content">
                            <h4>Ditch Corn Art</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="item col-md-12">
                        <div className="food-item">
                          <img src="img/breakfast_item.jpg" alt="" />
                          <div className="price">$16.00</div>
                          <div className="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>
                              Dreamcatcher squid ennui cliche chicharros nes
                              echo small batch jean ditcher meal...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <form id="form-submit" action="" method="get">
                  <div className="row">
                    {/* Rest of the form fields go here */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Copyright &copy; 2020 Victory Template</p>
                        </div>
                        <div className="col-md-4">
                            <ul className="social-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p>Design: TemplateMo</p>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
            <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"></script>')</script>

            <script src="js/vendor/bootstrap.min.js"></script>

            <script src="js/plugins.js"></script>
            <script src="js/main.js"></script>

            
    </div>
  );
};

export default MenuPage;
