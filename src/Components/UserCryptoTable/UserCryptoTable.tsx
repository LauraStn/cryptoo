import React, { Fragment, useEffect, useState } from "react";
import { UserHasCrypto } from "../../Utils/types";
import { getAllCryptos } from "@/Service/crypto";
import { getMyAssets } from "@/Service/user";
import UserCryptoRow from "./UserCryptoRow";

export const UserCryptoTable = () => {
  const [myAssets, setMyAssets] = useState<UserHasCrypto[]>();

  useEffect(() => {
    getMyAssets().then((res) => {
      console.log(res.data.UserHasCrypto);

      setMyAssets(res.data.UserHasCrypto);
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
              <th className="py-3 px-6 text-center">Amount</th>
              {/* <th className="py-3 px-6 text-center">Total</th> */}
              <th className="py-3 px-6 text-center">Sell</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {myAssets &&
              myAssets?.map((UserHasCrypto) => {
                return (
                  <Fragment key={UserHasCrypto.id}>
                    <UserCryptoRow
                      userHasCrypto={{
                        Crypto: {
                          id: UserHasCrypto.Crypto.id,
                          name: UserHasCrypto.Crypto.name,
                          quantity: UserHasCrypto.Crypto.quantity,
                          value: UserHasCrypto.Crypto.value,
                          image: UserHasCrypto.Crypto.image,
                          updated_at: UserHasCrypto.Crypto.updated_at,
                        },
                        amount: UserHasCrypto.amount,
                        id: UserHasCrypto.id,
                      }}
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
