
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route, Routes, } from 'react-router-dom';

function Hats() {
  return (
    <div>Hats</div>
  )
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/shop/hats" element={<Hats/>} />
      </Routes>
      {/* <Homepage/> */}

    </div>
  );
}

export default App;
