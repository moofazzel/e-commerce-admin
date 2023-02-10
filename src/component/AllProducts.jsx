import Image from "next/image";
import apple14_1 from "../../public/apple14_1.jpg";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

// const fetcher = async () => {
//   const res = await fetch("/api/products");
//   const data = await res.json();
//   return data;
// };

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function AllProducts() {
  const { data: products, error } = useSWR("/api/products", fetcher);

  if (error) return "An error has occured";
  if (!products) return "Loading";

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-20">
        {products.map((p, i) => {
          return (
            <Link
              href={`/products/${p.id}`}
              className="border-b-2 pb-4 shadow-md rounded-md hover:shadow-2xl"
              key={i}
            >
              <div className="border-r lg:border-r-0 my-10 mb-2">
                <img className="rounded-t-md" src={p.images[0]} alt="#" />
                <div className="flex flex-col items-center gap-3">
                  <h3 className="pt-4"> {p.title} </h3>
                  <span className="flex  items-center text-yellow-500">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  <span className="text-[#ef665d] font-bold text-lg ">
                    $ {p.price}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default AllProducts;
