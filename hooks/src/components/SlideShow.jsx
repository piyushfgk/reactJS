import React from "react";

const SlideShow = (params) => {
    console.log('3. Slide Show');
    return(
        <section className="slide--show p-5 text-center" style={params.slProp.style}>
            <p className="badge badge-dark">4. Slide Show</p>
            <div className="d-flex justify-content-center">
                <button onClick={params.onSlideShow} className={`btn btn-${params.slProp.button.color} btn-lg`}>{params.slProp.button.text}</button>
            </div>
            {
                params.slProp.button.hasOwnProperty('subText') ? <p className="badge badge-light">{params.slProp.button.subText}</p> : ''
            }
        </section>
    );
}

export default SlideShow;