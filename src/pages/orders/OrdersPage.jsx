import React, { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./OrdersPage.css";
import Header from "../../components/Header";
import { Link } from "react-router";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import OrderDetailGrid from "./OrderDetailGrid";
import OrdersGrid from "./OrdersGrid";

function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/orders?expand=products"
      );
      setOrders(response.data);
    };
    fetchOrderData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <OrdersGrid orders={orders} loadCart={loadCart}/>
    </>
  );
}

export default OrdersPage;
