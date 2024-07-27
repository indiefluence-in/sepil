import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function Header() {
    const [isPinned, setIsPinned] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const header = document.querySelector('.header');
        const menu = document.querySelector('.header_nav');
        const menuTrigger = document.querySelector('.header_trigger');
        const dropdownElems = document.querySelectorAll('.dropdown');
        const triggers = document.querySelectorAll('.dropdown-toggle');
        const menuLists = document.querySelectorAll('.dropdown-menu');
        const links = document.querySelectorAll('.header_nav-list_item a');

        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setIsPinned(true);
            } else {
                setIsPinned(false);
            }
            setLastScrollY(window.scrollY);
        };

        const toggleMenu = () => {
            menuTrigger.classList.toggle('active');
            menu.classList.toggle('active');
            header.classList.add('sticky', 'opened');
            document.documentElement.classList.toggle('fixed');
            setIsMenuOpen(!isMenuOpen);
        };

        const closeMenu = () => {
            menuTrigger.classList.remove('active');
            menu.classList.remove('active');
            header.classList.remove('opened');
            document.documentElement.classList.remove('fixed');
            setIsMenuOpen(false);
        };

        const setActivePageClass = () => {
            const menuListItems = document.querySelectorAll('.header_nav-list_item');
            menuListItems.forEach((item) => {
                const link = item.querySelector('a');
                if (link && link.pathname === location.pathname) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        const setDropdownMenu = () => {
            triggers.forEach((el, i) => {
                const handleDropdownToggle = () => {
                    el.classList.toggle('active');
                    menuLists[i].classList.toggle('active');
                };

                if (window.innerWidth < 1200) {
                    el.style.pointerEvents = 'unset';
                    el.dataset.bsToggle = 'collapse';
                    menuLists[i].classList.add('collapse');
                    el.addEventListener('click', handleDropdownToggle);
                } else {
                    el.dataset.bsToggle = 'dropdown';
                    el.style.pointerEvents = 'none';
                    menuLists[i].classList.remove('collapse');
                }
            });

            dropdownElems.forEach((el) => {
                const trigger = el.querySelector('a[data-bs-toggle]');
                const menu = trigger.nextElementSibling;

                el.addEventListener('mouseover', () => {
                    trigger.classList.add('active');
                    menu.classList.add('active');
                });

                el.addEventListener('mouseleave', () => {
                    trigger.classList.remove('active');
                    menu.classList.remove('active');
                });
            });
        };

        const makeNavSticky = () => {
            const nextEl = header.nextElementSibling;

            if (window.pageYOffset > 0 || menuTrigger.classList.contains('active')) {
                header.classList.add('sticky');
                nextEl.style.paddingTop = window.innerWidth < 1200 ? '60px' : '140px';
            } else {
                header.classList.remove('sticky');
                nextEl.style.paddingTop = '0px';
            }
        };

        menuTrigger.addEventListener('click', toggleMenu);
        window.addEventListener('scroll', makeNavSticky);
        window.addEventListener('resize', closeMenu);
        window.addEventListener('resize', setDropdownMenu);
        window.addEventListener('scroll', handleScroll);
        links.forEach((link) => link.addEventListener('click', closeMenu));

        setActivePageClass();
        setDropdownMenu();

        return () => {
            menuTrigger.removeEventListener('click', toggleMenu);
            window.removeEventListener('scroll', makeNavSticky);
            window.removeEventListener('resize', closeMenu);
            window.removeEventListener('resize', setDropdownMenu);
            window.removeEventListener('scroll', handleScroll);
            links.forEach((link) => link.removeEventListener('click', closeMenu));
        };
    }, [lastScrollY, location.pathname]);

    return (
        <header className={`header d-flex flex-wrap align-items-center ${isPinned ? 'header--pinned' : 'header--unpinned'}`} data-page="home" data-overlay="true">
            <div className="container d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
                <Link className="brand header_logo d-flex align-items-center" to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <nav className="header_nav">
                    <ul className="header_nav-list">
                        {isMenuOpen && (
                            <li className="header_nav-list_item">
                                <Link className="nav-link d-inline-flex align-items-center" to="/">
                                    Home
                                </Link>
                            </li>
                        )}
                        <li className="header_nav-list_item">
                            <Link className="nav-link d-inline-flex align-items-center" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="header_nav-list_item">
                            <Link className="nav-link d-inline-flex align-items-center" to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li className="header_nav-list_item">
                            <Link className="nav-link d-inline-flex align-items-center" to="/review">
                                Reviews
                            </Link>
                        </li>
                        <li className="header_nav-list_item">
                            <Link className="nav-link d-inline-flex align-items-center" to="/contacts">
                                Contact Us
                            </Link>
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
                    <Link className="header_user-action d-inline-flex align-items-center justify-content-center" to="/wishlist">
                        <i className="icon-heart"></i>
                    </Link>
                    <Link
                        className="header_user-action d-inline-flex align-items-center justify-content-center"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartOffcanvas"
                        aria-controls="cartOffcanvas"
                    >
                        <i className="icon-basket"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}
