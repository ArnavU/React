import React from 'react';
import ReactDOM from 'react-dom/client';

/*
    React Element(object) => HTML(Browser Understands)

*/

// ----------------------------- root -----------------------------
const parent = React.createElement(
    "div", 
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" }, 
        [ React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag") ]
    )
)

console.log(parent);

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent); // will overwrite/replace parent element's children


// ------------------------- root2 -------------------------
let parent2 = React.createElement(
    "div", 
    {id: "parent2"},
    [ React.createElement(
        "div", 
        { id: "child1"}, 
        [ React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
    ), 
    React.createElement(
        "div", 
        { id: "chid2"},
        [ React.createElement("h1", {}, "I'm an h1 tag"), React.createElement('h2', {}, "I'm an h2 tag")]
    )
    ]
)

let root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(parent2);