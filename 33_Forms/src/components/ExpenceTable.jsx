import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

function ExpenceTable({ expenses }) {
  let total = 0;
  //const [category, setCategory] = useState("All");
  //const [filteredData, setFilteredData] = useState(expenses);
  const [category, setCategory] = useState("");
  const [lowToHigh, setLowToHigh] = useState(true);

  useEffect(() => {
    sort();
  }, []);

  const filteredData = expenses.filter((expense) =>
    expense.category.includes(category)
  );

  //update total amount
  filteredData.map((expense) => {
    total += +expense.amount; // + operator used to convert string into number, shorthand of Number()
  });

  const sort = () => {
    console.log(`sort called - ${JSON.stringify(filteredData, null, 2)}`);
    if (lowToHigh) {
      filteredData.sort((a, b) => a.amount - b.amount);
      setLowToHigh(!lowToHigh);
      console.log(`sort if - ${JSON.stringify(filteredData, null, 2)}`);
    } else {
      filteredData.sort((a, b) => b.amount - a.amount);
      setLowToHigh(!lowToHigh);
      console.log(`sort else - ${JSON.stringify(filteredData, null, 2)}`);
    }
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
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
        {filteredData.map(({ id, title, category, amount }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>{category}</td>
            <td>₹{amount}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th>{total}</th>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpenceTable;
