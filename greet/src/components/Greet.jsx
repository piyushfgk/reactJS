import React from "react";
import Style from "../css/app.module.css";

function Greet(props) {
    return (
        <h1 className={Style.greet}>Hello sir, <span style={props.cstyles}>{props.message}</span></h1>
    );
}

export default Greet;