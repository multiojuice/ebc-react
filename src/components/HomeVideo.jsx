import React from 'react';
import background from '../website_assets/gage.JPG'
import logo from '../website_assets/swimmersEBCblack.png'

const generateHeader = (sections) => {

    const handler = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

    const section_links = sections.map(section => {
        return (
            <button key={`${section.name}`}className="nav-button" onClick={() => handler(section.ref)}>{section.name}</button>
        )
    })

    return section_links
}

export default ({sections, innerRef}) => {
    return (
        <header ref={innerRef} className="full-section" style={{ background: `url(${background}) no-repeat center center fixed`, backgroundSize: 'cover'}}>
            <div className="section-content">
                <img src={logo} style={{height: "100px"}}/>
                <div className="nav-bar">
                    {generateHeader(sections)}
                </div>
            </div>
        </header>
    )
}
