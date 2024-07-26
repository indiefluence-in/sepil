import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';

export default function Header() {
    const [isPinned, setIsPinned] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const header = document.querySelector('.header');
        const menu = document.querySelector('.header_nav');
        const menuTrigger = document.querySelector('.header_trigger');
        const dropdownElems = document.querySelectorAll('.dropdown');
        const triggers = document.querySelectorAll('.dropdown-toggle');
        const menuLists = document.querySelectorAll('.dropdown-menu');

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
        };

        const closeMenu = () => {
            menuTrigger.classList.remove('active');
            menu.classList.remove('active');
            header.classList.remove('opened');
            document.documentElement.classList.remove('fixed');
        };

        const setActivePageClass = () => {
            const menuListItems = document.querySelectorAll('.header_nav-list_item');
            menuListItems.forEach((item) => {
                if (item.querySelector('a').getAttribute('href') === window.location.pathname) {
                    item.classList.add('active');
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

        setActivePageClass();
        setDropdownMenu();

        return () => {
            menuTrigger.removeEventListener('click', toggleMenu);
            window.removeEventListener('scroll', makeNavSticky);
            window.removeEventListener('resize', closeMenu);
            window.removeEventListener('resize', setDropdownMenu);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header d-flex flex-wrap align-items-center ${isPinned ? 'header--pinned' : 'header--unpinned'}`} data-page="home" data-overlay="true">
            <div className="container d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
                <a className="brand header_logo d-flex align-items-center" href="index.html">
                    <img src={logo} alt="Logo" className="logo" />
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
    );
}
