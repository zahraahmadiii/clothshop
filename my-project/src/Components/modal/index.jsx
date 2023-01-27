import React from "react";
import "./style.css";

function Modal({ modalInfo, onAddToCard, setShowModal }) {
  return (
    <div className="modal">
      <div className="mains">
        <div className="section-left">
          <img src={modalInfo.img} />
        </div>
        <div className="section-right">
          <div className="title">
            <p>{modalInfo.title}</p>
            <button onClick={() => setShowModal(false)}>x</button>
          </div>
          <div className="des">
            <p>{modalInfo.desc}</p>
          </div>
          <div className="addto">
            <p>Price : ${modalInfo.price}</p>
            <button
              onClick={() => {
                onAddToCard(modalInfo);
                setShowModal(false);
              }}
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
