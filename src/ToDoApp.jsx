import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Box from '@mui/material/Box';

const ToDoApp =()=>{

  const [additem,setItem]=useState('');

  const [itemAdded,displayItem]=useState([]);

  const enterItem=(event)=>{
      setItem(event.target.value);
  }
  const display=()=>{
      displayItem((olditems)=>{
          return [...olditems,additem];
      }
      );
      setItem('');
  }
  const deleteItem=(id)=>{
      displayItem((olditems)=>{
          return olditems.filter((arrElem,index)=>{
              return index!==id;
          });

      });

  }
  
  return(
      <>
      <Paper  elevation={3} style={{padding:"30px",paddingTop:"0.5px",minHeight:"100vh",margin:"0px"}}>
      <h1 
      style={{backgroundColor:"#AF5614",
      color:"white",
      borderRadius:"20px",
      fontSize:"35px",
      textAlign:"center",
      padding:"25px",
      fontFamily:'Comfortaa'}}
      >To-Do-App</h1><br/>
      <Box display="flex" justifyContent="center">
      
      <TextField id="standard-basic" label="Add a task"  onChange={enterItem} value={additem}/>    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Fab  style={{backgroundColor:"#02040B",color:"white"}} aria-label="add" onClick={display} >
      <NoteAddIcon />
      </Fab>

      </Box>
      <br/>
      <ol >
      {itemAdded.map((itemval,index)=>{
          return (<ToDoItems 
          key={index}
          id={index}
          onDelete={deleteItem}
          addedItem={itemval} />)
      })}
      </ol>
      
      </Paper>
      </>
  )
}
export default ToDoApp;