/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import HeaderSection from "../AboutPage/HeaderSection";
import Footer from "../AllHome/Footer";
import { CartProvider } from "react-use-cart";

function Contact() {
  return (
    <CartProvider>
      <HeaderSection />
      <section className="contact_section layout_padding">
        <div className="design-box">
          <img src="images/design-2.png" alt="" />
        </div>
        <div className="container ">
          <div className="">
            <h2 className="h1">Contact Us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Message"
                  />
                </div>
                <div className="d-flex ">
                  <button>SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="300"
                    frameborder="0"
                    style={{border:'0', width: '100%', height:"100%"}}
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </CartProvider>
  );
}

export default Contact;
