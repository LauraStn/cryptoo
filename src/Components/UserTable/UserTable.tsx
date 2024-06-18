import React, { Fragment, useEffect, useState } from "react";
import UserRow, { UserAssetsProps } from "./UserRow";
import { getAllUsers } from "@/Service/user";

const UserTable = () => {
  const [allUsers, setAllUsers] = useState<UserAssetsProps[]>();

  let randomNumber = Math.floor(Math.random() * 1000 + 1);
  useEffect(() => {
    getAllUsers().then((res) => {
      console.log(res.data);

      setAllUsers(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Latest Customers
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {allUsers &&
              allUsers.slice(0, 5).map((user) => {
                return (
                  <Fragment key={user.pseudo}>
                    <UserRow
                      dollarAvailables={
                        Math.round(user.dollarAvailables * 100) / 100
                      }
                      pseudo={user.pseudo}
                      firstName={user.firstName}
                      lastName={user.lastName}
                    />
                  </Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
