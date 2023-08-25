import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// {excercise.map((user, index) => {
//   return <option>
//   key = {index}
//   value = {user.username}
// </option>
// })}

function CreateExercise(props) {
  const [date, setDate] = useState(new Date());
  const [excercise, setExcercise] = useState([{
    username: "Duela",
    description: "",
    duration: 0,
    users: []
}]);
  function handleChange(e) {
    const { name, value } = e.target;
    setExcercise(function prevExcercise() {
      return [{
        ...prevExcercise,
        [name]: value
      }];
    });
  }

  function submitExercise(e) {
    setExcercise([{
      username: "Taye",
      description: "",
      duration: ""
    }]);
    e.preventDefault();
    //console.log(excercise);
    //window.location = '/'; // This is the same as res.redirect */ 
  }

//console.log(submitExercise);
  return (
    <div className=" col-auto  justify-content-center">
      <h3> You are on the Create Excercises  </h3>
      <form >
        <div className="form-outline mb-4 ">
          <label>Username:  </label>
          <select required className="form-control" onChange={handleChange}
            value={excercise.username} >
            <option value="">--Please choose an option--</option>    
            {
              excercise.map((user, index) =>{
                return (
                  
                  <option key={index} value = {user.username}>
                  {user.username}
                  
                  </option>
                )
              })
            }   
          </select>
        </div>
        <div className="form-outline mb-4">
          <label>Description:  </label>
          <input type="text" required className="form-control" onChange={handleChange}
            value={excercise[0].description} />
        </div>
        <div className="form-outline mb-4">
          <label>Duration (in mins):  </label>
          <input type="text" className="form-control" onChange={handleChange}
      
            value={excercise[0].duration} />
        </div>
        <div className="form-outline mb-4 col-auto-auto">
          <label>Date (in mins):  </label>
          <div>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
        </div>
        <div className="form-outline mb-4 col-auto-auto">
          <button type = "submit" className="btn btn-primary" onClick={submitExercise} > 
          create excercise
          </button>
        </div>
      </form>
    </div>

  )
}
export default CreateExercise;
