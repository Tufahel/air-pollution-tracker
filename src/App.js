import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';
import Pollutions from './components/Pollutions';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/pollution" element={<Pollutions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
