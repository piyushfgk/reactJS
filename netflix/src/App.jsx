import React from "react";
import "./index.css"
import Header from "./components/Header";
import Card from "./components/Card"
import data from "./data.json";

function App() {
    return (
        <>
            <Header title="list of top 5 netflix series in 2020" />
            <section className="container">
                <div className="cards mt-5 d-flex justify-content-between flex-wrap">
                    {
                        data.map((data, index) => {
                            return <Card key={`c-${index}`} imgSrc={data.imgSrc} title={data.title} content={data.content} linkSrc={data.linkSrc}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default App;