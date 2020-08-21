import React from 'react';
import { Link } from 'react-router-dom';


function SignIn() {
return(
  <div className="container" style={{paddingTop: '5rem', paddingLeft: "4rem", width: "20rem"}}>
    <form className="sign">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">
      <Link className="nav-link" to="/prod1" role="tab" data-toggle="tab">Submit</Link></button>
    </form>
  </div>
)
}
export default SignIn;