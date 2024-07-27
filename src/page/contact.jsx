import React from 'react';

export default function Contact() {
  return (
    <>
      <header className="page">
        <div className="page_main container-fluid">
          <div className="container">
            <h1 className="page_header">Contacts</h1>
          </div>
        </div>
        <div className="container">
          <ul className="page_breadcrumbs d-flex flex-wrap">
            <li className="page_breadcrumbs-item">
              <a className="link" href="index.html">Home</a>
            </li>
            <li className="page_breadcrumbs-item current">
              <span>Contacts</span>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="contacts section">
          <div className="container d-flex flex-wrap flex-xl-nowrap justify-content-between">
            <div className="contacts_form col-12 col-lg-5">
              <div className="contacts_form-header">
                <h2 className="contacts_form-header_title">Have any Questions?</h2>
                <p className="contacts_form-header_text">
                  Please take a moment to share your need, desire, problem or any information you want from us by completing the below form so that we can refer the right information to you.
                </p>
              </div>
              <form className="contacts_form-form d-flex flex-column" data-type="feedback" method="post">
                <label className="contacts_form-form_label" htmlFor="contactsName">Your Name</label>
                <input
                  className="contacts_form-form_field field required"
                  type="text"
                  name="contactsName"
                  id="contactsName"
                  placeholder="Your name"
                />
                <label className="contacts_form-form_label" htmlFor="contactsEmail">Your Email</label>
                <input
                  className="contacts_form-form_field field required"
                  type="text"
                  data-type="email"
                  name="contactsEmail"
                  id="contactsEmail"
                  placeholder="you@example.com"
                />
                <label className="contacts_form-form_label" htmlFor="contactsMessage">Message</label>
                <textarea
                  className="contacts_form-form_field field required"
                  data-type="message"
                  name="contactsMessage"
                  id="contactsMessage"
                  placeholder="Type Your Message"
                ></textarea>
                <button className="contacts_form-form_btn btn" type="submit">Send a Message</button>
              </form>
            </div>
            <div className="contacts_info col-12 col-lg-6 col-xl-auto flex-xl-grow-1">
              <div className="contacts_info-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.986609697015!2d73.01681301490161!3d19.04976998710515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf6ab6ec9e47%3A0xdbc7f62f53557956!2sGami%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1690823454321!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>

              <ul className="contacts_info-list">
                <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="icon-mail"></i>
                  </span>
                  <div className="main d-flex flex-column">
                    <a className="link" href="mailto:buenosinternational@gmail.com">buenosinternational@gmail.com</a>
                  </div>
                </li>
                <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="icon-whatsapp"></i>
                  </span>
                  <div className="main d-flex flex-column">
                    <a className="link" href="https://wa.me/919877668549" target="_blank" rel="noopener noreferrer">+91-98776-68549</a>
                  </div>
                </li>
                <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="icon-location"></i>
                  </span>
                  <div className="main d-flex flex-column">
                    <span>Shop No. 79, Third Floor, Gami Industrial Park C-39A, S Central Road,</span>
                    <span>TTC Industrial Area, MIDC Industrial Area, Pawne,</span>
                    <span>Navi Mumbai Maharashtra - 400705.</span>
                  </div>
                </li>
                <li className="contacts_info-list_item d-flex flex-column flex-sm-row align-items-center">
                  <span className="icon d-flex justify-content-center align-items-center">
                    <i className="icon-envelope_open"></i>
                  </span>
                  <div className="main d-flex flex-column">
                    <a className="link" href="mailto:herbalist@cannabis.site">herbalist@cannabis.site</a>
                    <a className="link" href="mailto:herbalist@test.site">herbalist@test.site</a>
                  </div>
                </li>
              </ul>
              <ul className="contacts_info-socials d-flex align-items-center justify-content-center justify-content-sm-start">
                <li className="list-item">
                  <a className="link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook icon"></i>
                  </a>
                </li>
                <li className="list-item">
                  <a className="link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-instagram icon"></i>
                  </a>
                </li>
                <li className="list-item">
                  <a className="link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-twitter icon"></i>
                  </a>
                </li>
                <li className="list-item">
                  <a className="link" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-whatsapp icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
