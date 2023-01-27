import React , { useState }from 'react'
import ReactDOM from 'react-dom'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';

const ToDoItems =(props)=>{
   
    const [editBool,setEditBool]=useState("false");

    const [line,setLine]=useState(false);

    const onEdit =()=>{
        setEditBool("true");
    }
    const onLine =()=>{
        setLine(true);
    }




    return(
        <>
        <Paper elevation={1} style={{ borderColor:"#FFFFFF" , textAlign:"left", padding:"5px"}}>
       
        
         <Box display="flex" p={1} >
        <Box p={1} flexGrow={1} >
         <span contentEditable={editBool} 
        
         
         style={{textDecoration: line ? "line-through" : "none",fontSize:"20px",padding:"20px" }}>{props.addedItem}</span>
        </Box>

        <Box p={1} >
        <Fab color="success" aria-label="complete" onClick={onLine} style={{backgroundColor:"#31C122",color:"white"}}>
          <TaskAltIcon />
         </Fab>
        </Box>
        
        <Box p={1} >
        <Fab color="primary" aria-label="edit" onClick={onEdit} style={{backgroundColor:"#173AB3",marginLeft:"5px"  }}>
          <DriveFileRenameOutlineIcon />
         </Fab>
        </Box>
        

        <Box p={1} >
        <Fab  color="secondary" aria-label="delete" onClick={()=>{
             props.onDelete(props.id);
         }}  style={{backgroundColor:"#BC3024",marginLeft:"5px"}}>
          <DeleteForeverIcon />
         </Fab>
        </Box>

        </Box>
        

         

         
         
         </Paper>
         <br/>
        </>
    );
}
export default ToDoItems;