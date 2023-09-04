import { Routes, Route } from "react-router-dom";
import { Navbar, Success, Form } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/form" element={<Form />} />
        <Route path='/success' element={<Success/>} />
      </Routes>
      
      

    </div>
    
  );
}

export default App;

