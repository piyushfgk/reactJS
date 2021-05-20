import React from "react";
import Display from "./Display";

const Counter = ({count, onIncrement, onReset}) => {
    console.log('1. Counter');
    return(
        <section className="count p-5 bg-light text-center">
            <p className="badge badge-dark">1. Counter</p>
            <Display data={count} />
            <div className="row d-flex justify-content-center mt-5">
                <button className="btn btn-primary btn-lg mx-3" onClick={onIncrement}>Click Me 👍</button>
                <button className="btn btn-outline-secondary btn-lg mx-3" onClick={onReset}>Reset 👎</button>
            </div>
        </section>
    );
}

export default Counter;