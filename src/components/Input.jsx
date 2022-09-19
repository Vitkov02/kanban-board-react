import React from 'react';
import { useState } from 'react';

const Input = () => {
    const [inputText, setInputText] = useState('');

    function loadIssues() {

    }

    return (
        <div className='input'>
            <input className='input__form'
                type="text"
                placeholder='Enter repo URL'
                value={inputText}
                onChange={e => setInputText(e.target.inputText)}
            />
            <button className='input__btn' onClick={loadIssues}>Load issues</button>
        </div>
    );
};

export default Input;