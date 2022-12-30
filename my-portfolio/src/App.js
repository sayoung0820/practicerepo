import React, { useState } from 'react'
import './App.css';
import Projects from './components/Projects';
import List from './components/List';
import Resume from './components/Resume';
import Bio from './components/Bio';
import Contact from './components/Contact'


const App = () => {

    const [name, setName] = useState("")

    const handleChange = (event) => {
      setName(event.target.value)
    }

  
  // let [count, setCount] = useState(0)

  let [ProjectNames, setProjectNames] = useState(['Pig Latin', 'Treasure Hunt', 'Tic Tac Toe'])
  let [ProjectNameIndex, setProjectNameIndex] = useState(0)

  // const increment = () => {
  //   setCount(count + 1)
  // }

  // const decrement = () => {
  //   setCount(count - 1)

  // }

  const randomProjectNameIndex = () => {
    let randomNum = Math.floor(Math.random() * ProjectNames.length)
    setProjectNameIndex(randomNum)
  }


  return (
    <>
      <h1>Hi, I'm Shannon! Welcome to my Portfolio!</h1>

      <Bio />

      {/* <p> test count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button> */}
     
      <Projects />

      <h2>Change Project Name Here: <button onClick={randomProjectNameIndex}> Change Project </button></h2>

      <h2>{ProjectNames[ProjectNameIndex]}</h2>
      
      
      
      
      <List />
      <Resume />
      <Contact />
      <input type="name" onChange={handleChange} />
      <input type="email" onChange={handleChange} />
      <input type="text" onChange={handleChange} />
      
      
    </>
  );
}

export default App;
