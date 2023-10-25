import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
// import Header from "./components/Header";
import GoalsComponent from "./components/GoalsComponent";
import NewGoal from "./components/NewGoal";
import Header from "./components/Header";
import HeaderComb from "./pages/HeaderComb";
import GoalsPage from "./pages/GoalsPage";
import NewGoalsPage from "./pages/NewGoalsPage";
import ReportCardPage from "./pages/ReportCardPage";
import IzmaksasPage from "./pages/IzmaksasPage";
import HomePage from "./pages/HomePage";

function App() {
  return (

      <Router>
          <div>
              <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/Goals" element={<GoalsPage />} />
                  <Route path="/NewGoal" element={<NewGoalsPage />} />
                  <Route path="/ReportCard" element={<ReportCardPage />} />
                  <Route path="/Izmaksas" element={<IzmaksasPage />} />
                  <Route path="/" element={<HeaderComb />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
