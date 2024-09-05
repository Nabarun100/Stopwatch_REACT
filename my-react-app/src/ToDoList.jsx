// import { useState } from "react";
import React,{useState} from "react";
function ToDoList() {
    const[Tasks,SetTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    function InputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(index){
        if(newTask.trim()!==""){
            SetTasks(t=>[...t,newTask])
            setNewTask("")
        }
    }
    function deleteTask(index){
        const updatedTask=Tasks.filter((_,i)=>i!==index);
        SetTasks(updatedTask);

    }
    function moveTaskDown(index){
        if(index<Tasks.length-1){
            const updatedTask=[...Tasks];
            [updatedTask[index],updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]];

            SetTasks(updatedTask);
        }
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask=[...Tasks];
            [updatedTask[index],updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]];

            SetTasks(updatedTask);
        }
    }
    return(
        <>
            <div className="to-do-list">
                <h1>To Do List</h1>
                <div>
                    <input type="text" placeholder="Enter a task" value={newTask} onChange={InputChange}/>
                    <button className="add-button" onClick={addTask}>
                        Add
                    </button>
                </div>
                <ol>
                {Tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="del-button" onClick={() => deleteTask(index)}>delete</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>up</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>down</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}
export default ToDoList