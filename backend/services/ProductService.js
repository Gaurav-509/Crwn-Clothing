const ProductModel = require("../models/Product");

exports.getAllProducts = async () => {
  return await ProductModel.find();
};

exports.createProduct = async (product) => {
  return await ProductModel.create(product);
};

exports.getProductById = async (id) => {
  return await ProductModel.findById(id);
};

exports.updateProduct = async (id, product) => {
  return await ProductModel.findByIdAndUpdate(id, product);
};

exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};

exports.getProductByAggregate = async (category) => {
  return await ProductModel.aggregate([
    { $sort: { date: -1 } },
    {
      $group: {
        _id: "$category",
        items: { $push: "$$ROOT" },
      },
    },
    {
      $project: {
        items: { $slice: ["$items", 4] },
      },
    },
  ]);
}

exports.getProductBasedOnCategoryName = async (category) => {
  return await ProductModel.find({ category });
}

