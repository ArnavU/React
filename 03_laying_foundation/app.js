import React from 'react';
import ReactDOM from 'react-dom';

// traditional way
// const header = React.createElement('h1', {id: "heading"}, "This is HTML from JSX");

// jsx is different from react
// the jsx is is interpreted by the parcel in particular the babel transpiles it so that brwser can understand it
// babel is also a js compiler
const jsxHeader = <h1 className='heading'>This is from jsx and my name is Arnav</h1> // => will be converted to react element

// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)

const jsxHeader2 = (
    <h1 className='title' tabIndex='2'>
        This is sample jsx
    </h1>)

// React Components
// Class Based Component - OLD
// Functional Component - NEW

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(jsxHeader);   