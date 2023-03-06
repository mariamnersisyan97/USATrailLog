import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";


function NewTrail({states, setStates}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image_url, setImage_url] = useState("");
  const [miles, setMiles] = useState("");
  const [state_id, setState_id] = useState("");
  ///////////////////////////////////////////////////////////
  const [filter, setFilter] = useState(states)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();


  function handleStateFilter(e){
    setState_id(e.target.value);
    console.log(e.target.value)
  }

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
          image_url,
          miles,
          state_id,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          history("/trails");
          console.log("added");
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

      <Form.Group value={image_url}
        onChange={(e) => setImage_url(e.target.value)}
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

      {/* <Form.Group value={state_id}
        onChange={(e) => setState_id(e.target.value)}
        className="mb-3" controlId="exampleForm.ControlInput1" > 
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
      </Form.Group> */}

        <select name="state_id" onChange={handleStateFilter} value={filter}>
          <option>Select State</option>
          {states.map((s) => (
            <option value={state_id} key={s.id}>{s.name}</option>
          ))}
        </select>

      <button type="submit">{isLoading ? "Loading..." : "Submit Trail"}</button>
      <Form>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </Form>
    </form>
    
    </>
  )
}

export default NewTrail;