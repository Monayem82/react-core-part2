import './App.css'

import Player from './components/players'

function App() {

  function handleClick1(){
    alert('click 1')
  }

  const handleClick2=()=>{
    alert("Click 2 ")
  }

  const handleClick3=(num)=>{
    alert(num)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Player></Player>
      <br />
      <hr />
      <button onClick={handleClick1}>Click me 1</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={()=>handleClick3(5)}>click 3</button>

    </>
  )
}

export default App
