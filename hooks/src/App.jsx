import React, {useState} from 'react'
import Display from "./components/Display";

const App = () => {
    /** Set count */
    const [count, setCount] = useState(0);

    const IncNum = () => setCount(count + 1);

    const Reset = () => setCount(0);

    /** Set time */
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const GetTime = () => setTime(new Date().toLocaleTimeString());

    /** Current Time */
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <>
            <div className="container py-5">
                <section className="count p-5 bg-light text-center">
                    <p className="badge badge-dark">1. Counter</p>
                    <Display data={count} />
                    <div className="row d-flex justify-content-center mt-5">
                        <button className="btn btn-primary btn-lg mx-3" onClick={IncNum}>Click Me 👍</button>
                        <button className="btn btn-outline-secondary btn-lg mx-3" onClick={Reset}>Reset 👎</button>
                    </div>
                </section>
                <hr />
                <section className="time count p-5 bg-light text-center">
                    <p className="badge badge-dark">2. Get Time</p>
                    <Display data={time} />
                    <div className="row d-flex justify-content-center mt-5">
                        <button className="btn btn-primary btn-lg mx-3" onClick={GetTime}>Get Time ⏲️</button>
                    </div>
                </section>
                <hr />
                <section className="current--time p-5 bg-light text-center">
                    <p className="badge badge-dark">3. Current Time</p>
                    <Display data={currentTime} />
                </section>
            </div>
        </>
    );
}

export default App;