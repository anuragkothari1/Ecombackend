const express =require ("express");
const { getAllProducts, createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/Productcontroller");
const router = express.Router();

router.get("/products",getAllProducts);
router.get("/product/:id",getProductDetails);
router.post("/product/new",createProduct);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);

module.exports=router;