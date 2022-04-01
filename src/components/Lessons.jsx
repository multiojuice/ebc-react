import React from 'react';
import background from '../website_assets/brickteaching.jpg'


export default ({innerRef}) => {
    return (
        <header ref={innerRef} className="full-section" style={{ background: `url(${background}) no-repeat center center fixed`, backgroundSize: 'cover'}}>
            <div className="section-content">
                <h1>Lessons</h1>
            </div>
        </header>
    )
}
