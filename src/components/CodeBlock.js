import React, {useState} from 'react';
import './styles/CodeBlock.css';
import {HEADER_COLOR, HEADER_HOVER_COLOR} from '../constants/constants'
import CodeEditor from './CodeEditor';

const CodeBlock = props => {
    // If type == 0, show python; if type == 1, show js
    const [type, setType] = useState(0);
    const {code} = props;

    const codeBlock = lang => (
        <CodeEditor content={code[lang]} language={lang} />
    );

    return(
        <div className="code-block-container">
            <div className="header">
                <div className="choice-btn" onClick={() => setType(0)}
                    style={{backgroundColor: type === 0 ? HEADER_HOVER_COLOR : HEADER_COLOR}}>
                    <p>Python</p>
                </div>
                <div className="choice-btn" onClick={() => setType(1)} 
                    style={{backgroundColor: type === 1 ? HEADER_HOVER_COLOR : HEADER_COLOR}}>
                    <p>Javascript</p>
                </div>
            </div>
            <div className="code-container">
            {
                type === 0 ? codeBlock('python') : codeBlock('javascript')
            }
            </div>
        </div>
    )
}

export default CodeBlock;