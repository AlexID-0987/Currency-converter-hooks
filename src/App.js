import './App.css';
import Apicurrencywatch from "./Components/apicurrencywatch";
import Endpointprivat from "./Endpoint/Endpointprivat";
import GlobalConverterState from "./State/StateConverterApi";


function App() {
  return (
    <div className="App">
      <Apicurrencywatch endp={Endpointprivat} state={GlobalConverterState}/>
    </div>
  );
}

export default App;
