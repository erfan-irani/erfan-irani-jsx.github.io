import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const step2 = <h2>supra</h2>;
const step1 = <div>
    {step2}
    hello world
    <p style={{ backgroundColor: "blue", color: "white" }} className='box1'>erfan irani</p>

    {4 + 2}
</div>
root.render(
    step1
);

