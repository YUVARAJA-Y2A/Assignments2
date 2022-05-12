import { useState } from "react";
import "./ticketbooking.css";

function Ticketbooking() {
  const [name, setname] = useState();
  const [age, setage] = useState();
  const [gender, setgender] = useState();
  const [source, setsource] = useState();
  const [destination, setdestination] = useState();
  const [submit, setsubmit] = useState(false);
  const [checkdecision, setcheckdecision] = useState(false);
  const [checked] = useState(false);
  const [checkboxvalue, setcheckboxvalue] = useState();

  const handleCheckClick = () => {
    setcheckdecision(!checkdecision);
  };
  const handleSubmit = () => {
    if (source === "" && destination === "") {
      alert("Source and Destination should not be empty");
    } else if (source === destination) {
      alert("Source and Destination should not be same");
    } else if (checked === false) {
      setcheckboxvalue("Disagree");
      setsubmit(true);
    } else {
      setcheckboxvalue("Agree");
      setsubmit(true);
    }
  };

  return (
    <div>
      <div>
        {!submit && (
          <div class="form">
            <div class="div-name">
              <label>Name of the Passenger</label>
              <input
                type="text"
                class="input-name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
            </div>
            <div class="div-age">
              <label>Age</label>
              <input
                type="number"
                class="input-age"
                name="age"
                value={age}
                onChange={(e) => setage(e.target.value)}
              ></input>
            </div>
            <div class="div-gender">
              <label>Gender</label>
              <span class="span-gender">
                <input
                  type="radio"
                  name="gender"
                  onChange={(e) => setgender(e.target.value)}
                  value={"Male"}
                ></input>
                <label>Male</label>
                <input
                  type="radio"
                  class="radio-female"
                  name="gender"
                  onChange={(e) => setgender(e.target.value)}
                  value={"Female"}
                ></input>
                <label>Female</label>
              </span>
            </div>
            <div class="div-source">
              <label>Source</label>
              <select
                class="dropdown-source"
                name="source"
                onChange={(e) => setsource(e.target.value)}
                value={source}
              >
                <option></option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div class="div-destination">
              <label>Destination</label>
              <select
                class="dropdown-destination"
                name="destination"
                onChange={(e) => setdestination(e.target.value)}
                value={destination}
              >
                <option></option>
                <option>Chennai</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
              </select>
            </div>
            <div class="div-termsandconditions">
              <input
                type="checkbox"
                checked={checkdecision}
                onChange={handleCheckClick}
              ></input>
              <label class="label-termsandconditions">
                I Agree to all the Terms and Conditions
              </label>
            </div>
            <div class="div-submit">
              <button onClick={handleSubmit} class="button-submit">
                Submit
              </button>
            </div>
          </div>
        )}
        {submit && (
          <div>
            <h2>Ticket Booking</h2>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender:{gender}</div>
            <div>
              Travelling from {source} to {destination}
            </div>
            <div>I {checkboxvalue} to the terms and conditions</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticketbooking;
