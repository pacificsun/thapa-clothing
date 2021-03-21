import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [signIn, setSignIn] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO :: Send form data to backend
    setSignIn({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignIn({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={signIn.email}
          handleChange={handleChange}
          label="email"
          required
        />
        {/* <label>Email</label> */}
        <FormInput
          name="password"
          type="password"
          label="password"
          value={signIn.password}
          handleChange={handleChange}
          required
        />
        {/* <label>Password</label> */}
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
