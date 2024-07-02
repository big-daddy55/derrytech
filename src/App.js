
import './App.css';
import { Homepage } from './pages/Homepage/Homepage.component';
import { Route, Routes, } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header-component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/shop" element={<ShopPage/>} />
      </Routes>
      {/* <Homepage/> */}

    </div>
  );
}

export default App;
