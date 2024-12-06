import React from "react";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Review from "./Review";
import Services from "./Services";
import USP from "./USP";
import WhyChooseUs from "./WhyChooseUs";
import Working from "./Working";

const Template = ({ data }) => {
  const {
    niche,
    businessName,
    emailBusiness,
    content,
    images = [],
  } = data || {};

  const {
    reviews = [],
    uspContent = [],
    photoContent = [],
    faqContent = [],
  } = content || {};

  return (
    <div className="font-poppins">
      <Navbar businessName={businessName} />
      <Hero niche={niche} images={images} />
      <Review businessName={businessName} reviews={reviews} />
      <WhyChooseUs businessName={businessName} images={images} niche={niche} />
      <Services images={images} />
      <USP uspContent={uspContent} businessName={businessName} niche={niche} />
      <Gallery
        photoContent={photoContent}
        businessName={businessName}
        images={images}
      />
      <Working businessName={businessName} />
      <FAQ businessName={businessName} faqContent={faqContent} />
      <Contact businessName={businessName} />
      <Footer emailBusiness={emailBusiness} businessName={businessName} />
    </div>
  );
};

export default Template;
