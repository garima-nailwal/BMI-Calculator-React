import "./App.css";
import react, {useState} from "react";

function App() {

  //state define
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(" ");
  const [message, setMessage] = useState(" ");

  //logic for calculating BMI
  //arrow fx used
  let calcbmi = (e) => {

    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid values for weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed());

      //message logic
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMessage("You are healthy");
      } else if (bmi > 25 && bmi <= 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  }

  //reload function
  let reload = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcbmi}> 
          <div>
            <label htmlFor="weight">Weight (lbs):</label>
            <input
              type="number"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="weight">Height (in):</label>
            <input
              type="number"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button className="btn" type="submit">
              Calculate
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h2>Your BMI is : {bmi}</h2>
            <p> {message} </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
