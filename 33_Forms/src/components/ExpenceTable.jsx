import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

function ExpenceTable({ expenses }) {
  let total = 0;
  const [filteredData, setFilteredData] = useState(expenses);
  const [value, setValue] = useState("All");
  const [lowToHigh, setLowToHigh] = useState(true);

  useEffect(() => {
    sort();
  }, []);

  useEffect(() => {
    setFilteredData(expenses);
  }, [expenses]);

  //update total amount
  filteredData.map((expense) => {
    total += +expense.amount; // + operator used to convert string into number, shorthand of Number()
  });

  const filter = (e) => {
    setValue(e.target.value);
    if (e.target.value === "All") {
      return setFilteredData(expenses);
    } else {
      setFilteredData(
        // Method 1
        // expenses.filter((expense) => expense.category === e.target.value);
        //Method 2
        expenses.filter((expense) => expense.category.includes(e.target.value))
      );
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
            <select value={value} onChange={filter}>
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
