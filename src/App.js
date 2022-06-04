import './App.css';
import Apicurrencywatch from "./Components/apicurrencywatch";
import Endpointprivat from "./Endpoint/Endpointprivat";
import EndpointCurrency from "./Endpoint/EndpointCurrency";



function App() {
  return (
    <div className="App">
      <Apicurrencywatch endp={Endpointprivat} endpointConverter={EndpointCurrency}/>
    </div>
  );
}

export default App;
