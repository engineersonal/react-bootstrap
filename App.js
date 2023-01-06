import React from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement('h1', {id: "heading", key: "1"}, 'React bootstrap using custom CRA through Parcel')
const Heading1 = () => (
  <h1 id="heading" key="1">
    {"React bootstrap using custom CRA through Parcel"}
  </h1>
);
// const heading2 = React.createElement('h2', {id: "subheading", key: "2"}, 'By Sonal Sharma')
const Heading2 = () => {
  return (
    <h2 id="subheading" key="2">
      {"By Sonal Sharma"}
    </h2>
  );
};
// const container = React.createElement('div', {id: 'container'}, [heading1, heading2])
const Container = () => (
  <div id="container">
    <Heading1 />
    <Heading2 />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
