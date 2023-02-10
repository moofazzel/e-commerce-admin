import { products } from "../../../../data/product";

export default function handler(req, res) {
  res.status(200).json(products);
}
