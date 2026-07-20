import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const expression = result
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        setResult(eval(expression).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "AC") {
      setResult("");
    } else if (value === "⌫") {
      setResult(result.slice(0, -1));
    } else if (value === "%") {
      try {
        setResult((parseFloat(result) / 100).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setResult(result + value);
    }
  };

  useEffect(() => {
    const keyboard = (e) => {
      const key = e.key;

      if ("0123456789+-*/.%".includes(key)) {
        setResult((prev) => prev + key);
      }

      if (key === "Enter") {
        try {
          setResult(eval(result).toString());
        } catch {
          setResult("Error");
        }
      }

      if (key === "Backspace") {
        setResult((prev) => prev.slice(0, -1));
      }

      if (key === "Escape") {
        setResult("");
      }
    };

    window.addEventListener("keydown", keyboard);

    return () => window.removeEventListener("keydown", keyboard);
  }, [result]);

  const buttons = [
    "AC",
    "⌫",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="calculator">

      <input
        type="text"
        value={result}
        readOnly
        className="display"
      />

      <div className="buttons">

        {buttons.map((btn, index) => (

          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={
              btn === "="
                ? "equal"
                : ["+", "-", "×", "÷", "%"].includes(btn)
                ? "operator"
                : btn === "AC"
                ? "clear"
                : ""
            }
          >
            {btn}
          </button>

        ))}

      </div>

    </div>
  );
};

export default Calculator;