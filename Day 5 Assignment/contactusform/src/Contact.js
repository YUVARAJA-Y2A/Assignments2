import { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="table">
          <table>
            <div class="title">
              <h1>Contact Us</h1>
            </div>
            <tr>
              <td>
                <label>First Name</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Last Name</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>

            <tr>
              <td>
                <label>Email</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Business Phone</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>

            <tr>
              <td>
                <label>Company Name </label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Job Title </label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <label>Street 1</label>
              <br />
              <input type="text" size={66}></input>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <label>City</label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>State/Province</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>ZIP/Postal code </label>
                <br />
                <input type="text" size={30}></input>
              </td>
              <td>
                <label>Country/Region</label>
                <br />
                <input type="text" size={30}></input>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <label>Topic</label>
                <br />
                <input type="text" size={66}></input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Contact;
