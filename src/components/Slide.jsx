import React from 'react';

export default (props) => {
    console.warn(props)
    return (
        <section ref={props.innerRef} className="stacking-slide fill" style={{backgroundImage:`url(${props.image})`}}>
            {/* <img alt='image' src={props.image}  /> */}
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )
}