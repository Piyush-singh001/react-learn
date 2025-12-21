import React from "react";
import { useState } from "react";

const formhandaling = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let formSubmit = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    console.log("form submitted");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <label>Name :</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          name="name"
        />
        <br />
        <label>Age :</label>
        <input type="number" name="age" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default formhandaling;
