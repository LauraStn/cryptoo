import { CryptoProps } from "@/Utils/types";
import React from "react";

const CryptoCard = (cryptoProps: CryptoProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={cryptoProps.image}
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-gray-500">
            {" "}
            {cryptoProps.name}{" "}
          </p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
            {" "}
            {cryptoProps.value}{" "}
          </p>
          <p className="mb-4 ml-4 self-end text-xl font-semibold text-gray-800">
            {" "}
            Quantity:{cryptoProps.quantity}{" "}
          </p>
          <button className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
