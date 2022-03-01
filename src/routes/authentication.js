import { getProduct } from "../controllers/product.controller";
import { Router } from "express";
const router = Router();

router.get("/signin", (req, res) => {
  res.render("auth/signin");
  const data = getProduct;
  console.log("product", data);
});

/* router.get("/signin", getProduct); */

export default router;
