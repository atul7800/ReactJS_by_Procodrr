import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useFilter } from "../useFilter";
import ContextMenu from "./ContextMenu";

function ExpenceTable({ expenses, setExpenses }) {
  const [lowToHigh, setLowToHigh] = useState(true);
  const [menuPosition, setMenuPosition] = useState({});
  const [result, setQuery] = useFilter(expenses, (data) => data.category);
  const [rowId, setRowId] = useState("");

  useEffect(() => {
    sort();
  }, []);

  //update total amount
  /* Method 1
  result.map((expense) => {
    total += +expense.amount; // + operator used to convert string into number, shorthand of Number()
  }); */

  // Method 2
  const total = result.reduce(
    (accumulator, item) => accumulator + +item.amount,
    0
  );

  const sort = () => {
    if (lowToHigh) {
      result.sort((a, b) => a.amount - b.amount);
      setLowToHigh(!lowToHigh);
    } else {
      result.sort((a, b) => b.amount - a.amount);
      setLowToHigh(!lowToHigh);
    }
  };

  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  //   setMenuPosition({ left: e.clientX + 10, top: e.clientY + 10 });
  //   rowId =
  // };

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenses={setExpenses}
        rowId={rowId}
      />
      <table className="expense-table" onClick={() => setMenuPosition({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value)}>
                <option value="">All</option>
                <option value="Groccery">Groccery</option>
                <option value="Clothes">Clothes</option>
                <option value="Education">Education</option>
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
            <tr
              onContextMenu={(e) => {
                e.preventDefault();
                setMenuPosition({ left: e.clientX + 10, top: e.clientY + 10 });
                setRowId(id);
              }}
              key={id}
            >
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
    </>
  );
}

export default ExpenceTable;
