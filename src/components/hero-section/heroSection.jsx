import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './styles.css'; 

const HeroSection = () => {
  useEffect(() => {
    const setPromoPadding = () => {
      const containerEl = document.querySelector('.container');
      const promoEl = document.querySelector('.promo_fluid');
      const offset = parseFloat(getComputedStyle(containerEl).marginLeft) + parseFloat(getComputedStyle(containerEl).paddingLeft);

      if (promoEl) {
        promoEl.style.paddingLeft = promoEl.style.paddingRight = window.innerWidth >= 1400 ? `${offset}px` : '';
      }
    };

    const initSwiperSlider = (container, options) => {
      const containerEl = document.querySelector(container);
      if (containerEl) {
        new Swiper(container, {
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          navigation: true,
          ...options,
        });
      }
    };

    const generateNumericPagination = (parent) => {
      document.querySelectorAll(`${parent} .swiper-pagination-bullet`).forEach((el, i) => {
        el.textContent = i < 9 ? `0${i + 1}` : `${i + 1}`;
      });
    };

    const resizeHandler = () => {
      setPromoPadding();
    };

    window.addEventListener('resize', resizeHandler);
    setPromoPadding();

    initSwiperSlider('.hero_slider', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
      },
    });

    generateNumericPagination('.hero-pagination');

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <section className="hero h">
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
              <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                <div className="hero_slider-slide_media">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img src="img/placeholder.jpg" alt="media" />
                  </picture>
                </div>
                <div className="hero_slider-slide_main">
                  <h2 className="title">Sepil Plus</h2>
                  <p className="text">Enhanced formula for advanced needs</p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Enhanced Solution
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Dosage: 75-150mg
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      For Advanced Use
                    </li>
                  </ul>
                  <a className="btn--underline" href="#">About Product</a>
                </div>
              </div>
              <div className="hero_slider-slide d-flex flex-column flex-md-row justify-content-between justify-content-md-start align-items-md-center swiper-slide">
                <div className="hero_slider-slide_media">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img src="img/placeholder.jpg" alt="media" />
                  </picture>
                </div>
                <div className="hero_slider-slide_main">
                  <h2 className="title">Sepilvet</h2>
                  <p className="text">Veterinary-specific formulation</p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Veterinary Solution
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      Dosage: 50-100mg
                    </li>
                    <li className="list-item d-flex align-items-center justify-content-center justify-content-sm-start">
                      <span className="icon d-flex align-items-center justify-content-center"><i className="icon-check"></i></span>
                      For Veterinary Use
                    </li>
                  </ul>
                  <a className="btn--underline" href="#">About Product</a>
                </div>
              </div>
            </div>
            <div className="hero-pagination swiper-pagination d-sm-flex flex-column"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
