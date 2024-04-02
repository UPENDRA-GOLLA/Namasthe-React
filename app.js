/*
<div id = "parent"><div id="child"><h1> I am h1 tag</h1></div></div>
<div id = "child2"><div id="child"><h1> I am h1 tag</h1></div></div> */

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
