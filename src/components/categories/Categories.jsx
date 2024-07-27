import React from 'react'
import PlaceHolder from '../../assets/img/placeholder.jpg'

export default function Categories() {
    return (
        <section className="sale section--nopb">
            <div className="container">
                <h2 className="featured_header-title" style="text-align: center;">Categories</h2>
                <div className="sale_grid d-grid">
                    <div className="sale_grid-item sale_grid-item--pm">
                        <div className="sale_grid-item_bg">
                            <picture>
                                <source data-srcset={PlaceHolder} srcSet={PlaceHolder} type="image/webp" />
                                <img className="lazy" data-src={PlaceHolder} src={PlaceHolder} alt="media" />
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
                                <source data-srcset={PlaceHolder} srcSet={PlaceHolder} type="image/webp" />
                                <img className="lazy" data-src={PlaceHolder} src={PlaceHolder} alt="media" />
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
                                <source data-srcset={PlaceHolder} srcSet={PlaceHolder} type="image/webp" />
                                <img className="lazy" data-src={PlaceHolder} src={PlaceHolder} alt="media" />
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
    )
}
