import React from 'react'

import './header.css'
import './HomePage.css'
import logoWhite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png"
import searchIcon from "../assets/images/icons/search-icon.png"
import cartIcon from "../assets/images/icons/cart-icon.png"
import athleticCottonSocks6pairs from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
import intermediateCompositeBasketBall from "../assets/images/products/intermediate-composite-basketball.jpg"
import adultPlainCottonTshirt2packTeal from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import SlotToasterWhite from "../assets/images/products/2-slot-toaster-white.jpg"
import rating45 from "../assets/images/ratings/rating-45.png"
import rating40 from "../assets/images/ratings/rating-40.png"
import rating50 from "../assets/images/ratings/rating-50.png"


import checkmark from "../assets/images/icons/checkmark.png"

const HomePage = () => {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href='#' className='header-link'>
            <img className="logo" src={logoWhite} />
            <img className='mobile-logo' src={mobileLogoWhite} />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type='text' placeholder='Search' />
          <button className='search-button'>
            <img className="search-icon" src={searchIcon} />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="#">
            <span className="orders-text">Orders</span>
          </a>
          <a className="cart-link header-link" href="#">
            <img  className="cart-icon" src={cartIcon} alt="cart logo" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div class="home-page">
        <div class="products-grid">
          <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={athleticCottonSocks6pairs} 
                alt="Athletic cotton socks 6 pairs" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                87
              </div>
            </div>

            <div className="product-price">
              $10.90
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>  

         
          <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={intermediateCompositeBasketBall} 
                alt="Intermediate composite basket ball" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Intermediate Size Basketball
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating40} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                127
              </div>
            </div>

            <div className="product-price">
              $20.95
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div> 

          <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={adultPlainCottonTshirt2packTeal} 
                alt="Adult plain cotton Tshirt pack teal" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                56
              </div>
            </div>

            <div className="product-price">
              $7.99
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={SlotToasterWhite} 
                alt="2 slot toaster white" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               2 Slot Toaster - White
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating50} alt="rating 50" />
              <div className='product-rating-count link-primary'>
                2197
              </div>
            </div>

            <div className="product-price">
              $18.99
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>





        





           <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={adultPlainCottonTshirt2packTeal} 
                alt="Adult plain cotton Tshirt pack teal" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                56
              </div>
            </div>

            <div className="product-price">
              $7.99
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>



           <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={adultPlainCottonTshirt2packTeal} 
                alt="Adult plain cotton Tshirt pack teal" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                56
              </div>
            </div>

            <div className="product-price">
              $7.99
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>


           <div className="product-container">
            <div className="product-image-container">
              <img 
                className="product-image" 
                src={adultPlainCottonTshirt2packTeal} 
                alt="Adult plain cotton Tshirt pack teal" 
              />
            </div>
           
            <div className="product-name limit-text-to-2-lines">
               Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} alt="rating 45" />
              <div className='product-rating-count link-primary'>
                56
              </div>
            </div>

            <div className="product-price">
              $7.99
            </div>

            <div className="product-quantity-container">
              <select>
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

             <div class="product-spacer"></div>
            <div className="add-to-cart">
              <img className="add-to-cart-img" src={checkmark} alt="check mark" />
              <span>Added</span>
            </div>

            <button className='add-to-cart-button button-primary'>
              Add to cart
            </button>
          </div>


          {/* <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="images/products/intermediate-composite-basketball.jpg" />
            </div>

            <div class="product-name limit-text-to-2-lines">
              Intermediate Size Basketball
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-40.png" />
              <div class="product-rating-count link-primary">
                127
              </div>
            </div>

            <div class="product-price">
              $20.95
            </div>

            <div class="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
            </div>

            <div class="product-name limit-text-to-2-lines">
              Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="images/ratings/rating-45.png" />
              <div class="product-rating-count link-primary">
                56
              </div>
            </div>

            <div class="product-price">
              $7.99
            </div>

            <div class="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default HomePage
