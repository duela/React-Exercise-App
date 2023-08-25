import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import NoPage from "./components/no-page.component";



function App() {
  // const [exerc, setExerc] = useState([])

  // function addExercise(newExcer){
  //   setExerc(prevValues =>{
  //     return 
  //       [
  //         ...prevValues, 
  //         newExcer 
  //       ]   
  //   });
  // }

  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
          {/* Route helps map specific url paths to different components that will load on the page
          onAddExcercise = {addExercise}  */}
          <Route path="/" index element={<ExercisesList />} /> {/*  // index specifies this route as the default route for the parent route which is '/' */}
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          {/* {exerc.map((user, index) => {
            return <option>
              key = {index}
              value = {user.username}
            </option>
          })}
           */}
          <Route path="/user" element={< CreateUser />} />
          <Route path="*" element={<NoPage />} /> {/*  //This will act as a catch all for undefined URLs. This is great for a 404 error page */}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
