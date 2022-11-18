import './App.css';
import Hairstyles from './Components/Hairstyles';
import Header from './Components/Header';


const App = () => {
  let count = 0

const increment = () => {
  count = count + 1
}

const decrement = () => {
  count = - 1
}

  return (
    <>
    <h1>Placeholder for project React App</h1>
    <Header />
    <Hairstyles />
    <p>the count is: {count} </p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    </>
     
  )
}

export default App;
