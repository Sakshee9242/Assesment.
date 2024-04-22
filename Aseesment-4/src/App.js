import './App.css';
import Form from './Form';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Submitted from './Submitted';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/submit' element={<Submitted />}></Route>
        <Route path='/' element={<Form />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
