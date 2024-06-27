import express from "express";
import morgan from "morgan";
import cors from "cors";
import { products } from "./data/products.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api/econverse/products", (req, res) => {
  try {
    return res.json({ succes: true, products: products });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000);
console.log(`Server on port ${3000}`);
