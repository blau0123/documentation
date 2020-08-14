import React, {useState, useEffect} from 'react';
import Prism from 'prismjs';
import './styles/prism.css'

const CodeEditor = props => {
    const {content, language} = props;

    // Highlight when component mounts or content/language changes
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    useEffect(() => {
        Prism.highlightAll();
    }, [content, language]);

    return (
        <div className="code-edit-container">
            <pre className="code-output">
                <code className={`language-${language}`}>{content}</code>
            </pre>
        </div>
    );
}

export default CodeEditor;
