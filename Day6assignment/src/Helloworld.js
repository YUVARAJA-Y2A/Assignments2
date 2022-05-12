import { useState } from "react";


function Helloworld () {
 const[titlename,setTitlename]=useState("")
    
  
 const changeName = () => {
    if (titlename === "Vanakkam") {
      setTitlename( "Hello Ulagamae" );
    } else {
      setTitlename( "Vanakkam" );
    }
  };

    return (
      <div>
        <br />
        <label>Just Click Me : </label>
        <button onClick={changeName}>Change</button>
        <h2>{titlename}</h2>
      </div>
    );
  
}

export default Helloworld;
