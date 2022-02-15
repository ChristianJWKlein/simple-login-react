import { useState } from "react";

function FormTest() {
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted. Thanks " + firstName);
  };

  return (
    <>
      <h1>Aloha</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FirstName: &nbsp;
          <input type="text" value={firstName} onChange={handleFirstName} />
        </label>
      </form>
    </>
  );
}

export default FormTest;
