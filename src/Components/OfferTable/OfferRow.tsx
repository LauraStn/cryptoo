import { OffersProps } from "@/Utils/types";
import React from "react";
import { BuyOfferModal } from "../Modal/BuyOfferMofal";
import { DeleteOfferModal } from "../Modal/DeleteOfferModal";

const OfferRow = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OffersProps;
  setIsReloadNeeded: any;
}) => {
  //   function handleCryptoBuyViaOffer(offerId: string) {
  //     buyOffer(offerId)
  //       .then((res) => {
  //         if (res.status !== undefined) {
  //           setIsReloadNeeded(true);
  //           toast.success("Success");
  //         }
  //         toast.error(res.response.data.message);
  //       })
  //       .catch((e) => {
  //         toast.error("error");
  //         console.log(e);
  //       });
  //   }
  return (
    <tr className="border-b border-gray-200 bg-white hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="mr-2">
            <img className="w-6 h-6 rounded-full" src={offer.Crypto.image} />
          </div>
          <span className="font-medium"> {offer.Crypto.name} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium"> {offer.Crypto.value} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span> {offer.User.pseudo} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <span> {offer.amount} </span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          {Math.round(offer.amount * offer.Crypto.value * 100) / 100} $
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <BuyOfferModal offer={offer} />
          <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <DeleteOfferModal offer={offer} />
        </div>
      </td>
    </tr>
  );
};

export default OfferRow;
