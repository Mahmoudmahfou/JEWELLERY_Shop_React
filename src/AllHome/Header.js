/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

function Header() {
  const {cartTotal,totalUniqueItems}=useCart();
  return (
    <CartProvider>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
              <img src="images/logo.png" alt="" />
              <span>Jewellery</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <Link className="nav-link text success" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      {" "}
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/jewellery">
                      Jewellery shop{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container ">
                <Link to="/cart">
                  <img src="images/cart.png" alt="" />
                  <div className="cart_number">{totalUniqueItems}</div>
                </Link>
                $ {cartTotal}
                <form className="form-inline pl-2">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"></button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </CartProvider>
  );
}

export default Header;
