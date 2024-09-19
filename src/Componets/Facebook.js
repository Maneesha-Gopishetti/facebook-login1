import React, { useState } from "react";
import "../Componets/Facebook.css";

function Facebook() {
  const [username, setUsername] = useState("");
const [errorMessage, setErrorMessage] = useState(false);
const [uoutput, setUoutput] = useState("");
const [output, setOutput] = useState("");


  const validate =(e)=>
  {
    e.preventDefault();
    
    if(username==="")
    {
      setErrorMessage(true);
      setUoutput("");
      
    }
    else
    {
      setErrorMessage(false);
      setUsername("")
      setUoutput(`Username: ${username}`); 
    }
  }

  const handlleUsernameChange = (event) =>
  {
    setUsername(event.target.value);
    setErrorMessage(false);
  }

  return (
    <>
      <div className="container-fluid ">
        <center className="conttt">
           <h5 className="text-primary fonsiz">Face book</h5>
        </center>
        <div className="cont border p-5  ">
          <form onSubmit={validate}>


            <input type="uername " placeholder="Enter you Email" className="w-100 p-3 form-control"  value={username} onChange={handlleUsernameChange} />
            {
              errorMessage===false&& username.length>=0?
              (
                <p className="">{username}</p>
              ):
              (
                <p className="text-danger">Enter a valid Email</p>
              )
            }
            <br />




          
            <input type="password" placeholder="Password" className="w-100 p-3 form-control"/>
            <br />
            <br />






            <button className="btn btn-primary w-100 p-3">Submit</button>
          </form>
          <div className="out">
                <div className=" p-5">
                  {uoutput && <p className="output">{uoutput}</p>}
                  {output && <p className="output">{output}</p>}
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

export default Facebook;


