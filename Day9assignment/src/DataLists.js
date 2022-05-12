import React, { useState } from "react";
import "./datalists.css";

const user = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];

function DataLists() {
  const [submit, setsubmit] = useState(false);

  const handleclear = () => {
    setsubmit(true);
    setid("");
    // const [name, setname] = useState("");
    // const [age, setage] = useState("");
    // const [image, setimage] = useState("");
  };

  return (
    <body className="main">
      {!submit && (
        <div>
          <div className="birthday">
            <h4 class="birthday-count">{user.length} Birthdays Today</h4>
            {user.map((users) => (
              <div class="picture" key={users.id}>
                <img
                  className="displaying-picture"
                  alt=""
                  src={users.image}
                  height="100"
                  width={100}
                />
                <span class="name-age">
                  <h6>{users.name}</h6>
                  <p>{users.age} years</p>
                </span>
              </div>
            ))}
            <div>
              <button className="clear-all" onClick={handleclear}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
      {submit && (
        <div>
          <label>Zero Birthdays Today</label>
        </div>
      )}
    </body>
  );
}
export default DataLists;
