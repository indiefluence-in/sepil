import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './styles.css'; // Import the CSS file

const ReviewsSection = () => {
  useEffect(() => {
    new Swiper('.reviews_slider', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination--dots',
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="reviews section--nopb">
      <div className="container">
        <div className="reviews_header">
          <h2 className="reviews_header-title">Your Trust is Our Top Concern</h2>
          <p className="reviews_header-text">
            Feugiat sed lectus vestibulum mattis ullamcorper velit. Sed pulvinar proin gravida hendrerit lectus
          </p>
        </div>
        <div className="reviews_slider swiper">
          <div className="swiper-wrapper">
            <div className="reviews_slider-slide swiper-slide">
              <div className="reviews_slider-slide_wrapper d-flex flex-column align-items-center">
                <picture>
                  <source srcSet="img/placeholder.jpg" type="image/webp" />
                  <img className="lazy avatar" src="img/placeholder.jpg" alt="avatar" />
                </picture>
                <ul className="rating d-flex align-items-center accent">
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                </ul>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec porttitor purus. In ut libero euismod, tristique diam et, molestie urna. Curabitur vehicula leo non felis egestas sodales. Mauris nec sodales neque. Maecenas porttitor suscipit lorem ac volutpat. Nam bibendum dolor pharetra lectus convallis, at commodo justo iaculis.
                </p>
                <h5 className="name">John Doe</h5>
              </div>
            </div>
            <div className="reviews_slider-slide swiper-slide">
              <div className="reviews_slider-slide_wrapper d-flex flex-column align-items-center">
                <picture>
                  <source srcSet="img/placeholder.jpg" type="image/webp" />
                  <img className="lazy avatar" src="img/placeholder.jpg" alt="avatar" />
                </picture>
                <ul className="rating d-flex align-items-center accent">
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                  <li className="rating_star">
                    <i className="icon-star_fill"></i>
                  </li>
                </ul>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec porttitor purus. In ut libero euismod, tristique diam et, molestie urna. Curabitur vehicula leo non felis egestas sodales. Mauris nec sodales neque. Maecenas porttitor suscipit lorem ac volutpat. Nam bibendum dolor pharetra lectus convallis, at commodo justo iaculis.
                </p>
                <h5 className="name">John Doe</h5>
              </div>
            </div>
            {/* Repeat for other slides */}
          </div>
          <div className="swiper-pagination swiper-pagination--dots"></div>
        </div>
      </div>
      <div className="reviews_underlay">
        <span className="reviews_underlay-circle reviews_underlay-circle--green"></span>
        <span className="reviews_underlay-circle reviews_underlay-circle--yellow"></span>
      </div>
    </section>
  );
};

export default ReviewsSection;
