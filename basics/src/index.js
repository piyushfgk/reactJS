import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Styles from "./css/mystyles.module.css";

const FName = "Piyush";
const LName = "Sachan";

const AuthorStyle = {
    color: "dodgerblue",
    textShadow: "0px 1px 1px black"
};

// const MyDate = new Date("May 15 2021 13:00");
const MyDate = new Date(2021, 5, 15, 15); // year, month, day, hours, minutes, seconds
const Hours = MyDate.getHours();
let Greet = "Good Morning!";
const StyleGreet = {
    color: "forestgreen"
}

if (Hours >= 12 && Hours <= 18) {
    Greet = "Good Afternoon!";
    StyleGreet.color = "tomato";
} else if (Hours >= 19 && Hours <= 24) {
    Greet = "Good Night!";
    StyleGreet.color = "coral";
}

ReactDOM.render(
    <>
        <div className={Styles.container}>
            <h1>Hello World ! <small style={StyleGreet}>{Greet}</small></h1>
            <p>This should auto reload on <strong>Save</strong></p>
            <section className={Styles.author}>
                <h3>Author name - <span style={AuthorStyle}>{FName} {LName}</span></h3>
            </section>
        </div>
    </>,
    document.getElementById("root")
);