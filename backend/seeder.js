const mongoose = require('mongoose');
const connectDB = require("./config/db");

const ProductModel = require("./models/Product");
const CategoryModel = require("./models/Category");

const { productsData } = require("./seed-data/products-data");

const { categoriesData } = require("./seed-data/category-data");


const importData = async () => {
  connectDB();
  try {
    // Delete All Data
    await ProductModel.deleteMany();
    await CategoryModel.deleteMany();

    console.log(productsData)
    console.log(categoriesData)
    // Import All Data
    await ProductModel.insertMany(productsData);
    await CategoryModel.insertMany(categoriesData);

    // Console success and exit
    console.log(`Data has been imported successfully`);
    process.exit();
  } catch (error) {
    // console error and exit
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
}

const destroyData = async () => {
  connectDB();
  try {
    // Delete All Data
    await ProductModel.deleteMany();
    await CategoryModel.deleteMany();
    // Console success and exit
    console.log(`Data has been deleted successfully`);
    process.exit();
  } catch (error) {
    // console error and exit
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
}


console.log(process.argv)
if (process.argv[2] === '-D') {
  destroyData();
} else {
  importData();
}
