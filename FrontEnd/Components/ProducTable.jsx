
import { Link } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, updateItemQuantity, removeItem } from "../Features/Counter";
import "./ProductTable.css";

const ProductTable = () => {



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


  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const updateQuantity = (id, delta) => {
    dispatch(updateItemQuantity({ id, delta }));
  };





  const deleteProduct = async (id) => {
    try {
      const url = `http://127.0.0.1:5000/api/products/${id}`;
      await axios.delete(url);
      console.log("Product deleted");


      setproducts(prev => prev.filter(product => product._id !== id));


      dispatch(removeItem(id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };
  let handleSubmit = async (e) => {
    e.preventDefault()
    const url = (`http://127.0.0.1:5000/api/products/${id}`, formData);
    axios.put(url)
      .then((res) => {
        console.log(res.data.formData)
      })
      .catch((err) => {
        console.log(err)
      })
  }




  return (
    <div className="container">
      <h2 className="title">Product Details</h2>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/Createnew">
        <button className="create-btn">CREATE NEW</button>
      </Link>
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>SNO</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.image} alt={product.name} className="product-img" />
                  </td>
                  <td>{product.name}</td>
                  <td>₹{product.price * product.qty}.00</td>
                  <td>
                    <button onClick={() => updateQuantity(product._id, -1)}>-</button>
                    {product.qty}
                    <button onClick={() => updateQuantity(product._id, 1)}>+</button>
                  </td>
                  <td>
                    <Link to={`/update/${product._id}`}><button className="update-btn">UPDATE</button></Link>


                    <button className="delete-btn" onClick={() => deleteProduct(product._id)}>DELETE</button>

                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
