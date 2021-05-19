import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    const IncNum = () => setCount(count + 1);

    const Reset = () => setCount(0);

    return (
        <>
            <div className="container">
                <h1 className="h1 text-center" style={{fontSize: "5em"}}>{count}</h1>
                <div className="row d-flex justify-content-center mt-5">
                    <button className="btn btn-primary btn-lg mx-3" onClick={IncNum}>Click Me</button>
                    <button className="btn btn-outline-secondary btn-lg mx-3" onClick={Reset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default App;