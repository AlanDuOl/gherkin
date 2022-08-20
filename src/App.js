import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Alert from './pages/alert';
import Display from './pages/display';
import Background from './pages/background';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button><Link to='/Alert'>Alert</Link></button>
          <button><Link to='/'>Background</Link></button>
          <button><Link to='/Display'>Display</Link></button>
        </nav>
        <main>
          <Routes>
            <Route exact path="/Alert" element={<Alert />} />
            <Route exact path="/" element={<Background />} />
            <Route exact path="/Display" element={<Display />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
