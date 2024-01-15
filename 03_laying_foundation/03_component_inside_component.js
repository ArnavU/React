import React from 'react';
import ReactDOM from 'react-dom/client';

// this is react element
const title = (
    <h1>This is Namaste React 🚀</h1>
)

console.log(title);

// this is react component
const Title = () => (
    <h1>This is Namaste React 🚀</h1>
)

let number = 1000;

// component composition
const HeadingComponent = () => (
    <div className='container'>
        {/* title can be an api that can run a js code and can do malicious things. But the jsx sanatizes the code and prevents stealing of data */}
        {title} 
        {Title()} {/* same as <Title/> */}
        <Title/>
        <Title></Title>
        {/* <Title></Title> ==> same as above */}
        <h1>This is the HeadingComponent</h1>
        {/* injectiong js inside jsx */}
        <h1>{number}</h1> 
        <h2>{100+200}</h2>
    </div>
)

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<HeadingComponent/>);