import React from 'react';
import './styles.css'; // Import the CSS file

const EffectsSection = () => {
  return (
    <section className="effects section--nopb">
      <span className="effects_underlay">
        <span className="effects_underlay-circle effects_underlay-circle--accent"></span>
        <span className="effects_underlay-circle effects_underlay-circle--green"></span>
      </span>
      <div className="container d-md-flex flex-wrap flex-xxl-nowrap justify-content-between align-items-center">
        <div className="effects_header d-lg-flex flex-xxl-column col-md-12 col-xxl-auto">
          <div className="main col-lg-6 col-xl-12">
            <h2 className="effects_header-title">Therapeutic Effects of Sepil</h2>
            <p className="effects_header-text">
              Sepil accelerates wound healing and reduces infection risks. Its oil formulation combats infections effectively, promoting faster recovery. Sepil's advanced therapeutic properties ensure enhanced patient comfort and superior healing outcomes for various types of wounds.
            </p>
            <a className="effects_header-btn btn" href="shop.html">Our Products</a>
          </div>
          <span className="effects_header-formula col-lg-6 col-xl-12">
            <svg width="281" height="157" viewBox="0 0 281 157" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG content here */}
            </svg>
          </span>
        </div>
        <div className="effects_media">
          <picture>
            <source srcSet="img/placeholder.jpg" type="image/webp" />
            <img className="lazy" src="img/placeholder.jpg" alt="media" />
          </picture>
        </div>
        <ul className="effects_list col-xxl-4">
          <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start" data-aos="fade-up">
            <span className="icon d-flex align-items-center justify-content-center">
              <i className="icon-flash"></i>
            </span>
            <div className="wrapper">
              <h4 className="effects_list-item_header">Relief of Chronic Pain</h4>
              <p className="effects_list-item_text">Sepil alleviates chronic pain from wounds, enhancing patient comfort.</p>
            </div>
          </li>
          <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start" data-aos="fade-up">
            <span className="icon d-flex align-items-center justify-content-center">
              <i className="icon-heartbeat"></i>
            </span>
            <div className="wrapper">
              <h4 className="effects_list-item_header">Effective Against Infections</h4>
              <p className="effects_list-item_text">Sepil combats infections, including MRSA, for faster healing.</p>
            </div>
          </li>
          <li className="effects_list-item d-flex flex-column align-items-center flex-sm-row align-items-sm-start" data-aos="fade-up">
            <span className="icon d-flex align-items-center justify-content-center">
              <i className="icon-head"></i>
            </span>
            <div className="wrapper">
              <h4 className="effects_list-item_header">Supports Mental Well-being</h4>
              <p className="effects_list-item_text">Sepil reduces pain and stress, promoting mental well-being.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EffectsSection;
