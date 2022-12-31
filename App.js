import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement('h1', {id: "heading", key: "1"}, 'React bootstrap using custom CRA through Parcel')
const heading2 = React.createElement('h2', {id: "subheading", key: "2"}, 'By Sonal Sharma')
const container = React.createElement('div', {id: 'container'}, [heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)