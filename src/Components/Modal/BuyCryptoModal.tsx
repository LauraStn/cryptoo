import { buyCrypto } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const BuyCryptoModal = ({
  crypto,
  isBuyVisible,
}: {
  crypto: CryptoProps;
  isBuyVisible: boolean;
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState(1);

  function HandleCrypoBuy() {
    buyCrypto(crypto.id, amount)
      .then((res) => {
        if (res.status !== undefined) {
          handleClose();
          toast.success("Successfully buyed");
        }
        // toast.error(res.response.data.message);
      })
      .catch((e) => toast.error(e));
  }

  return (
    <div>
      {isBuyVisible && (
        <button
          onClick={handleOpen}
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Buy{" "}
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
            defaultValue={1}
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Cancel
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandleCrypoBuy();
              }}
            >
              Buy
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
