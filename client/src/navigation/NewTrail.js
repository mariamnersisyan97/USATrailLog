import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";


function NewTrail({ user, trail }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [miles, setMiles] = useState("");
  const [state, setState] = useState("");
  ///////////////////////////////////////////////////////////
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/trails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          location,
          imageurl,
          miles,
          state,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          history.push("/trails");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });


    }
  return (
    <>
    <h2>Create Trail</h2>
    <form onSubmit={handleSubmit}>
    <Form.Group value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>

      <Form.Group value={imageurl}
        onChange={(e) => setImageurl(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" placeholder="Image URL" />
      </Form.Group>

      <Form.Group value={miles}
        onChange={(e) => setMiles(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>Miles</Form.Label>
        <Form.Control type="text" placeholder="Miles" />
      </Form.Group>

      <Form.Group value={state}
        onChange={(e) => setState(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
      </Form.Group>

      <Form>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </Form>
    </form>
    <div>
      <h1>{name}</h1>
      <p>
        <em>{description}</em>
        {/* <cite>By {user.username}</cite> */}
        <p>Location: {location}</p>
        <p>Miles: {miles}</p>
        <img src={imageurl}/>
        <p>State: {state}</p>
      </p>
      <button type="submit">{isLoading ? "Loading..." : "Submit Trail"}</button>
    </div>
    </>
  )
}

export default NewTrail;