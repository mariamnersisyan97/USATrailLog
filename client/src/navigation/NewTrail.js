import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";


function NewTrail({ setTrails, user, setUser, trails}) {
  // const [state_id, setState_id] = useState("");
  const params = useParams();

  const defaultForm = {
    name: "",
    description: "",
    image_url: "",
    miles: "",
    // initialized with string, why is it retuning NaN? 
  };
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();


  const handleAddTrail = () => {
    const newTrails = trails.map((trail) => {
      if (parseInt(params.id)=== trail.id){
        // const newState = [...trail.states, state]
        // trail.states = newState
        return trail;
      } else {
        return trail;
      }
    })
    setTrails(newTrails)
  }

  function handleChange(e) {
    const key = e.target.name
    const value = (key === "name" || key === "image_url") ? e.target.value : (e.target.value)
    setFormData({
      ...formData,
      [key]:value,
      // stateid: state_id
    })
  }

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch(`/trails/${params.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((trail) => handleAddTrail(trail))
          history("/userlist");
          console.log("added");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });


    }
  
  return (
    <div>
    <h2>Create Trail</h2>
    <form className="NewItem" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange}/>
        <label>Miles</label>
        <input type="text" name="miles" value={formData.miles} onChange={handleChange}/>
        <label>Image URL</label>
        <textarea type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
        <button type="submit">{isLoading ? "Loading.." : "Submit Trail"}</button>
      </form>

      <Form>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </Form>
    </div>
    
    
  )
}

export default NewTrail;