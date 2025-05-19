const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const { body, validationResult } = require("express-validator");

// Get all Products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products, message: "All Products" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get single Product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete Product
router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ product, message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create Product   
router.post(
  "/products",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("image").notEmpty().withMessage("Image is required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("qty").notEmpty().withMessage("Quantity is required"),
    body("info").notEmpty().withMessage("Information is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        info: req.body.info,
      });

      product = await product.save();
      res.status(200).json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Update Product
router.put("/products/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const updatedProduct = {
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      qty: req.body.qty,
      info: req.body.info,
    };

    product = await Product.findByIdAndUpdate(req.params.id, { $set: updatedProduct }, { new: true });
    res.status(200).json({ message: `Updated product with id ${req.params.id}`, product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
