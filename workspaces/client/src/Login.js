import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  var temp = {"pass":"123456","email":"he.patel@ufl.edu"};

  function login(){
    let item = {email, password};
    let res1 = email.localeCompare(temp["email"]);
    let res2 = password.localeCompare(temp["pass"]);
    if(res1 == 0 && res2 == 0)
     alert("login seccessfully");
    else{
      alert("Please enter valid email and password");
    }

  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="Enter Email" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <a href="">Forgot Password?</a>
        <Button onClick={login} block size="lg" type="submit" >
          Login
        </Button>
        
      </Form>
    </div>
  );
}