import React from "react";

function Output(params) {
    return <li>{params.title} of two number is <span className="result">{params.result}</span></li>
}

export default Output;