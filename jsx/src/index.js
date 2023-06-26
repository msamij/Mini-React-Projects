import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
  const buttonText = { text: 'Click me' };
  const lableText = 'Enter name:';
  return (
    <div>
      <label className="lable" htmlFor="name">
        {lableText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
