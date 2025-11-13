import React, { useEffect, useState } from "react";
import "./TrackingPage.css";

import Header from "../components/Header";
import { Link, useParams } from "react-router";
import axios from "axios";
import OrderDetailGrid from "./orders/OrderDetailGrid";
import dayjs from "dayjs";

function TrackingPage({cart}) {
  const [order, setOrder] = useState(null)
  const {orderId, productId} = useParams()
  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get(`http://localhost:3000/api/orders/${orderId}?expand=products`)
      setOrder(response.data)
    }
    getOrderData()
  }, [orderId])

  const orderProduct = order?.products?.find((productItemId) => {
      return productItemId.productId === productId
  })

  const totalDeliveryTimeMs = orderProduct?.estimatedDeliveryTimeMs - order?.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order?.orderTimeMs
  const deliveryPercentage = (timePassedMs/totalDeliveryTimeMs) * 100
  // HERE CHANGE THE TITLE PREPARING SHIPPED DELIVERED USING CLASSNAME


  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <title>Tracking</title>
      
      <Header cart={cart}/>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>
          
          <div className="delivery-date">Arriving on {dayjs(orderProduct?.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</div>

          <div className="product-info">
            {orderProduct?.product?.name}
          </div>

          <div className="product-info">Quantity: {orderProduct?.quantity}</div>

          <img
            className="product-image"
            src={`/${orderProduct?.product?.image}`}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${deliveryPercentage}%`}}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
