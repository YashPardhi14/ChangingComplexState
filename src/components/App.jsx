import React, { useState } from "react";

function App() {
  // const [fName, setFname] = useState("");
  // const [lName, setLname] = useState("");
  // function handleFirstName(event) {
  //   setFname(event.target.value);
  // }

  // function handleLastName(event) {
  //   setLname(event.target.value);
  // }

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    //using deconstructor.....
    const { value, name } = event.target;
    // console.log(inputName);
    // console.log(newValue);

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: value.lName
        };
      } else if (name === "lName") {
        return {
          fName: value.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          // value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          // value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
