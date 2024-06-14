import { CryptoProps, UserHasCrypto } from "@/Utils/types";
import React from "react";
import { BuyCryptoModal } from "../Modal/BuyCryptoModal";

const UserCryptoCard = ({ userCrypto }: { userCrypto: UserHasCrypto }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={userCrypto.Crypto.image}
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-gray-500">
            {" "}
            {userCrypto.Crypto.name}{" "}
          </p>
          <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
            {" "}
            {userCrypto.Crypto.value}{" "}
          </p>
          <p className="mb-4 ml-4 self-end text-xl font-semibold text-gray-800">
            {" "}
            Server Quantity:{userCrypto.Crypto.quantity}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCryptoCard;