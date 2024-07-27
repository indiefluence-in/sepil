import React from 'react';
import './sale.css'; // Import the CSS file

const categories = () => {
  return (
    <section className="sale section--nopb">
      <div className="container">
        <h2 className="featured_header-title" style={{ textAlign: 'center' }}>Categories</h2>
        <div className="sale_grid d-grid">
          <div className="sale_grid-item sale_grid-item--pm">
            <div className="sale_grid-item_bg">
              <picture>
                <source srcSet="img/placeholder.jpg" type="image/webp" />
                <img className="lazy" src="img/placeholder.jpg" alt="Wound Care for Humans" />
              </picture>
            </div>
            <div className="sale_grid-item_content d-flex flex-column justify-content-end">
              <h3 className="sale_grid-item_title">Wound Care for Humans</h3>
              <div className="wrapper d-flex flex-column">
                <span className="text">Sale up to 5%</span>
                <a className="btn--underline" href="shop.html">Shop now</a>
              </div>
            </div>
          </div>
          <div className="sale_grid-item sale_grid-item--am">
            <div className="sale_grid-item_bg">
              <picture>
                <source srcSet="img/placeholder.jpg" type="image/webp" />
                <img className="lazy" src="img/placeholder.jpg" alt="Veterinary Wound Care" />
              </picture>
            </div>
            <div className="sale_grid-item_content d-flex flex-column justify-content-end">
              <h3 className="sale_grid-item_title">Veterinary Wound Care</h3>
              <div className="wrapper d-flex flex-column">
                <span className="text">Sale up to 15%</span>
                <a className="btn--underline" href="shop.html">Shop now</a>
              </div>
            </div>
          </div>
          <div className="sale_grid-item sale_grid-item--medical">
            <div className="sale_grid-item_bg">
              <picture>
                <source srcSet="img/placeholder.jpg" type="image/webp" />
                <img className="lazy" src="img/placeholder.jpg" alt="Specialty Wound Treatments" />
              </picture>
            </div>
            <div className="sale_grid-item_content d-flex flex-column justify-content-end">
              <h3 className="sale_grid-item_title">Specialty Wound Treatments</h3>
              <div className="wrapper d-flex flex-column">
                <span className="text">Sale up to 20%</span>
                <a className="btn--underline" href="shop.html">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default categories;
