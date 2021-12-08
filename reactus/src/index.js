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

const FunctionComponent = ({ test2 }) => {
  return (
    <div>
      <h3 onClick={test2} id="one">
        Heading
      </h3>
      <h1>Hello Reactus 2</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    const { test3 } = this.props;
    return (
      <div onClick={test3}>
        <h1>Hello Reactus 2</h1>
        <h1>Age = {age}</h1>
      </div>
    );
  }
}

function App({ test1, ...rest }) {
  return (
    <div>
      <h1>{test1}</h1>
      <isBefore />
      <FunctionComponent {...rest} />
      <hr />
      <ClassComponent {...rest} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App
      test1={1}
      test2={() => (document.getElementById("one").innerHTML = "here i am")}
      test3={() => console.log("test 3")}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
