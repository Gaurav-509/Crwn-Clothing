const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");


router.route("/").get(getAllCategories).post(createCategory);
router.route("/:id").get(getCategoryById).put(updateCategory).delete(deleteCategory);

module.exports = router;