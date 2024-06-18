import React, { Fragment, useEffect, useState } from "react";
import { CryptoProps, OffersProps } from "../../Utils/types";
import { getAllOffers } from "@/Service/offer";
import { getAllCryptos } from "@/Service/crypto";
import CryptoRow from "./CryptoRow";

export const CryptoTable = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>();

  useEffect(() => {
    getAllCryptos().then((res) => {
      setCryptosList(res.data);
    });
  }, []);

  return (
    <div className="w-4/6">
      <div className="bg-white shadow-md rounded">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Crypto</th>
              <th className="py-3 px-6 text-left">Value</th>
              <th className="py-3 px-6 text-left">Server Quantity</th>
              <th className="py-3 px-6 text-center"> Buy</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {cryptosList &&
              cryptosList?.map((crypto) => {
                return (
                  <Fragment key={crypto.id}>
                    <CryptoRow crypto={crypto} />
                  </Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
