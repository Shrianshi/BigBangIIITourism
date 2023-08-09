import { createContext, useState } from 'react';

const BillContext = createContext({});

export const BillProvider = ({ children }) => {
  const [totalCost, setTotalCost] = useState('')
  const [tax, setTax] = useState('')
  const updateBill =(tCost, tax)=>{
    setTotalCost(tCost)
    setTax(tax)
  }
console.log(totalCost, tax)
  return (
    <BillContext.Provider value={{ totalCost, tax, updateBill}}>
      {children}
    </BillContext.Provider>
  );
};

export default BillContext;