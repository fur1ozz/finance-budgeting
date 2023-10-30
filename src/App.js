import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import GoalsPage from "./pages/GoalsPage";
import NewGoalsPage from "./pages/NewGoalsPage";
import ReportCardPage from "./pages/ReportCardPage";
import IzmaksasPage from "./pages/IzmaksasPage";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

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
                  {/*<Route path="/" element={<HeaderComb />} />*/}
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<Register />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
