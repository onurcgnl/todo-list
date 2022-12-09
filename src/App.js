import {useState} from "react"
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("")
  const [items,setItems] =useState([])
  
  // if (!newItem) {
  //   alert("enter an item")
  //   return
  // }
  function addItem() {

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItems(oldItems => [...oldItems, item])
    setNewItem("")
  }
  
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }
  return (
    <div className="App">
      <h1>Todo List app</h1>

      <input
        type="text"
        placeholder="add an item"
        value={newItem}
        onChange={e=> setNewItem(e.target.value)}
      />

      <button onClick={()=> addItem()}>Add</button>

      <ul>
        {items.map((item,id) => {
          return (
            <li key={id}>{item.value} <button onClick={()=> deleteItem(item.id)}>X</button></li>
          )
        })}

      </ul>
    </div>
  );
}

export default App;
