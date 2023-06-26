import React, { useState } from 'react';
import DropDown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Transalte = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={event => setText(event.target.value)} />
        </div>
      </div>
      <DropDown label="Select a language" selected={language} onSelectedChange={setLanguage} options={options} />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Transalte;
