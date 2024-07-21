import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useFilter } from "../useFilter";

function ExpenceTable({ expenses }) {
  let total = 0;
  const [category, setCategory] = useState("");
  const [lowToHigh, setLowToHigh] = useState(true);
  const [result, setQuery] = useFilter(expenses);
  console.log(JSON.stringify(result, null, 2));

  useEffect(() => {
    sort();
  }, []);

  //update total amount
  result.map((expense) => {
    total += +expense.amount; // + operator used to convert string into number, shorthand of Number()
  });

  const sort = () => {
    if (lowToHigh) {
      result.sort((a, b) => a.amount - b.amount);
      setLowToHigh(!lowToHigh);
    } else {
      result.sort((a, b) => b.amount - a.amount);
      setLowToHigh(!lowToHigh);
    }
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select onChange={(e) => setQuery(e.target.value)}>
              <option value="">All</option>
              <option value="Groccery">Groccery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Electronics">Electronics</option>
              <option value="Medicine">Medicine</option>
            </select>
          </th>
          <th className="amount-column">
            <div>
              <span>Amount</span>

              {lowToHigh ? (
                <FaArrowUp onClick={sort} />
              ) : (
                <FaArrowDown onClick={sort} />
              )}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {result.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th>₹{total}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenceTable;
