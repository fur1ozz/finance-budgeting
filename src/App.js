import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
// import Header from "./components/Header";
import GoalsComponent from "./components/GoalsComponent";
import NewGoal from "./components/NewGoal";
import Header from "./components/Header";
import HeaderComb from "./pages/HeaderComb";

function App() {
  return (

      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<GoalsComponent />} />
                  <Route path="/NewGoal" element={<NewGoal />} />
                  <Route path="/Header" element={<HeaderComb />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
