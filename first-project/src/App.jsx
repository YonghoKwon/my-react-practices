import Child from "./Child.jsx";
import {ArrowFunctionComp, ClassComp, FunctionComp} from "./Components.jsx";

function Hello() {
  return <h1>Hello, world!</h1>
}

function App() {
  return (
    <>
      <Hello />
      <h2>Hello, world!</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp />
    </>
  )
}

export default App
