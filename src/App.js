import "./App.css";
import Numbers from "./Numbers";
import Count from "./Count";
import { useState } from "react";

function App() {
  const [digits, setDigits] = useState(0);
  const [operator, setOperator] = useState("");
  const [digits2, setDigits2] = useState(0);
  const [history, setHistory] = useState();
  return (
    <div className="">
      <div className=" p-3 bg-gray-800 h-[610px] w-80 m-auto mt-20 ">
        <Count number={digits} count={history} />
        <div className="flex flex-col space-y-6 ">
          <Numbers
            yekStyles={"text-violet-600 "}
            yekOnclick={() => {
              setDigits("");
              setDigits2("");
              setHistory("");
              setOperator("");
            }}
            yek={"AC"}
            do={"+/-"}
            doOnclick={() => {
              setDigits(-digits);
            }}
            se={"%"}
            seOnclick={() => {
              setDigits(digits / 100);
            }}
            chahar={"÷"}
            chaharOnclick={() => {
              setOperator("÷");
              setDigits2(digits);
              setDigits(0);
            }}
          />
          <Numbers
            yekOnclick={() => {
              console.log(digits);
              setDigits(digits * 10 + 7);
              console.log(digits);
            }}
            doOnclick={() => {
              setDigits(digits * 10 + 8);
            }}
            seOnclick={() => {
              setDigits(digits * 10 + 9);
            }}
            yek={7}
            do={8}
            se={9}
            chahar={"."}
            chaharOnclick={() => {
              setOperator("*");
              setDigits2(digits);
              setDigits(0);
            }}
          />
          <Numbers
            yekOnclick={() => {
              setDigits(digits * 10 + 4);
            }}
            doOnclick={() => {
              setDigits(digits * 10 + 5);
            }}
            seOnclick={() => {
              setDigits(digits * 10 + 6);
            }}
            yek={4}
            do={5}
            se={6}
            chahar={"-"}
            chaharOnclick={() => {
              setOperator("-");
              setDigits2(digits);
              setDigits(0);
            }}
          />
          <Numbers
            yekOnclick={() => {
              setDigits(digits * 10 + 1);
            }}
            doOnclick={() => {
              setDigits(digits * 10 + 2);
            }}
            seOnclick={() => {
              setDigits(digits * 10 + 3);
            }}
            chaharOnclick={() => {
              setOperator("+");
              setDigits2(digits);
              setDigits(0);
            }}
            yek={1}
            do={2}
            se={3}
            chahar={"+"}
          />
          <Numbers
            yekOnclick={() => {
              setDigits(digits * 10 + 0);
            }}
            yek={0}
            do={"."}
            se={""}
            chaharOnclick={() => {
              setHistory(digits2 + " " + operator + " " + digits);
              if (operator === "+") {
                setDigits(digits2 + digits);
                setDigits2(0);
              } else if (operator === "-") {
                setDigits(digits2 - digits);
                setDigits2(0);
              } else if (operator === "*") {
                setDigits(digits2 * digits);
                setDigits2(0);
              } else if (operator === "÷") {
                setDigits(digits2 / digits);
                setDigits2(0);
              }
            }}
            chahar={"="}
            chaharStyles={"bg-violet-600 text-gray-100 "}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
