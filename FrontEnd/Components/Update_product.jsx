import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectItems, updateProduct } from "../Features/Counter";

import "./UpdateProductForm.css";
import axios from "axios";

const UpdateProductForm = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectItems);

  // Find product using ID from URL
  const product = items.find((item) => item._id === id);



  // Initialize form data state
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    qty: "",
    description: "",
  });

  // Load product data when component mounts
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        qty: product.qty || "",
        description: product.description || "",
      });
    }
  }, [product]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // uupdate by hanc=dle click function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:5000/api/products/${id}`;
    try {
      const res = await axios.put(url, formData);
      console.log("Updated:", res.data);
      navigate("/productlist"); // Navigate back to product list
    } catch (err) {
      console.error("Update failed:", err);
    }
  };



  return (
    <div className="form-container">
      <h2 className="title">Update Product</h2>

      <form onSubmit={handleSubmit} className="form-card">
        <div className="form-header">Selected Product</div>

        <input
          type="text"
          name="name"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          className="input-field"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="qty"
          className="input-field"
          value={formData.qty}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="textarea"
          value={formData.description}
          onChange={handleChange}
        />


        <button className="update-btn">Update</button>


      </form>
    </div>
  );
};

export default UpdateProductForm;
