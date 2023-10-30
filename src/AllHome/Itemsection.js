import React from "react";

function Itemsection() {
  return (
    <div>
      <div className="item_section layout_padding2">
        <div className="container">
          <div className="item_container">
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-1.png" alt="" />
              </div>
              <div className="name">
                <h5>Bracelet</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-2.png" alt="" />
              </div>
              <div className="name">
                <h5>Ring</h5>
              </div>
            </div>
            <div className="box">
              <div className="price">
                <h6>Best PRICE</h6>
              </div>
              <div className="img-box">
                <img src="images/i-3.png" alt="" />
              </div>
              <div className="name">
                <h5>Earings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemsection;
