// import { CryptoProps } from "@/Utils/types";
// import React from "react";
// import { BuyCryptoModal } from "../Modal/BuyCryptoModal";

// const CryptoCard = ({
//   crypto,
//   isBuyVisible,
// }: {
//   crypto: CryptoProps;
//   isBuyVisible: boolean;
// }) => {
//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="mx-auto px-5">
//         <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
//           <img
//             className="w-full rounded-lg object-cover object-center"
//             src={crypto.image}
//             alt="product"
//           />
//           <p className="my-4 pl-4 font-bold text-gray-500"> {crypto.name} </p>
//           <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
//             {" "}
//             {crypto.value}{" "}
//           </p>
//           <p className="mb-4 ml-4 self-end text-xl font-semibold text-gray-800">
//             {" "}
//             Quantity:{crypto.quantity}{" "}
//           </p>

//           <BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CryptoCard;
