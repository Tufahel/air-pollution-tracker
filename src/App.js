import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Pollutions from './components/Pollutions';
import Regions from './components/Regions';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/pollution" element={<Pollutions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
