import axios from "axios";
import dayjs from "dayjs";
import React, { Fragment } from "react";
import { Link } from "react-router";

function OrderDetailGrid({ order, loadCart }) {
  return (
    <div className="order-details-grid">
      {order?.products?.map((orderproduct) => {
        const addToCart = async () => {
          await axios.post("http://localhost:3000/api/cart-items", {
            productId: orderproduct.product.id,
            quantity: 1,
          });
          await loadCart();
        };
        return (
          <Fragment key={orderproduct.product.id}>
            <div className="product-image-container">
              <img src={orderproduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{orderproduct.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(orderproduct?.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {orderproduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img
                  className="buy-again-icon"
                  src={"images/icons/buy-again.png"}
                />
                <span className="buy-again-message" onClick={addToCart}>
                  Add to Cart
                </span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderproduct.product.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default OrderDetailGrid;
