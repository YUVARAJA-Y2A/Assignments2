import { useState } from "react";
import "./student.css";

function Student() {
  const [name] = useState("Pranav");
  const [age] = useState(22);

  return (
    <div>
      <p>
        My name is <span class="student-name">{name}</span> and my age is{" "}
        <span class="student-age">{age}</span>
      </p>
    </div>
  );
}
export default Student;
