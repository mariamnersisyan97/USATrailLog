import React, { useState } from 'react';


const style = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: "0 10px 20px",
    width: "500px",
    padding: "30px",
    color: "black",
    fontSize: "15px",
};

function Trail({trail, onUpdateTrail}) {

    
    const [isUpdating, setIsUpdating] = useState(false);
    const {name, description, image_url, miles} = trail;
    const [error, setError] = useState([]);
    const defaultTrailForm = {
        name: name,
        description: description,
        image_url: image_url,
        miles: miles,
    };
    const [formData, setFormData] = useState(defaultTrailForm);

    function handleFormChange(e){
        const key = e.target.name
        const value = (key === "name" || key ==="image_url") ? e.target.value : parseInt(e.target.value)
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
    
<div style={style}>
            {isUpdating?
                (<form  onSubmit={handleFormSubmit} >
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleFormChange}/>

                    <label>Description:</label>
                    <input type="text" name="description" value={formData.description} onChange={handleFormChange}/>

                    
                    <label>Miles:</label>
                    <input type="text" name="miles" value={formData.miles} onChange={handleFormChange}/>
                    <label>Image url:</label>
                    <input type="text" name="image_url" value={formData.image_url} onChange={handleFormChange}/>
                    <button type="submit">Save Edits</button>
                </form>
              ):(
                <div>
                    <p>Name: {name}</p>
                    <p>Body: {description}</p>
                    <p>Miles: {miles}</p>
                    <img src={image_url} class="img-thumbnail" alt="trail" />
                </div>)}

                    :(<p>{error}</p>
                    )
                   

   
        </div>
    )
};

export default Trail;