import React, { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money";
function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addToCart = async () => {
      await axios.post("http://localhost:3000/api/cart-items", {
        productId: product.id,
        quantity,
      });
      await loadCart();
      setAdded(true)

      // Hide it again after 1.5 seconds (optional)
      setTimeout(() => setAdded(false), 2000);
  };


  // Style based on `added` state
  const opacityStyle = {
    opacity: added ? 1 : 0,
    transition: "opacity 0.4s ease",
  };

  const selecQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  };
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.image}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
          alt={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={selecQuantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div className="product-spacer"></div>
      <div className="add-to-cart" style={opacityStyle}>
        <img
          className="add-to-cart-img"
          src={"images/icons/checkmark.png"}
          alt="check mark"
        />
        <span>Added</span>
      </div>

      <button className="add-to-cart-button button-primary" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
