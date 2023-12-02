import { useState } from "react";

const Inputdo = () => {
    const [allDoItem, setAllDoItems] = useState([]);
    const [newDoItem, setNewDoItem] = useState('')
    
    const clickAdd = () => {
        const newItem = {
            task: newDoItem,
            completed: false,
        }

        const updatedItemArray = [...allDoItem];
        updatedItemArray.push(newItem)
        setAllDoItems(updatedItemArray);

        setNewDoItem('');    
    }

    const deleteTask = (index: number) => {
        const deleteDoItem = [...allDoItem];
        deleteDoItem.splice(index,1);

        setAllDoItems(deleteDoItem)
    }

    const taskComplete = (index: number) => {
        const updatedItemArray = [...allDoItem];
        updatedItemArray[index].completed = !updatedItemArray[index].completed;
        setAllDoItems(updatedItemArray);
      };


  return (
    <div className="form-wrapper">
      <input
        className="input-to-do"
        type="text"
        placeholder="add task"
        value={newDoItem}
        onChange={(e) => setNewDoItem(e.target.value)}
        required
      />
      <button className="button" onClick={clickAdd}>
        ADD
      </button>

        {allDoItem.map((item, index) => {
            return(
               <div className="task-wrapper" key={index}>
                    <p>{item.task}{item.completed ? "(Completed)" : ""}</p>
                    <div className="button-wrapper">
                        <button className="button" onClick={() => taskComplete(index)}> &#10003; </button>
                        <button className="button" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
               </div> 
            )
        })}
    </div>
  );
};

export default Inputdo;
