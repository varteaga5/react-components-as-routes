import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <form>
        <h1>SignUp</h1>
        <div>
          <input type="text" name="name" placeholder="name" />
          <label htmlFor="name">First Name</label>
        </div>
        <div>
          <input type="text" name="lastname" placeholder="lastname" />
          <label htmlFor="lastname">Last Name</label>
        </div>
        <div>
          <input type="email" name="email" placeholder="email" />
          <label htmlFor="email">email</label>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default SignUp;
