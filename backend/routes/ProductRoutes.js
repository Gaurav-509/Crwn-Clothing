const express = require("express");

const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getAllProductsOnCategoryName,
  getProductAggregationController
} = require("../controllers/ProductController");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);
router.route("/shop/:categoryName").get(getAllProductsOnCategoryName);
router.route("/all/shop-menu").get(getProductAggregationController);

module.exports = router;