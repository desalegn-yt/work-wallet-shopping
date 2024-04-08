import React from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai';

const Shop = ({shop, Filter, allCateFilter, addToCart}) => {
  return (
    <>
      <div className="shop">
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allCateFilter()}># All</li>
                  <li onClick={() => Filter("tv")}># tv</li>
                  <li onClick={() => Filter("laptop")}># laptop</li>
                  <li onClick={() => Filter("watch")}># watch</li>
                  <li onClick={() => Filter("speaker")}># speaker</li>
                  <li onClick={() => Filter("electronics")}># electronics</li>
                  <li onClick={() => Filter("headphone")}># headphone</li>
                  <li onClick={() => Filter("phone")}># phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_left.avif" alt=""></img>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_top.webp" alt=""></img>
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((shopProd) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={shopProd.image} alt=""></img>
                          <div className="icon">
                            <li>
                              <AiFillHeart />
                            </li>
                            <li>
                              <AiFillEye />
                            </li>
                          </div>
                        </div>
                        <div className="detail">
                          <h3>{shopProd.Name}</h3>
                          <p>$ {shopProd.price}</p>
                          <button onClick={() => addToCart (shopProd)}>Add To Cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop