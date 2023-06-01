import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";


function NewTrail({ addTrail}) {
  const params = useParams();

  const defaultForm = {
    name: "",
    description: "",
    image_url: "",
    miles: "",
  };
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const [miles, setMiles] = useState("");

  // const handleAddTrail = () => {
  //   const newTrails = trails.map((trail) => {
  //     if (parseInt(params.id) === trail.id){
     
  //       return trail;
  //     } else {
  //       return trail;
  //     }
  //   })
  //   setTrails(newTrails)
  // }

  // function handleChange(e) {
  //   const key = e.target.name
  //   const value = (key === "name" || key === "image_url") ? e.target.value : (e.target.value)
  //   setFormData({
  //     ...formData,
  //     [key]:value,
    
  //   })
  // }

    function handleSubmit(e) {
      e.preventDefault();

      setIsLoading(true);

      fetch(`/trails/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
       .then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((trail) => addTrail(trail))
          history("/userlist");
          console.log("added");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    // handleSubmit seems to be throwing an error
  return (
    <div className='create'>
    <h2>Create Trail</h2>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
        type="text" 
        name="name" 
        // value={formData.name}
        value={name}
        onChange={(e) => setName(e.target.value)}/>

        <label>Description:</label>
        <input 
        type="text" 
        name="description" 
        // value={formData.description} 
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>

        <label>Miles</label>
        <input 
        type="text" 
        name="miles" 
        // value={formData.miles} 
        value={miles}
        onChange={(e) => setMiles(e.target.value)}/>

        <label>Image URL</label>
        <textarea
         type="text"
          name="image_url"
          // value={formData.image_url}
          value={image_url}
          onChange={(e) => setImage_url(e.target.value)}/>

        <button type="submit">{isLoading ? "Loading.." : "Submit Trail"}</button>
      </form>

      <form className='errors'>
      {errors.map((err) => (
        <h1 key={err}>{err}</h1>
      ))}
    </form>
    </div>
    
    
  )
}

export default NewTrail;