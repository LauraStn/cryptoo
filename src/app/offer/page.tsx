"use client";

import React, { useEffect, useState } from "react";
import { OfferTable } from "@/Components/OfferTable/OfferTable";

const page = () => {
  // const [offersList, setOffersList] = useState<OffersProps[]>();
  // const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  // useEffect(() => {
  //   getAllOffers()
  //     .then((res) => {
  //       setOffersList(res.data);
  //       setIsReloadNeeded(false);
  //     })
  //     .catch((e) => {
  //       setIsReloadNeeded(false);
  //       console.log(e);
  //     });
  // }, [isReloadNeeded]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bitcoin dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <OfferTable />
    </main>
    // <div className="border-2 border-gray-400 rounded-lg">
    //   {offersList &&
    //     offersList?.map((offer) => {
    //       return (
    //         <div
    //           key={offer.id}
    //           className="border-2 border-solid w-full rounded-md mt-1 p-2 "
    //         >
    //           <OfferCard offer={offer} setIsReloadNeeded={setIsReloadNeeded} />
    //         </div>
    //       );
    //     })}
    // </div>
  );
};

export default page;

// <div key={offer.id}>
//   <OfferRow
//     id={""}
//     User={{
//       pseudo: offer.User.pseudo,
//     }}
//     amount={offer.amount}
//     created_at={""}
//     id_user={""}
//     Crypto={{
//       id: "",
//       name: offer.Crypto.name,
//       quantity: 0,
//       value: offer.Crypto.value,
//       image: offer.Crypto.image,
//     }}
//   />
// </div>
