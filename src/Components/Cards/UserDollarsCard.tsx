import { getMyAssets } from "@/Service/user";
import { USDollar } from "@/Utils/currencyFormat";
import { UserProps } from "@/Utils/types";
import { log } from "console";
import React, { useEffect, useState } from "react";

const UserDollarsCard = ({ user }: { user: UserProps }) => {
  const [myAssets, setMyAssets] = useState<UserProps>();

  useEffect(() => {
    getMyAssets().then((res) => {
      console.log(myAssets);

      setMyAssets(res.data);
    });
  }, []);
  return (
    <div className="">
      <div className="md:p-7 p-4 bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
        <h2 className="text-xl text-center text-gray-200 capitalize">
          {" "}
          {myAssets &&
            USDollar.format(Math.round(myAssets.dollarAvailables * 100) / 100)}
        </h2>
        <h3 className="text-sm  text-gray-400  text-center">
          {" "}
          {myAssets && myAssets.pseudo}
        </h3>
      </div>
    </div>
  );
};

export default UserDollarsCard;
