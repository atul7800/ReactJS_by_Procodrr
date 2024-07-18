import React, { useState, useEffect } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

function ExpenseForm({ setExpenses }) {
  const errorsData = {}; // to store all the error messages
  const [warnings, setWarnings] = useState({}); //to manage the state of error msgs on ui.
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  // This function runs everytime there is any change in the form fields
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // This function will be called once form is submitted to reset the form
  function resetForm() {
    setExpense({
      title: "",
      category: "",
      amount: "",
      email: "",
    });
  }

  // This object will be used inside validateFormData() to validate the form inputs
  const validationConfig = {
    title: [{ required: true, message: "Please enter title" }],
    category: [{ required: true, message: "Please select category" }],
    amount: [
      { required: true, message: "Please enter amount" },
      { minAmount: 1, message: "Amount should be greater than 0" },
    ],
    email: [
      { required: true, message: "Please enter email" },
      { pattern: { emailRegex }, message: "Enter a valid email" },
    ],
  };

  // This function will be called before submitting the form to validate the inputs
  const validateFormData = () => {
    /* Method 1
    const requiredFields = ["title", "category", "amount"];
    requiredFields.map((field) => {
      if (!e.target[field].value) {
        console.log(`${field} can't be empty`);
      }
    });
    */
    /*Method 2
    const requiredFileds = ["Title", "Category", "Amount"];
    requiredFileds.forEach((field) => {
      if (!expense[field.toLowerCase()]) {
        errorsData[field] = `${field} can't be empty`;
      }
    }); */
    // Method 3
    Object.entries(expense).map(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minAmount && value <= 0) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.required && !value) {
          errorsData[key] = rule.message;
        }

        if (value && !emailRegex.test(value)) {
          errorsData[key] = rule.message;
        }
      });
    });

    setWarnings(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any values inside errorsData which is returned by validateFormData(). If any value is there that means form is not filled properly, hence return from here without adding the data inside setExpenses array.
    const validationResult = validateFormData();
    if (Object.keys(validationResult).length) {
      return;
    }

    setExpenses((prevValue) => [
      ...prevValue,
      { ...expense, id: crypto.randomUUID() },
    ]);

    resetForm();
  };

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <CustomInput
        label={"Title"}
        id={"title"}
        name={"title"}
        value={expense.title}
        handleOnChange={handleOnChange}
        errorMsg={warnings.title}
      />

      <CustomSelect
        label={"Category"}
        id={"category"}
        name={"category"}
        value={expense.category}
        handleOnChange={handleOnChange}
        defaultOption={"Select category"}
        options={["Grocey", "Clothes", "Education", "Bikes", "Medicine"]}
        errorMsg={warnings.category}
      />

      <CustomInput
        label={"Amount"}
        id={"amount"}
        name={"amount"}
        value={expense.amount}
        handleOnChange={handleOnChange}
        errorMsg={warnings.amount}
      />

      <CustomInput
        label={"Email"}
        id={"email"}
        name={"email"}
        value={expense.email}
        handleOnChange={handleOnChange}
        errorMsg={warnings.email}
      />

      <button className="add-btn">Add</button>
    </form>
  );
}

export default ExpenseForm;
