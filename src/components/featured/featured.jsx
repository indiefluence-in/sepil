import React from 'react';
import './featured.css'; // Import the CSS file

const FeaturedSection = () => {
  return (
    <section className="featured section--nopb">
      <div className="container">
        <div className="featured_header">
          <h2 className="featured_header-title">Featured Products</h2>
          <p className="featured_header-text">
            Discover our top-rated products that have revolutionized wound care with their innovative formulations and proven efficacy.
          </p>
        </div>
        <div className="products_list d-grid">
          <div className="products_list-item">
            <div className="products_list-item_wrapper d-flex flex-column">
              <div className="media">
                <a href="product.html" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img className="lazy preview" src="img/placeholder.jpg" alt="Sepil" />
                  </picture>
                </a>
                <div className="overlay d-flex justify-content-between align-items-start">
                  <div className="action d-flex flex-column">
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-trigger="compare">
                      <i className="icon-compare"></i>
                    </a>
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-role="wishlist">
                      <i className="icon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="main d-flex flex-column align-items-center justify-content-between">
                <div className="main_rating">
                  <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star"></i>
                    </li>
                  </ul>
                </div>
                <a className="main_title" href="product.html" target="_blank" rel="noopener noreferrer">Sepil</a>
                <ul className="main_table d-flex flex-column align-items-center">
                  <li className="list-item">
                    <span className="property">Dosage</span>
                    <span className="value">50-100mg</span>
                  </li>
                  <li className="list-item">
                    <span className="property">Usage</span>
                    <span className="value">For General Use</span>
                  </li>
                </ul>
                <div className="main_price">
                  <span className="price">$9.99</span>
                </div>
                <a className="btn btn--green" href="#">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="products_list-item">
            <div className="products_list-item_wrapper d-flex flex-column">
              <div className="media">
                <a href="product.html" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img className="lazy preview" src="img/placeholder.jpg" alt="Sepil Plus" />
                  </picture>
                </a>
                <div className="overlay d-flex justify-content-between align-items-start">
                  <div className="action d-flex flex-column">
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-trigger="compare">
                      <i className="icon-compare"></i>
                    </a>
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-role="wishlist">
                      <i className="icon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="main d-flex flex-column align-items-center justify-content-between">
                <div className="main_rating">
                  <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star"></i>
                    </li>
                  </ul>
                </div>
                <a className="main_title" href="product.html" target="_blank" rel="noopener noreferrer">Sepil Plus</a>
                <ul className="main_table d-flex flex-column align-items-center">
                  <li className="list-item">
                    <span className="property">Dosage</span>
                    <span className="value">75-150mg</span>
                  </li>
                  <li className="list-item">
                    <span className="property">Usage</span>
                    <span className="value">For Advanced Use</span>
                  </li>
                </ul>
                <div className="main_price">
                  <span className="price">$14.99</span>
                </div>
                <a className="btn btn--green" href="#">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="products_list-item">
            <div className="products_list-item_wrapper d-flex flex-column">
              <div className="media">
                <a href="product.html" target="_blank" rel="noopener noreferrer">
                  <picture>
                    <source srcSet="img/placeholder.jpg" type="image/webp" />
                    <img className="lazy preview" src="img/placeholder.jpg" alt="SepVet" />
                  </picture>
                </a>
                <div className="overlay d-flex justify-content-between align-items-start">
                  <div className="action d-flex flex-column">
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-trigger="compare">
                      <i className="icon-compare"></i>
                    </a>
                    <a className="action_link d-flex align-items-center justify-content-center" href="#" data-role="wishlist">
                      <i className="icon-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="main d-flex flex-column align-items-center justify-content-between">
                <div className="main_rating">
                  <ul className="main_rating-stars d-flex align-items-center justify-content-center accent">
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star_fill"></i>
                    </li>
                    <li className="main_rating-stars_star">
                      <i className="icon-star"></i>
                    </li>
                  </ul>
                </div>
                <a className="main_title" href="product.html" target="_blank" rel="noopener noreferrer">SepVet</a>
                <ul className="main_table d-flex flex-column align-items-center">
                  <li className="list-item">
                    <span className="property">Dosage</span>
                    <span className="value">50-100mg</span>
                  </li>
                  <li className="list-item">
                    <span className="property">Usage</span>
                    <span className="value">For Veterinary Use</span>
                  </li>
                </ul>
                <div className="main_price">
                  <span className="price">$11.99</span>
                </div>
                <a className="btn btn--green" href="#">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <a className="featured_btn btn" href="shop.html">All Products</a>
      </div>
    </section>
  );
};

export default FeaturedSection;
