import React from 'react'
import logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <>
            <header className="header d-flex flex-wrap align-items-center" data-page="home" data-overlay="true">
                <div className="container d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
                    <a className="brand header_logo d-flex align-items-center" href="index.html">
                        <img src={logo} alt="" className="logo" />
                    </a>
                    <nav className="header_nav">
                        <ul className="header_nav-list">
                            <li className="header_nav-list_item">
                                <a className="nav-link d-inline-flex align-items-center" href="about.html">
                                    About
                                </a>
                            </li>
                            <li className="header_nav-list_item">
                                <a className="nav-link d-inline-flex align-items-center" href="shop.html">
                                    Shop
                                </a>
                            </li>
                            <li className="header_nav-list_item">
                                <a className="nav-link d-inline-flex align-items-center" href="review.html">
                                    Reviews
                                </a>
                            </li>
                            <li className="header_nav-list_item">
                                <a className="nav-link d-inline-flex align-items-center" href="contacts.html">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <span className="header_trigger d-inline-flex d-xl-none flex-column justify-content-between">
                        <span className="line line--short"></span>
                        <span className="line line"></span>
                        <span className="line line--short"></span>
                        <span className="line line"></span>
                    </span>
                    <div className="header_user d-flex justify-content-end align-items-center">
                        <form className="header_user-search" action="#" method="get" data-type="searchForm">
                            <input className="header_user-search_field field required" type="text" placeholder="Search..." />
                            <button
                                className="header_user-search_btn header_user-action d-inline-flex align-items-center justify-content-center"
                                type="submit"
                                data-trigger="search"
                            >
                                <i className="icon-search"></i>
                            </button>
                        </form>
                        <a className="header_user-action d-inline-flex align-items-center justify-content-center" href="wishlist.html">
                            <i className="icon-heart"></i>
                        </a>
                        <a
                            className="header_user-action d-inline-flex align-items-center justify-content-center"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                            aria-controls="cartOffcanvas"
                        >
                            <i className="icon-basket"></i>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
