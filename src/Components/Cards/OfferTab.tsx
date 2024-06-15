import React from "react";
import { OffersProps } from "../../Utils/types";
import { deleteOffer } from "@/Service/offer";
import toast from "react-hot-toast";
import CryptoCard from "./CryptoCard";
import { buyOffer } from "@/Service/trade";
import { BsCart4 } from "react-icons/bs";

export const OfferTab = ({
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
    <div className="w-full lg:w-6/6">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Crypto</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Seller</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">Total</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span className="font-medium">Crypto name</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <span className="font-medium">Price</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <span>Eshal Rosas</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                  <span>1</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                  250 $
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <BsCart4 />
                  </button>
                  <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            {/* <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img
                      className="w-6 h-6"
                      src="https://img.icons8.com/color/100/000000/vue-js.png"
                    />
                  </div>
                  <span className="font-medium">Vue Project</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                    />
                  </div>
                  <span>Anita Rodriquez</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                  />
                  <img
                    className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                  />
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                  Completed
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
