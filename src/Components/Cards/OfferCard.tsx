import React from "react";
import { OffersProps } from "../../Utils/types";
import { deleteOffer } from "@/Service/offer";
import toast from "react-hot-toast";
import CryptoCard from "./CryptoCard";
import { buyOffer } from "@/Service/trade";

export const OfferCard = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: any;
}) => {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.status !== undefined) {
          setIsReloadNeeded(true);
          toast.success("Success");
        }
        toast.error(res.response.data.message);
      })
      .catch((e) => {
        toast.error("error");
        console.log(e);
      });
  }
  function handleDeleteOffer(offerId: string) {
    deleteOffer(offerId)
      .then((res) => {
        console.log(offerId);

        if (res.status !== undefined) {
          setIsReloadNeeded(true);
          toast.success("Success");
          return;
        }
        toast.error("Fail");
      })
      .catch((e) => {
        toast.error("error");
        console.log(e);
      });
  }
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p>Number of tokens: {offer.amount}</p>
          <p>Seller: {offer.User.pseudo}</p>
        </div>

        <button
          onClick={() => {
            handleDeleteOffer(offer.id);
          }}
          className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
        >
          Delete
        </button>
      </div>

      <CryptoCard crypto={offer.Crypto} isBuyVisible={false} />
      <div className="w-full flex justify-end">
        <button
          className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
          onClick={() => {
            handleCryptoBuyViaOffer(offer.id);
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
