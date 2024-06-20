"use client";
import { getAllTrades } from "@/Service/trade";
import React, { Fragment, useEffect, useState } from "react";
import TradeRow from "./TradeRow";
import { TradeProps } from "@/Utils/types";
import Link from "next/link";

const TradeTable = ({
  min,
  max,
  isVisible,
}: {
  min: number;
  max: number;
  isVisible: boolean;
}) => {
  const [allTrades, setallTrades] = useState<TradeProps[]>();

  useEffect(() => {
    getAllTrades().then((res) => {
      setallTrades(res.data);
    });
  }, []);
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Latest Transactions
          </h3>
          <span className="text-base font-normal text-gray-500">
            This is a list of latest transactions
          </span>
        </div>
        <div className="flex-shrink-0">
          {isVisible && (
            <Link
              href="/allTrades"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
            >
              View all
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto rounded-lg">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Crypto
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {allTrades &&
                    allTrades
                      .sort((a: any, b: any) => {
                        const dateA = new Date(a.Crypto.updated_at);
                        const dateB = new Date(b.Crypto.updated_at);
                        return dateB.getTime() - dateA.getTime();
                      })
                      .slice(min, max)
                      .map((trade) => {
                        return (
                          <Fragment key={trade.id}>
                            <TradeRow
                              trade={{
                                Crypto: {
                                  id: "",
                                  name: trade.Crypto.name,
                                  quantity: 0,
                                  value: 0,
                                  image: "",
                                  updated_at: new Date(
                                    trade.Crypto.updated_at
                                  ).toLocaleString("fr-FR"),
                                },
                                Giver: {
                                  UserHasCrypto: undefined,
                                  dollarAvailables: 0,
                                  pseudo: trade.Giver.pseudo,
                                },
                                Receiver: {
                                  UserHasCrypto: undefined,
                                  dollarAvailables: 0,
                                  pseudo: trade.Receiver.pseudo,
                                },
                                id: "",
                              }}
                            />
                          </Fragment>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeTable;
