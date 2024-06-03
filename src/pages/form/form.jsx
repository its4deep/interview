import React, { useState } from "react";
export default function Form() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });
  function handleOnChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleReset(e) {
    setFormState({
      firstName: "",
      lastName: "",
    });
  }
  return (
    <React.Fragment>
      <h1>React JS State form</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          name="firstName"
          value={formState.firstName}
          onChange={handleOnChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={formState.lastName}
          onChange={handleOnChange}
          placeholder="Last Name"
        />
      </form>
      <h2>{`Hi !, ${formState.firstName} ${formState.lastName}`}</h2>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  );
}
