import dayjs from "dayjs";
import React from "react";
import DeliveryOptions from "./DeliveryOptions";
import ProductDetails from "./ProductDetails";
import DeliveryDate from "../../components/DeliveryDate";

function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {cart &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />
              <div className="cart-item-details-grid">
                
                <ProductDetails 
                  cartItem={cartItem}
                  loadCart={loadCart}
                />

                <DeliveryOptions 
                  deliveryOptions={deliveryOptions} 
                  cartItem={cartItem}
                  loadCart={loadCart}
                />

                
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
