import React from "react";
import "./css/calc.css"
import Output from "./components/Show"
import * as Calc from "./Calculate"

function App() {
    return (
        <>
            <ul className="center no-bullets">
                <Output title="Sum" result={Calc.add(10, 20)}/>
                <Output title="Subtraction" result={Calc.sub(50, 20)}/>
                <Output title="Division" result={Calc.div(100, 20)}/>
                <Output title="Multiplication" result={Math.round(Calc.mul(12.36, 20))}/>
            </ul>
        </>
    )
}

export default App;