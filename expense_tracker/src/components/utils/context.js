"use client";
const { createContext, useState } = require("react");

export const TransactionContext = createContext(null);

export const TransactionContextProvider = ({ children }) => {
  const [transInfo, setTransInfo] = useState({
    amount: null,
    category: { name: "", icon: "", color: null },
    date: null,
    time: "",
    note: "",
  });
  return (
    <TransactionContext.Provider value={{ transInfo, setTransInfo }}>
      {children}
    </TransactionContext.Provider>
  );
};
