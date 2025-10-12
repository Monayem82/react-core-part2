import { useState } from "react"

export default function Player(){
    const [runs,setRuns]=useState(0)
    const [single,setSingle]=useState(0)

    const [countdouble,setCountdouble]=useState(0)

    const [four,setFour]=useState(0)
    const [six,setSix]=useState(0)


    const handleRuns=(singles=false,doubles=false,fours=false,sixs=false)=>{
        if(singles){
            setRuns(runs+1)  
            setSingle(single+1)
        }
        else if(doubles){
            setRuns(runs+2)
            setCountdouble(countdouble+1)
        }
        else if(fours){
            console.log(fours)
            setRuns(runs+4)
            setFour(four+1)
        }
        else if(sixs){
            setRuns(runs+6)
            setSix(six+1)
        }
    }

    // const handleSinge=()=>{
    //     const updateRuns=runs+1
    //     setRuns(updateRuns)
    //     setSingle(single+1)
    // }

    // const handleDouble=()=>{
    //     const updateruns=runs+2;
    //     setRuns(updateruns)
    //     setCountdouble(countdouble+1)
    // }
    // const handleFour=()=>{
    //     const updateruns=runs+4;
    //     setRuns(updateruns)
    //     setFour(four+1)
    // }
    // const handleSix=()=>{
    //     const updateruns=runs+6;
    //     setRuns(updateruns)
    //     setSix(six+1)
    // }



    return (
        <div>
            <h2>Player Run count </h2>
            {
                runs > 50 && <h2>Your run :50</h2>
            }
            <h3>single run :{single} | double : {countdouble}</h3>
            <h3>Four: {four} * {4} = {four*4} | six : {six} *6 = {six*6}</h3>
            <h4>Score : {runs}</h4>

            <button onClick={() => handleRuns(true, false, false, false)}>Single</button>
            <button onClick={() => handleRuns(false, true, false, false)}>Double</button>
            <button onClick={() => handleRuns(false, false, true, false)}>Four</button>
            <button onClick={() => handleRuns(false, false, false, true)}>Six</button>



            {/* <button onClick={handleSinge}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>  */}
        </div>
    )
}