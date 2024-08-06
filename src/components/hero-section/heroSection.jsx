import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './hero-styles.css';

const HeroSection = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
        renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <section className="hero">
      <div className="container d-xl-flex align-items-start">
        <div className="hero_about col-xl-6">
          <div className="hero_header">
            <h1 className="hero_header-title">Top Quality Natural Healing Solutions</h1>
            <p className="hero_header-text">
              Experience the power of natural healing with Sepil, our innovative wound care solution that effectively combats infections.
            </p>
            <a className="hero_header-btn btn" href="shop.html">Shop Now</a>
          </div>
          <div className="hero_contacts">
            <p className="hero_contacts-text">Our support team is available 24/7 to resolve any product issues</p>
            <span className="hero_contacts-data d-flex flex-column flex-sm-row align-items-center">
              <span className="icon d-flex align-items-center justify-content-center">
                <i className="icon-call"></i>
              </span>
              <span className="d-flex flex-column">
                <span>Phone number</span>
                <a className="link" href="tel:+919877668459">+91-98776-68459</a>
              </span>
            </span>
          </div>
        </div>
        <div className="hero_promo col-xl-6">
          <div className="hero_promo-underlay"></div>
          <div className="hero_promo-underlay--highlight"></div>
          <div className="hero_slider swiper">
            <div className="swiper-wrapper">
              <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                <div className="hero_slider-slide_media">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img src="img/placeholder.jpg" alt="media" />
                  </picture>
                </div>
                <div className="hero_slider-slide_main">
                  <h2 className="title">Sepil</h2>
                  <p className="text">Effective solution for everyday use</p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Effective Solution
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Dosage: 50-100mg
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      For General Use
                    </li>
                  </ul>
                  <a className="btn--underline" href="#">About Product</a>
                </div>
              </div>
              {/* Additional slides for Sepil Plus and Sepilvet can be similarly added */}
            </div>
            <div className="hero-pagination swiper-pagination d-sm-flex flex-column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
