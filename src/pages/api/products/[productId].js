import { products } from "data/product";

export default function handler(req, res) {
  const { productId } = req.query;
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  console.log(product, productId, products);
  res.status(200).send(product);
}
