import React, { useState } from 'react'

const StateManagement = () => {
    const [likes, setLikes] = useState(0);

    let count=1;

    const [img, setImg] = useState(0);

    
  return (
    <div>
        <div className='container'>
            <h1>State Management</h1>
            <h1>count: {count}</h1>
            <button className='btn btn-primary mt-5' onClick={() => {count++; console.log(count)}}>
                Add Count</button>

                <h1>Likes : {likes}</h1>
            <button className='btn btn-danger mt-5' onClick={() => {setLikes (likes+1);}}>
                Add likes</button>

                <h1>Likes : {likes}</h1>
            <input type="text"
            className="form-control" 
            onClick={(e) => {setImg (e.target.value);}}
            />
            
            
        </div>
    </div>
  )
}

export default StateManagement