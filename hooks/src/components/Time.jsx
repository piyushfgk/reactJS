import React from "react";
import Display from "./Display";

const Time = ({time, onGetTime}) => {
    console.log('2. Time');
    return(
        <section className="time count p-5 bg-light text-center">
            <p className="badge badge-dark">2. Get Time</p>
            <Display data={time} />
            <div className="row d-flex justify-content-center mt-5">
                <button className="btn btn-primary btn-lg" onClick={onGetTime}>Get Time ⏲️</button>
                </div>
        </section>
    );
}

export default Time;