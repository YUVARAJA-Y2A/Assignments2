import { useState } from "react";
import "./app.css";
import Ticketbooking from "./Ticketbooking";
function App() {
  const [title, settitle] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [submit, setsubmit] = useState(false);
  const [agreed, setagreed] = useState(false);
  const [warning, setwarning] = useState("");
  const [pwd, setpwd] = useState("");
  const [pwdval, setpwdval] = useState(false);

  const handleRegister = () => {
    if (password === "" && confirmpassword === "") {
      setpwd("*Please should not be empty");
      setpwdval(true);
      setsubmit(false);
    } else if (password !== confirmpassword) {
      setpwd("*Password and Confirm Password is mismatch");
      setsubmit(false);
      setpwdval(true);
    } else if (agreed === false) {
      setwarning("*Please accept the terms and Conditions");
      setpwdval(false);
    } else {
      setsubmit(true);
    }
  };
  const handleCheckClick = () => {
    setagreed(!agreed);
  };

  const handleReset = () => {
    settitle("");
    setfname("");
    setlname("");
    setdate("");
    setemail("");
    setpassword("");
    setconfirmpassword("");
  };

  return (
    <div>
      <div>
        <div>
          {!submit && (
            <div class="form">
              <div class="row-1">
                <div class="div-title">
                  <label class="label-title">Title</label>
                  <div>
                    <select
                      class="title-dropdown"
                      name="title"
                      value={title}
                      onChange={(e) => settitle(e.target.value)}
                    >
                      <option></option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </select>
                  </div>
                </div>
                <div class="div-firstname">
                  <label class="label-firstname">First Name </label>
                  <div>
                    <input
                      type="text"
                      class="input-firstname"
                      name="fname"
                      value={fname}
                      onChange={(e) => setfname(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div class="div-lastname">
                  <div>
                    <label class="label-lastname">Last Name</label>
                  </div>
                  <input
                    type="text"
                    class="input-lastname"
                    name="lname"
                    value={lname}
                    onChange={(e) => setlname(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="row-2">
                <div class="div-dateofbirth">
                  <div>
                    <label class="label-dateofbirth">Date of Birth</label>
                  </div>
                  <input
                    type="date"
                    class="input-dateofbirth"
                    name="date"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  ></input>
                </div>
                <div class="div-email">
                  <div>
                    <label class="label-email">Email</label>
                  </div>
                  <input
                    type="email"
                    class="input-email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="row-3">
                <div class="div-password">
                  <div>
                    <label class="label-password">
                      Password<label class="warning-message">*</label>
                    </label>
                  </div>
                  <input
                    type="password"
                    class="input-password"
                    name="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  ></input>
                </div>
                <div class="div-confirmpassword">
                  <div>
                    <label class="label-confirmpassword">
                      Confirm Password<label class="warning-message">*</label>
                    </label>
                  </div>
                  <input
                    type="password"
                    class="input-confirmpassword"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={(e) => setconfirmpassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div class="div-checkbox">
                <p class="warning-message">{pwdval && pwd}</p>
                <input
                  type="checkbox"
                  onChange={handleCheckClick}
                  checked={setagreed}
                ></input>
                <label>
                  Accept Terms & Conditions
                  <label class="warning-message">*</label>
                </label>
                <p class="warning-message">{!agreed && warning}</p>
              </div>
              <div class="div-buttons">
                <button class="register-button" onClick={handleRegister}>
                  Register
                </button>
                <button class="reset-button" onClick={handleReset}>
                  Reset
                </button>
                <label class="info">
                  (<label class="warning-message">*</label>) Fields indicative
                  are mandatory
                </label>
              </div>
            </div>
          )}
        </div>

        {submit && (
          <div>
            <h2>Registeration Form</h2>
            Name : {title + fname + lname}
            <br />
            Date of Birth : {date}
            <br />
            Email : {email}
            <br />I Agreed to the Terms & Conditions
          </div>
        )}
      </div>
      <Ticketbooking />
    </div>
  );
}

export default App;
