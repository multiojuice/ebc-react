import React from 'react';
import blueJacketBack from '../website_assets/bluejacketback-min.png'
import blueJacketFront from '../website_assets/bluejacketfront-min.png'
import blackJacketBack from '../website_assets/blackjacketback-min.png'
import blackJacketFront from '../website_assets/blackjacketfront-min.png'

import loadable from '@loadable/component'

export default () => {

    const BuyButton = loadable(() => import('./BuyButton.jsx'))

    return (
        <div className="section-content">
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

            <BuyButton id={"7701256536293"}/>
        </div>
    )
}
