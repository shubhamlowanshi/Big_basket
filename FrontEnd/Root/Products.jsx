import React, { useEffect } from "react";
import "./Products.css";
import { useSelector } from "react-redux";
import { selectItems } from "../Features/Counter";
import axios from 'axios'
import { useState } from "react";
const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    let url = "http://127.0.0.1:5000/api/products";
    axios
      .get(url)
      .then((res) => {
        setproducts(res.data.products);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="products-container">

      <h2 className="products-title">Products Page</h2>
      <span className="products-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        tempora non quos omnis dicta earum necessitatibus doloremque eveniet
        nemo, debitis, voluptas at possimus odio ea. Alias tempore odio ullam
        esse!
      </span>

      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div
                className="card"
                key={product._id}
                style={{ width: "14rem" }}
              >
                <img
                  height={250} width={90}
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Name : { }
                    {product.name}
                  </li>
                  <li className="list-group-item">
                    Price : ₹{product.price}
                  </li>
                  <li className="list-group-item">
                    Qty : {product.qty}
                  </li>
                </ul>
              </div>
            );
          })
        ) : (
          <pre>loading</pre>
        )}
      </div>
    </div>
  );
};

export default Products;
