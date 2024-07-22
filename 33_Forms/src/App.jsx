import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [isEditingRowId, setIsEditingRowId] = useState("");
  const [sortCallback, setSortCallback] = useState(() => () => {});
  console.log(sortCallback);
  const [expense, setExpense] = useState({
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
