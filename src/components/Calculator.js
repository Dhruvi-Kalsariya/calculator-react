import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [value, setValue] = useState("0");

  const press = (btn) => {
    if (btn === "AC") {
      setValue("0");
    } else if (btn === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } else {
      if (value === "0") {
        setValue(btn);
      } else {
        setValue(value + btn);
      }
    }
  };

  return (
    <div className="calculator">
      <input className="display" value={value} readOnly />

      <div className="buttons">
        {[
          "7","8","9","/",
          "4","5","6","*",
          "1","2","3","-",
          "0",".","=","+","AC"
        ].map((btn) => (
          <button key={btn} onClick={() => press(btn)}>
            {btn === "*" ? "×" : btn === "/" ? "÷" : btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;