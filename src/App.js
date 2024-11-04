import './App.css';
import Template4 from './Template4';
import Template5 from './Template5';
import Template6 from "./Template6";
import Template7 from "./Template7";
import test from "../src/test.json"

function App() {
  return (
    <>
      {/* <Template4 data={test} /> */}
      {/* <Template5 data={test}/>*/}
      {/*<Template6 data={test}/> */}
      <Template7 data={test} />  
    </>
  );
}

export default App;
