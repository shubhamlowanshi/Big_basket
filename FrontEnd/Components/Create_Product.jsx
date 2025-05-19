import React from "react";
import "./Createproduct.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductForm = () => {
  const navigate = useNavigate();

  const [products, setproducts] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: "",
  });

  // updateImage
  let updateImage = async (event) => {
    let imageFile = event.target.files[0];
    let base64Image = await convertBase64String(imageFile);
    setproducts({
      ...products,
      image: base64Image,
    });
  };

  let convertBase64String = (imageFile) => {
    return new Promise((resolve, reject) => {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile);
      fileReader.addEventListener("load", () => {
        if (fileReader.result) {
          resolve(fileReader.result);
        } else {
          reject("Error Occurred");
        }
      });
    });
  };

  let update = (e) => {
    setproducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  let dataSubmit = (e) => {
    e.preventDefault();
    let url = "http://127.0.0.1:5000/api/products";
    axios
      .post(url, products)
      .then((res) => {
        console.log("Data has been submitted successfully");
        setproducts(res.data.products);
        navigate("/products");
      })

      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div className="form-container">

      <h2 className="title">Create New Product</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="form-card">
        <h3 className="form-header">New Product</h3>
        <form onSubmit={dataSubmit}>
          <input onChange={update} value={products.value} name="name" type="text" placeholder="Product Name" className="input-field" />
          <div className="file-input-container">
            <input onChange={updateImage} type="file" name="image" className="file-input" />
            <button type="button" className="browse-btn">Browse</button>
          </div>
          <input onChange={update} name="price" type="text" placeholder="Price" className="input-field" />
          <input onChange={update} name="qty" type="text" placeholder="Available Qty" className="input-field" />
          <input onChange={update} name="info" type="text" placeholder="info" className="input-field" />
          <textarea placeholder="General Info" className="input-field textarea"></textarea>
          <div className="m-3">
            <input type="submit" value="submit" className="btn btn-sm btn-danger" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;