import React, { useState } from "react";
import { formatMoney } from "../../utils/money";
import axios from "axios";

function ProductDetails({ cartItem, loadCart }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(
      `http://localhost:3000/api/cart-items/${cartItem.productId}`
    );
    await loadCart();
  };

  const handleUpdate = async () => {
    
    if(isUpdating){
      await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`,{
        quantity: Number(quantity)
      })
      await loadCart()
      setIsUpdating(false)
    }
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      handleUpdate()
    }

    if(event.key === "Escape"){
      setIsUpdating(cartItem.quantity)
      setIsUpdating(false)
    }
  }


  return (
    <>
      <img className="product-image" src={cartItem.product.image} />
      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            <span className="quantity-label">
              {isUpdating && (
                <input
                  type="text"
                  onChange={(event) => setQuantity(event.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
                  value={quantity}
                  style={{ width: "20px", marginRight: "5px" }}
                />
              )}
              {cartItem.quantity}
            </span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={() => {
              setIsUpdating(true);
              handleUpdate()
            }}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
