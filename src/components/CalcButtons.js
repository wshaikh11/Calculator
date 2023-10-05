import React, { useState } from "react";
import "./CalcButtons.css";
import Mexp from "math-expression-evaluator";

function CalcButtons() {
  const [value, setValue] = useState("");
  let [sum, setSum] = useState(0);
  let [ans, setAns] = useState(0);
  const [error, setError] = useState(null);

  const handleClick = (event) => {
    if (event.target.value === "C") {
      setValue("");
    } else {
      setValue((prevState) => prevState + event.target.value);
    }
    setSum(0);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOperation = () => {
    const mexp = new Mexp();
    try {
      var result = mexp.eval(value);
    } catch (error) {
      alert("Please enter valid expression");
      return;
    }
    setAns(result.toFixed(2));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="buttonClass">
          <button onClick={handleClick} className="buttonHeight" value={0}>
            0
          </button>
          <button onClick={handleClick} value={"."} className="buttonHeight">
            .
          </button>
          <button onClick={handleClick} value={"%"} className="buttonHeight">
            %
          </button>
          <button onClick={handleClick} value={"+"} className="buttonHeight">
            +
          </button>
        </div>
        <div className="buttonClass5">
          <button onClick={handleOperation} className="operation">
            =
          </button>
        </div>
        <div className="buttonClass2">
          <button onClick={handleClick} className="buttonHeight" value={1}>
            1
          </button>
          <button onClick={handleClick} className="buttonHeight" value={2}>
            2
          </button>
          <button onClick={handleClick} className="buttonHeight" value={3}>
            3
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"-"}>
            -
          </button>
        </div>
        <div className="buttonClass3">
          <button onClick={handleClick} className="buttonHeight" value={4}>
            4
          </button>
          <button onClick={handleClick} className="buttonHeight" value={5}>
            5
          </button>
          <button onClick={handleClick} className="buttonHeight" value={6}>
            6
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"*"}>
            *
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"^"}>
            x2
          </button>
        </div>
        <div className="buttonClass4">
          <button onClick={handleClick} className="buttonHeight" value={7}>
            7
          </button>
          <button onClick={handleClick} className="buttonHeight" value={8}>
            8
          </button>
          <button onClick={handleClick} className="buttonHeight" value={9}>
            9
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"/"}>
            /
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"root"}>
            √
          </button>
        </div>
        <div className="buttonClass6">
          <button onClick={handleClick} className="buttonCut" value={"C"}>
            C
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"("}>
            (
          </button>
          <button onClick={handleClick} className="buttonHeight" value={")"}>
            )
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"Mod"}>
            mod
          </button>
          <button onClick={handleClick} className="buttonHeight" value={"pi"}>
            π
          </button>
        </div>
        <div className="buttonClass7">
          <input
            type="text"
            className="inputField"
            onChange={handleChange}
            value={value}
            disabled={true}
          ></input>
        </div>
        <div className="buttonClass8">
          <div className="buttonClass9">
            <h3>{ans}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcButtons;
