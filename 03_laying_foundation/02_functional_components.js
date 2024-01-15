import React from 'react';
import ReactDOM from 'react-dom';

// React Components
// Class Based Component - OLD
// Functional Component - NEW

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)

// functional component
// if a function is returning a react element => functional component
const HeadingComponent = () => {
    // this will be transpiled into react element 
    return <h1 className='heading'>Namaste React Functional Component</h1>
}

// one and the same thing 
// without return keyword
const HeadingComponent2 = () => (
    <h1 className='heading'>Namaste React Functional Component</h1>
);

// we can also create a nested structure
const HeadingComponent3 = () => (
    <div className='container'>
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<HeadingComponent3/>);