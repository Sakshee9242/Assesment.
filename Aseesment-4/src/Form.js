import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// here is functional component
function Form() {
  //   useNavigate hook for navigation
  const navigate = useNavigate();

  // useState hook for change the state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [postcode, setPostcode] = useState("");
  const [errors, setErrors] = useState({});

  //  this is the function for handle the submition of form
  const handleSubmit = (e) => {
    e.preventDefault();
    let validate = {
      // This is the condition for checking if any form field is empty. If any form field is empty, this condition is executed; otherwise, this code does not execute.

      email:
        email === ""
          ? "Enter Email"
          : !/\S+@\S+\.\S+/.test(email)
          ? "Invalid Email"
          : "",
      password: password === "" ? "Enter Password" : "",
      rpassword:
        rpassword === ""
          ? "Please Retype Password"
          : password !== rpassword
          ? "Passwords do not match"
          : "",
      fname: fname === "" ? "Enter First Name" : fname.length<=4 ? "First Name Should be greater than 4 character" : "" ,
      lname: lname === "" ? "Enter Last Name" : "",
      number:
        number === ""
          ? "Enter Mobile Number"
          : !/^\d{10}$/.test(number)
          ? "Mobile Number should be 10 digits"
          : "",
      address: address === "" ? "Enter Address" : "",
      town: town === "" ? "Enter Your Town" : "",
      region: region === "" ? "Enter Region" : "",
      postcode: postcode === "" ? "Enter Postcode" : "",
    };

    // when every form field is complete then this code executed and form submitted successfully.

    if (Object.keys(validate).every((key) => validate[key] === "")) {
      toast.success("Form Submitted SuccessFull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/submit");
      }, 6100);
    }

    setErrors(validate);
  };
  return (
    // Form is started from here

    <div className="main-form container">
      <h5 className="text-dark p-2 mb-1">Register Here</h5>
      <h3 className="text-dark fw-bold mb-2">USER REGISTRATION</h3>
      <div className="row shadow-lg text-light fw-medium rounded-3 form">
        <form onSubmit={handleSubmit}>
          <div className="col-12 text-start col-lg-12 my-2 p-3">
            <div class="row row-gap-2">
              {/* this is email section  */}
              <div className="col-lg-6">
                <label>Email *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
              {/* this is password section  */}

              <div className="col-lg-6">
                <label>Password *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.password}</span>
              </div>
              {/* this is retype password section  */}

              <div className="col-lg-6">
                <label>Retype Password *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={rpassword}
                  onChange={(e) => {
                    setrPassword(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.rpassword}</span>
              </div>
              {/* this is fname section  */}

              <div className="col-lg-6">
                <label>First Name *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.fname}</span>
              </div>
              {/* this is lname section  */}

              <div className="col-lg-6">
                <label>Last Name *</label>
                <input
                  type="text"
                  className="form-control  p-2"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.lname}</span>
              </div>
              {/* this is phone number section  */}

              <div className="col-lg-6">
                <label>Phone Number *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.number}</span>
              </div>
              {/* this is Address section  */}

              <div className="col-lg-6">
                <label>Address *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.address}</span>
              </div>
              {/* this is Town section  */}

              <div className="col-lg-6">
                <label>Town *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={town}
                  onChange={(e) => {
                    setTown(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.town}</span>
              </div>
              {/* this is region section  */}

              <div className="col-lg-6">
                <label>Region *</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.region}</span>
              </div>
              <div className="col-lg-6">
                {/* this is Postcode section  */}

                <label>Postcode / Zip</label>
                <input
                  type="text"
                  className="form-control p-2"
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value);
                  }}
                />
                <span className="text-danger">{errors.postcode}</span>
              </div>
              {/* this is country section  */}

              <div className="col-lg-6">
                <label className="">Country</label>
                <select className="form-select p-2">
                  <option>United Kingdom</option>
                  <option>United State Amirates</option>
                  <option>India</option>
                  <option>Algeria</option>
                  <option>Austria</option>
                  <option>Bahamas</option>
                  <option>Angola</option>
                  <option>Cuba</option>
                  <option>Belgium</option>
                </select>
              </div>
              <div className="col-lg-6 button">
                <input
                  type="submit"
                  className="btn btn-dark w-100 p-2"
                  value={"Register"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    // form is ended
  );
}

export default Form;
