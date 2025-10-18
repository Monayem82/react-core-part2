import { useEffect, useState } from "react"

export default function Persons(){
    const [count,setCount]=useState(0)
    // const [remove,setRemove]=useState(count)

    useEffect(()=>{
        console.log("This is the useEffect test Functions")
    },[count])

    const addPersion=()=>{
        setCount(count+1)
    }
    const removePersion=()=>{
        count > 0 ? setCount(count-1) : alert('Value not be less then Zero 0')
        // if (count>0){
        //     setCount(count-1)
        // }
        // else{
        //     alert('Person now 0')
        // }
        
    }
    const resetPersion=()=>{
        if (count !=0){
            const reset=count*0
            setCount(reset)
        }else{
            alert("Person already Zero")
        }

    }

    return (
        <div>
            Persons : {count}
            <button onClick={addPersion}>Add person</button>
            <button onClick={removePersion}>Remove person</button>
            <button onClick={resetPersion}>Reset person</button>
        </div>
    )
}