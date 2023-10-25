import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from "./components/Header";
import GoalsComponent from "./components/GoalsComponent";
import NewGoal from "./components/NewGoal";

function App() {
  return (

      <Router>
          <div>
              {/* Define your routes here */}
              <Routes>
                  <Route exact path="/" element={<GoalsComponent />} />
                  <Route path="/NewGoal" element={<NewGoal />} />
              </Routes>
          </div>
      </Router>
    // <div className="App">
    //     {/*<Header />*/}
    //     <div>
    //         <h1>hello</h1>
    //     </div>
    //     {/*<GoalsComponent />*/}
    //     <NewGoal />
    // </div>
  );
}

export default App;
