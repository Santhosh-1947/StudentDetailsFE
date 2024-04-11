import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import AddStudent from "./component/Student/AddStudent";
import EditStudent from "./component/Student/EditStudent";
import StudentProfile from "./component/Student/StudentProfile";
import StudentsView from "./component/Student/StudentsView";
import NavBar from "./component/common/NavBar";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <main className="container mt-5">
     
      
      <Router>
      <NavBar /> 
        <Routes>
          <Route exact
           path="/" 
           element={<Home />}>
           </Route>
          <Route exact
          path="/view-students" 
          element={<StudentsView />}>
          </Route>
          <Route exact
          path="/add-students" 
          element={<AddStudent />}>         
          </Route>
          <Route exact
          path="/edit-student/:id" 
          element={<EditStudent />}>         
          </Route>
          <Route exact
          path="/student-profile/:id" 
          element={<StudentProfile />}>         
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
