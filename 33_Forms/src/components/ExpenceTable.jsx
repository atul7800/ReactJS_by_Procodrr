import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

function ExpenceTable({ expenses }) {
  //const [totalAmount, setTotalAmount] = useState(0); atul
  let total = 0;
  const [filteredData, setFilteredData] = useState(expenses);
  const [value, setValue] = useState("All");
  const [lowToHigh, setLowToHigh] = useState(true);
  const [filterQuery, setFilterQuery] = useState(true);

  useEffect(() => {
    sort();
    console.log();
  }, []);

  //update total amount
  filteredData.map((expense) => {
    total += expense.amount;
  });

  const handleChange = () => {
    console.log(typeof e.target.value);
    setValue(e.target.value);
  };

  const filterData = (expense) => {
    if (value === "All") {
      return true;
    } else {
      return expense.category === value;
    }
  };

  const sort = () => {
    if (lowToHigh) {
      filteredData.sort((a, b) => a.amount - b.amount);
      setLowToHigh(!lowToHigh);
    } else {
      filteredData.sort((a, b) => b.amount - a.amount);
      setLowToHigh(!lowToHigh);
    }
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>
            <select value={value} onChange={handleChange}>
              <option value="All">All</option>
              <option value="Groccery">Groccery</option>
              <option value="Clothes">Clothes</option>
              <option value="Bills">Bills</option>
              <option value="Bikes">Bikes</option>
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
        {expenses
          .filter((expense) => filterData(expense))
          .map(({ id, title, category, amount }) => (
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
