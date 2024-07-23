import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [isEditingRowId, setIsEditingRowId] = useLocalStorage(
    "isEditingRowId",
    ""
  );
  const [sortCallback, setSortCallback] = useState(() => () => {});

  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          isEditingRowId={isEditingRowId}
          setIsEditingRowId={setIsEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          setIsEditingRowId={setIsEditingRowId}
          sortCallback={sortCallback}
          setSortCallback={setSortCallback}
        />
      </div>
    </main>
  );
}

export default App;
