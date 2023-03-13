import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Arena from './components/pages/Arena';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<>
            <Navbar/>
          <AppContainer />
          </>}>
            <Route index element={<Home />} />
            <Route path="/Arena" element={<Arena />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
