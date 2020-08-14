import React from 'react';
import './styles/Home.css';
import CodeBlock from './CodeBlock';
import Sidebar from './Sidebar';
import {OATH_AUTHORISE_CODE, TOKEN_CODE, SIDEBAR_CONTENT} from '../constants/constants'

const Home = () => {
    return(
        <div className="container">
            <Sidebar content={SIDEBAR_CONTENT}/>
            <div className="content">
                <section className="intro">
                    <h1 className="title">UCSD API Documentation</h1>
                    <p className="section-title">Get Your API Key</p>
                    <p className="section-title">API Rate Limits</p>
                </section>
                <section className="oauth">
                    <h1 className="title">OAuth</h1>
                    <p className="section-title">What is OAuth?</p>
                    <p className="section-title">Scopes</p>
                    <p className="section-title">OAuth Workflow</p>

                    <p className="section-title">Authorise</p>
                    <CodeBlock code={OATH_AUTHORISE_CODE} />

                    <p className="section-title">Token</p>
                    <CodeBlock code={TOKEN_CODE} />
                </section>
            </div>
        </div>
    );
}

export default Home;