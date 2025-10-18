import { Suspense } from 'react'
import './App.css'

import Player from './components/players'
import Users from './components/Users'
import Friends from './components/Friends'
import Posts from './components/Posts'

const fetchUser=fetch('https://jsonplaceholder.typicode.com/users')
                .then(res=>res.json())



const fetchPosts=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

function App() {

  const fetchFriend=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

  const postsData=fetchPosts()

  const friendsdata=fetchFriend();

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
      <Suspense fallback={<h3>Loading Post....</h3>}>
          <Posts postsData={postsData}></Posts>
      </Suspense>

      <Suspense fallback={<p>Data Loading</p>}>
        <Users fetchUsers={fetchUser}></Users>
      
      </Suspense>

      <Suspense fallback={<h3>Loading Friend</h3>}>
        <Friends friendsdata={friendsdata}></Friends>
      </Suspense>

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
