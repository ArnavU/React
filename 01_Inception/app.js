// creating element comes from react.development.js
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc"},
    "Hello World from React!"
); // this is the react h1 element/object 

// creating root comes from react-dom.development.js
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);