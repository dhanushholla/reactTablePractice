import React, { useState } from "react";
import './form.css'
const Form = ({ handleAdd }) => {
  const [formDetail, setFormDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "Male",
  });
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      setMessage("Row Added");
      let { fname, lname, email, gender, mobile } = formDetail;
      handleAdd(fname, lname, email, gender, mobile);
      setFormDetails({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        gender: "Male",
      });
      setTimeout(() => setMessage(""), 2000);
    } else {
      setMessage("Please fill out the form correctly.");
    }
  };
  return (
    <div>
      Enter Details for New Row:
      <form onSubmit={handleSubmit}>
        <label for="fname">FirstName:</label>
        <input
          type="text"
          name="fname"
          value={formDetail.fname}
          placeholder="Enter firstname"
          onChange={(e) =>
            setFormDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          required
        />
        <label for="lname">LastName:</label>
        <input
          type="text"
          name="lname"
          value={formDetail.lname}
          placeholder="Enter lastname"
          onChange={(e) =>
            setFormDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formDetail.email}
          placeholder="Enter emailId"
          onChange={(e) =>
            setFormDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          required
        />
        <label for="genderselect">Choose a gender:</label>
        <select
          name="gender"
          value={formDetail.gender}
          id="genderselect"
          onChange={(e) =>
            setFormDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">TransGender</option>
          <option value="Not Disclosing">prefer not to disclose</option>
        </select>
        <label for="fname">MobileNo:</label>
        <input
          type="tel"
          name="mobile"
          value={formDetail.mobile}
          placeholder="Enter 10 digit mobile number"
          onChange={(e) =>
            setFormDetails((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          pattern="/^\d{3}-\d{3}-\d{4}$/"
          required
        />
        <button>Submit</button>
      </form>
      {message ? <div>{message}!!!</div> : ""}
    </div>
  );
};

export default Form;
