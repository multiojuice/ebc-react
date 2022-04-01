import React from 'react';
import background from '../website_assets/still.JPG'
import blueJacketBack from '../website_assets/bluejacketback.png'
import blueJacketFront from '../website_assets/bluejacketfront.png'
import blackJacketBack from '../website_assets/blackjacketback.png'
import blackJacketFront from '../website_assets/blackjacketfront.png'



export default ({innerRef}) => {
    return (
        <header ref={innerRef} className="full-section" style={{ background: `url(${background}) no-repeat center center fixed`, backgroundSize: 'cover'}}>
            <div className="section-content">
                <h1>Shop</h1>
                <div className="product-container">
                    <span>
                        <img src={blueJacketFront}/>
                    </span>
                    <span>
                        <img src={blueJacketBack} />
                    </span>
                </div>

                <div className="product-container">
                    <span>
                        <img src={blackJacketFront}/>
                    </span>
                    <span>
                        <img src={blackJacketBack} />
                    </span>
                </div>
            </div>
        </header>
    )
}
