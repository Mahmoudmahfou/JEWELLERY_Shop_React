/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderSection from "./HeaderSection";
import Footer from "../AllHome/Footer";
import { CartProvider } from "react-use-cart";

function AllAbout() {
  return (
    <CartProvider>
      <HeaderSection />
      <section className="about_section layout_padding2-top layout_padding-bottom">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Jewellery Shop</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud
                </p>
                <div>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </CartProvider>
  );
}

export default AllAbout;
