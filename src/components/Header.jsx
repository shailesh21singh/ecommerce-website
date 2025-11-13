import React, { useState } from "react";
import "./Header.css"
import { NavLink, useNavigate } from "react-router";


function Header({cart}) {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("")
  let totalQuantity = 0
  cart && (
    cart.forEach((cartItem) => {
      totalQuantity = totalQuantity + cartItem.quantity;
    }))

    const handleSearch = (event) => {
      setSearchText(event.target.value)
      if(event.key === "Enter"){
        navigate(`/?search=${searchText}`)
        setSearchText("")
      }
    }

    const handleSearchButton = () => {
      navigate(`/?search=${searchText}`)
      setSearchText("")
    }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={"/images/logo-white.png"} />
          <img className="mobile-logo" src={"/images/mobile-logo-white.png"} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input 
          className="search-bar" 
          type="text" 
          placeholder="Search" 
          value={searchText}
          onChange={handleSearch}
          onKeyDown={handleSearch}
        />
        <button className="search-button" onClick={handleSearchButton}>
          <img className="search-icon" src={"/images/icons/search-icon.png"} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>
        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={"/images/icons/cart-icon.png"} alt="cart logo" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
