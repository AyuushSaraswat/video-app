import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
const [input,setInput] = useState("")

const navigate = useNavigate();

const handleClick = (e)=>{
    navigate(`/room/${input}`)
}

  return (
    <div>
    <div>
        <input 
        type="text" 
        value={input} 
        placeholder='Enter Room id' 
        onChange={(e)=>{setInput(e.target.value)}}
        />

        <button onClick={handleClick}>Join</button>
    </div>
    </div>
  )
}

export default HomePage
