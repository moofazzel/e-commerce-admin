import Layout from "@/component/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LeftArrow from "../../public/arrowLeft.png";
import RightArrow from "../../public/arrowRight.png";

function product() {
  const [product, setProduct] = useState();

  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    fetch(`/api/${router.query.productId.join("/")}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [router.isReady]);

  if (!product) {
    return <>Loading...</>;
  }

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const handlerAddToCart = (item) => {
    const localCart = localStorage.getItem("cartItems");
    const savedCart = JSON.parse(localCart);

    if (!savedCart) {
      const newQuantities = Object.assign(item, { quantities: quantity });
      const initialCart = [newQuantities];
      setCart(initialCart);
      localStorage.setItem("cartItems", JSON.stringify(initialCart));

      if (initialCart) {
        toast("Product Added Cart", {
          position: "top-center",
          autoClose: 2000,
        });
      }

      // return;
    } else {
      setCart(savedCart);

      const existingItem = cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const objIndex = cart.findIndex((obj) => obj.id == existingItem.id);

        //Log object to Console.
        console.log("Before update: ", cart[objIndex]);
        console.log("Before update: ", objIndex);

        //Update object's name property.
        cart[objIndex].quantities = quantity;

        toast("Product quantities updated", {
          position: "top-center",
          autoClose: 2000,
        });
      } else {
        const cardNewQuantities = Object.assign(item, { quantities: quantity });
        const cartCopy = [...savedCart, cardNewQuantities];

        localStorage.setItem("cartItems", JSON.stringify(cartCopy));
        if (cartCopy) {
          toast("Product Added Cart", {
            position: "top-center",
            autoClose: 2000,
          });
        }
      }
      // localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  };

  return (
    <Layout>
      <div className="container md:flex items-center gap-10 my-10 mb-40">
        <div>
          <img className="rounded-3xl" src={product.images[0]} alt="" />
        </div>

        <div className="flex flex-col gap-4 md:my-10">
          <h2 className="font-bold text-3xl mt-5"> {product.title} </h2>
          <p className="text-[#828282] text-lg "> {product.description} </p>

          <span className=" text-3xl font-bold text-black">
            <span className="text-[#f54749]">$</span> {product.price}
          </span>
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold">Quantity</span>
            <div className="flex items-center gap-4">
              <Image
                style={quantity === 1 && { cursor: "unset" }}
                onClick={() => handleQuantity("dec")}
                src={LeftArrow}
                height={20}
                weight={20}
                alt=""
              />
              <span className="text-2xl font-bold">{quantity}</span>
              <Image
                onClick={() => handleQuantity("inc")}
                src={RightArrow}
                height={20}
                weight={20}
                alt=""
              />
            </div>
          </div>

          <button
            onClick={() => handlerAddToCart(product)}
            className="btn mt-5 bg-[#f54749] !px-10 "
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default product;
