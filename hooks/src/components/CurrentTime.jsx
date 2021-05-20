import React, {useState, useEffect} from "react";
import Display from "./Display";

const CurrentTime = () => {
    /** Current Time */
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }

    /**
     * The useEffect function returns the clearInterval method with the scheduled interval passed into it.
     * As a result, the interval is correctly cleared and no longer triggers every second after the
     * component unmounts from the DOM.
     */
    useEffect(() => {
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section className="current--time p-5 bg-light text-center">
            <p className="badge badge-dark">3. Current Time</p>
            <Display data={currentTime} />
        </section>
    );
}

export default CurrentTime;