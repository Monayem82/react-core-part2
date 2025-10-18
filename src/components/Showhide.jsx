import { useState } from "react"

export default function Showhide(){

    const [status,setStatus]=useState(true)
    const [name,setName]=useState("")

    const textStatus=()=>{ 
        status ? setName('Hi i am react learner') : setName('')
        status ? setStatus(false): setStatus(true)
        
        
    }

    return (
        <div>
            Show and hide logic
            <h3>{name}</h3>
            <button onClick={textStatus}>{status ? 'Show' : 'Hide'}</button>
        </div>
    )
}