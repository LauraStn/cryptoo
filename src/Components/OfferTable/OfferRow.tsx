import { OffersProps } from "@/Utils/types";
import React from "react";
import { BuyOfferModal } from "../Modal/BuyOfferMofal";
import { DeleteOfferModal } from "../Modal/DeleteOfferModal";
import { EditOfferModal } from "../Modal/EditOfferModal";
import { USDollar } from "@/Utils/currencyFormat";

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
          <span className="font-medium">
            {" "}
            {USDollar.format(Math.round(offer.Crypto.value * 100) / 100)}{" "}
          </span>
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
          {USDollar.format(
            Math.round(offer.amount * offer.Crypto.value * 100) / 100
          )}
        </span>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <BuyOfferModal offer={offer} />
          <EditOfferModal offer={offer} amount={offer.amount} />
          <DeleteOfferModal offer={offer} />
        </div>
      </td>
    </tr>
  );
};

export default OfferRow;
