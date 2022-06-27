import { useState } from "react";

export const useItem = (stock) => {
  const [amount, setAmount] = useState(1);
  const count = (value) => {
    const result = amount + value;
    if (result <= stock && result > 0) {
      setAmount(result);
    }
  };

  return {
    count,
    amount,
  };
};
