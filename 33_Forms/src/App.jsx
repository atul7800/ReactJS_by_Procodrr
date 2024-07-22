import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenceTable from "./components/ExpenceTable";
import ContextMenu from "./components/ContextMenu";
import ExpenseData from "./ExpenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
        />
        <ExpenceTable
          expenses={expenses}
          expense={expense}
          setExpense={setExpense}
        />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
