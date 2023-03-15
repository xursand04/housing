
import Navbar from ".//components/Navbar";
import Router from ".//Routes/routes";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{marginTop:'80px'}}>
      <Router/>
      </div>

    </div>
  );
}

export default App;
