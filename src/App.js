import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './page/Homepage';
import Video from './page/Video';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/video/:id" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
