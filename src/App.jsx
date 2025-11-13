import { Route, Routes } from "react-router";
import "./App.css";
import axios from "axios";
import HomePage from "./pages/home/HomePage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  const loadCart = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/cart-items?expand=product"
    );
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/> } />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
        <Route
          path="tracking/:orderId/:productId"
          element={<TrackingPage cart={cart} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
