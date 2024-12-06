import './App.css';
import Template1 from './Template1';
// import Template2 from './Template2';
// import Template3 from "./Template3";
// import Template4 from "./Template4";
import test from "../src/test.json"

function App() {
  return (
    <>
      <Template1 data={test} />
    </>
  );
}

export default App;
