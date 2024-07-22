import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  expenses,
  setExpenses,
  setExpense,
  rowId,
  setIsEditingRowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          setMenuPosition({});
          setIsEditingRowId(rowId);
          let [{ title, category, amount }] = expenses.filter(
            (expenseItem) => expenseItem.id === rowId
          );
          setExpense({ title, category, amount });
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
