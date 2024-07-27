import React from 'react';
import './about.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <section className="about section--nopb">
      <div className="container">
        <div className="about_main d-lg-flex justify-content-between">
          <div className="about_main-content col-lg-6 col-xl-auto">
            <h2 className="about_main-content_header">
              Our knowledgeable team can help you find the perfect Sepil product for your wound care needs. We provide expert guidance to ensure you receive the most effective treatment for diabetic wound infections, non-healing ulcers, burns, and more.
            </h2>
            <p className="about_main-content_text">
              Sepil is designed to combat infections caused by both Gram-positive and Gram-negative organisms, including critical pathogens like Acinetobacter, Pseudomonas, and MRSA. Its advanced oil formulation accelerates healing, reduces infection risks, and enhances patient comfort, making it an essential part of your wound care regimen. Trust in Sepil for innovative and reliable wound treatment solutions tailored to your unique requirements.
            </p>
          </div>
          <div className="about_main-media">
            <picture>
              <source srcSet="img/placeholder.jpg" type="image/webp" />
              <img className="lazy" src="img/placeholder.jpg" alt="About Us" />
            </picture>
          </div>
        </div>
        <ul className="about_numbers d-flex flex-wrap">
          <li className="about_numbers-group col-sm-6 col-lg-3" data-order="1">
            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
              <span className="countNum number d-flex align-items-center secondary" data-suffix="%" data-value="99">99%</span>
              <p className="number-label">Success rate in treating various wound infections, including diabetic wounds, non-healing ulcers, and burns.</p>
            </div>
          </li>
          <li className="about_numbers-group col-sm-6 col-lg-3" data-order="2">
            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
              <span className="countNum number d-flex align-items-center secondary" data-suffix="X Faster" data-value="3">3X Faster</span>
              <p className="number-label">Healing times compared to conventional wound care treatments, ensuring quicker recovery and improved patient outcomes.</p>
            </div>
          </li>
          <li className="about_numbers-group col-sm-6 col-lg-3" data-order="3">
            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
              <span className="countNum number d-flex align-items-center secondary" data-suffix="% Natural" data-value="100">100% Natural</span>
              <p className="number-label">Formulation, utilizing the power of natural ingredients to provide safe and effective wound care without adverse side effects.</p>
            </div>
          </li>
          <li className="about_numbers-group col-sm-6 col-lg-3" data-order="4">
            <div className="wrapper d-flex flex-column align-items-center align-items-sm-start">
              <span className="countNum number d-flex align-items-center secondary" data-suffix="K+" data-value="10">10K+</span>
              <p className="number-label">Satisfied patients and healthcare providers who have experienced the transformative benefits of Sepil.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
