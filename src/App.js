import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
