import React, { useState } from 'react';

function Trail({trail, onUpdateTrail}) {
    const [isUpdating, setIsUpdating] = useState(false);
    const {name, location, description, image_url, miles} = trail;
    const [error, setError] = useState([]);
    const defaultTrailForm = {
        name: name,
        description: description,
        location: location,
        image_url: image_url,
        miles: miles,
    };
    const [formData, setFormData] = useState(defaultTrailForm);

    function handleChange(e){
        const key = e.target.name
        const value = (key === "location" || key ==="image_url") ? e.target.value : parseInt(e.target.value)
        setFormData({
            ...formData,
            [key]:value,
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        fetch(`/trails/${trail.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(res=>{
            if (res.ok){
                res.json()
                .then((t) => {
                    onUpdateTrail(t)
                    setIsUpdating(false)
                })
            }else {res.json().then((e) => setError(e.error))}
        })
    };

  return (
    
<div >
            {isUpdating?
                (<form  onSubmit={handleFormSubmit} >
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>

                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange}/>

                    <label>Location:</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange}/>
                    <label>Miles:</label>
                    <input type="text" name="miles" value={formData.miles} onChange={handleChange}/>
                    <label>Image url:</label>
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleChange}/>
                    <button type="submit">Save Edits</button>
                </form>
              ):(
                <div>
                    <h2>{location}</h2>
                    <p>Name: {name}</p>
                    <p>Location {location}</p>
                    <p>Miles: {miles}</p>
                    <img src={image_url} alt="trail" />
                </div>)}

                    :(<p>{error}</p>
                    )
                   
        </div>
    )
};

export default Trail;