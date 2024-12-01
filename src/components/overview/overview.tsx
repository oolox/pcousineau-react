import React from 'react';
import './overview.css';


const overview = () => {
    return <div className="overview-page">
        <div className="overview-container">
            <div className="overview">
                <div className="category expertise">
                    Expertise
                </div>
                <div className="description">
                    I am an expert web developer who specializes in enterprise grade SaaS, B2B web applications.
                </div>
            </div>
            <div className="overview">
                <div className="category development">
                    Development
                </div>
                <div className="description">
                    I architect, develop and deploy in React and Angular; including, back end heavy
                    integrations (REST, graphQL, node.js, sockets) and front end heavy UI styling and visualizations
                    (D3, ChartJs, HighCharts, Kendo.) I am fluent with html, css, javascript and typescript.
                </div>
            </div>
            <div className="overview">
                <div className="category teams">
                    Impact
                </div>
                <div className="description">
                    My software has been pivotal in the growth and operation of highly funded, high growth
                    startups.<br/><br/>
                    The Plume network operation center is used by global telecom companies (Comcast, Vodafone) to
                    configure and diagnose millions of locations and billions of devices.
                    <br/>
                </div>
            </div>
            <div className="overview">
                <div className="category site">
                    Team
                </div>
                <div className="description">
                    I lead company-wide innovations, create product pipelines, design frameworks and code base
                    standardization.<br/><br/>
                    At Plume, I built a team of high performing developers from 1 to 12+.
                    <br/>
                </div>
            </div>
        </div>
        <div className="site-links">
            <div className="section react">
                <a href="https://github.com/oolox/pcousineau-react" target="_blank"  rel="noreferrer">
                    <img alt='github' src={require('../../assets/icons/icon-github.png')} height={24}/>
                    <img alt='reat' src={require('../../assets/icons/icon-react.png')} height={24}/>
                    <span className='footer-text'>
                        This site developed in React
                    </span>
                </a>
            </div>
            <br/>
            <div className="section angular">
                <a href="https://www.pcousineau.net" target="_blank" rel="noreferrer">
                    <img alt='angular' src={require('../../assets/icons/icon-angular.png')} width={24} height={24}/>
                    <span className='footer-text'>
                        Alternative site in Angular
                    </span>
                </a>
            </div>
        </div>
    </div>
}

export default overview;