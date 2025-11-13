import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckoutHeader from "./CheckoutHeader";
import "./checkout.css";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

function CartPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
      response = await axios.get("http://localhost:3000/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);





  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/payment-summary"
      );
      setPaymentSummary(response.data);
    };
    fetchPaymentSummary();
  }, [cart]);
  return (
    <>
      <title>Checkout page</title>

      <CheckoutHeader cart={cart} />
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}

export default CartPage;
