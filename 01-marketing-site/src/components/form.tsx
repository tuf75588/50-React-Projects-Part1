import React from 'react';

function SignUpForm() {
  return (
    <div className="outer-form-container">
      <form className="form-control">
        <label htmlFor="Name">username</label>
        <div><input type="text" name="name" id="name" placeholder="choose a username" /></div>
        <label htmlFor="Name">email</label>
        <div><input type="email" name="email" id="email" placeholder="email" /></div>
        <label htmlFor="Name">password</label>
        <div><input type="password" name="password" id="password" placeholder="password" /></div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div >
  )
}

export default SignUpForm