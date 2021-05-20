import React, {useState} from 'react'
import Counter from "./components/Counter";
import Time from './components/Time';
import CurrentTime from './components/CurrentTime';
import SlideShow from './components/SlideShow';

const App = () => {
    /** Set count */
    const [count, setCount] = useState(0);

    const IncNum = () => setCount(count + 1);

    const Reset = () => setCount(0);

    /** Set time */
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const GetTime = () => setTime(new Date().toLocaleTimeString());

    /** Slide Show */
    const slideDefaultProps = {
        count: 1,
        button: {
            text: "Click Me",
            color: "primary"
        },
        style: {
            backgroundColor: "skyblue"
        }
    };

    const[slProp, setSlideShow] = useState(slideDefaultProps);

    const myShow = () => {
        switch (slProp.count) {
            case 1:
                setSlideShow({
                    count: slProp.count + 1,
                    button: {
                        text: "oOOucH 😨",
                        subText: "I dare you to click again",
                        color: "warning"
                    },
                    style: {
                        backgroundColor: "darkcyan"
                    }
                });
                break;
            case 2:
                setSlideShow({
                    count: 0,
                    button: {
                        text: "Aoouw 😠",
                        subText: "Don't click again",
                        color: "danger"
                    },
                    style: {
                        backgroundColor: "magenta"
                    }
                });
                break;
            default:
                setSlideShow(slideDefaultProps);
                break;
        }
    }

    return (
        <>
            <div className="container py-5">
                <Counter count={count} onIncrement={IncNum} onReset={Reset}/>
                <hr />
                <Time time={time} onGetTime={GetTime}/>
                <hr />
                <CurrentTime />
                <hr />
                <SlideShow slProp={slProp} onSlideShow={myShow}/>
            </div>
        </>
    );
}

export default App;