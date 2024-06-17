import React, { Fragment, useEffect, useState } from "react";
import { OffersProps } from "../../Utils/types";
import { getAllOffers } from "@/Service/offer";
import OfferRow from "./OfferRow";

export const OfferTable = () => {
  const [offersList, setOffersList] = useState<OffersProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    getAllOffers()
      .then((res) => {
        setOffersList(res.data);
        setIsReloadNeeded(false);
      })
      .catch((e) => {
        setIsReloadNeeded(false);
        console.log(e);
      });
  }, [isReloadNeeded]);

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
  //   function handleDeleteOffer(offerId: string) {
  //     deleteOffer(offerId)
  //       .then((res) => {
  //         console.log(offerId);

  //         if (res.status !== undefined) {
  //           setIsReloadNeeded(true);
  //           toast.success("Success");
  //           return;
  //         }
  //         toast.error("Fail");
  //       })
  //       .catch((e) => {
  //         toast.error("error");
  //         console.log(e);
  //       });
  //   }
  return (
    <div className=" w-full w-6/6">
      <div className="bg-white shadow-md rounded">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Crypto</th>
              <th className="py-3 px-6 text-left">Value</th>
              <th className="py-3 px-6 text-left">Seller</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">Total</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {offersList &&
              offersList?.map((offer) => {
                return (
                  <Fragment key={offer.id}>
                    <OfferRow
                      offer={{
                        id: offer.id,
                        User: {
                          pseudo: offer.User.pseudo,
                        },
                        amount: offer.amount,
                        created_at: "",
                        id_user: "",
                        Crypto: {
                          id: offer.Crypto.id,
                          name: offer.Crypto.name,
                          quantity: 0,
                          value: Math.round(offer.Crypto.value * 100) / 100,
                          image: offer.Crypto.image,
                        },
                      }}
                      setIsReloadNeeded={setIsReloadNeeded}
                    />
                  </Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
