import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [isEditingRowId, setIsEditingRowId] = useState("");
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
        />
      </div>
    </main>
  );
}

export default App;
