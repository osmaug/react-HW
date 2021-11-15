import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const age = 15;

// const ReactElement = (
//   <div>
//     <h1>Hello Reactus 2</h1>
//     <h1>Age = {age}</h1>
//   </div>
// );

const FunctionComponent = () => {
  return (
    <div>
      <h1>Hello Reactus 2</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Reactus 2</h1>
        <h1>Age = {age}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent />
    <hr />
    <ClassComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
