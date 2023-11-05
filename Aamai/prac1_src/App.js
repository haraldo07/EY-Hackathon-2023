import logo from './logo.svg';
import './App.css';
import Display from './components/display.js';
import Button from './components/buttton.js'; // Renamed the component for consistency
import Checkbox from './components/checkbox.js';
import Textbox from './components/textbox.js';
import { useState, useEffect } from 'react';

function App() {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);
        
     const handleAddItem = () => {
    if (newItem) {
      setTodoList([...todoList, { text: newItem, isChecked: false }]);
        console.log(todoList);
      setNewItem("");
    }
  };




  const handleDeleteItem = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <>
      <Display content="Add New Item" />
      <Textbox value={newItem} onChange={e => setNewItem(e.target.value)} />
      <Button content="ADD" onClick={handleAddItem} />
      <Display content="ToDo List" />
      {todoList.map((item, index) => (
        <div key={index}>
          <Checkbox content={item.text} isChecked={item.isChecked} onChange={() => {
            const updatedList = [...todoList];
            updatedList[index].isChecked = !item.isChecked;
            setTodoList(updatedList);
          }} />
          <Button content="Delete" color="danger" onClick={() => handleDeleteItem(index)} />
        </div>
      ))}
    </>
  );
}

export default App;

