import React from "react";
import Greet from "./components/Greet";
import Style from "./css/app.module.css";

let Message = null;
let GreetStyle = {
    color: null
};

const Current = new Date();
const Now = new Date(Current.getFullYear(), Current.getMonth(), Current.getDate(), 5);
const Hours = Now.getHours();

if (Hours >= 12 && Hours <= 16) {
    Message = "Good Afternoon";
    GreetStyle.color = "#FF5733";
} else if (Hours >= 17 && Hours <= 20) {
    Message = "Good Evening";
    GreetStyle.color = "#900C3F";
} else if ((Hours >= 21 && Hours < 24) || (Hours >= 0 && Hours <= 2)) {
    Message = "Good Night";
    GreetStyle.color = "#1657A5";
} else {
    Message = "Good Morning";
    GreetStyle.color = "#178E24";
}

function App() {
    return (
        <section className={Style.main}>
            <Greet message={Message} cstyles={GreetStyle}></Greet>
        </section>
    )
}

export default App;