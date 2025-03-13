import { Face, Face2, Face3, Face4, Face5 } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, CardActions, Grid2, Icon, Paper, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { ChangeEvent, CSSProperties, MouseEvent, SetStateAction, useContext, useState } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
import { ContactContext } from "../../data/contexts/ContactsData.context";


interface NewContactProps{
    onButtonClick?:()=>void
    contactIndex:number
}

export default function NewContact ({onButtonClick,contactIndex}:NewContactProps){
 
  const {contacts,addContact,iconContact}=useContext(ContactContext)
  const {darkMode}=useContext(DarkModeContext)
  const [newContactName,setNewContactName]=useState('')
  const [newContactPhone,setNewContactPhone]=useState('')
  const [newContactEmail,setNewContactEmail]=useState('')
  const cardStyle:CSSProperties=darkMode?{backgroundColor:"#444",color:"#ccc"}:{}
    const [newContactIcon, setNewContactIcon] = useState('icon');
    const handleChange = (
        event:any,
        newContactIcon: string,
      ) => {
        setNewContactIcon(newContactIcon);
      };
  
  function handleNewContactNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setNewContactName(event.target.value);
  }

  function handleNewEmailChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setNewContactEmail(event.target.value);
  }

  function handleNewPhoneNumberChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setNewContactPhone(event.target.value);
  }
  function handleAddNewContact(){
    addContact({name:newContactName,phone:newContactPhone,email:newContactEmail})
  }
  


    return <Paper style={{backgroundColor:darkMode?"#444":undefined}}>
      
      <Card style={cardStyle}>
        
        <Typography variant="h6" align="left" p={0.8}>
          New Contact
        </Typography>
        <Box>
        <TextField value={newContactName}  onChange={handleNewContactNameChange} variant="standard" fullWidth placeholder="Name"  style={{padding:8}}/>
        <TextField value={newContactPhone} onChange={handleNewPhoneNumberChange} variant="standard" fullWidth placeholder="Phone" style={{padding:8}}/>
        <TextField value={newContactEmail} onChange={handleNewEmailChange} variant="standard" fullWidth placeholder="Email" style={{padding:8}}/>
        </Box>
        <ToggleButtonGroup value={newContactIcon} exclusive onChange={handleChange} aria-label="Basic button group"
         style={{width:490}} color="primary">
         <ToggleButton value={Face} >{<Face/>}</ToggleButton>
         <ToggleButton value={Face2} >{<Face2/>}</ToggleButton>
         <ToggleButton value={Face5} >{<Face5/>}</ToggleButton>
         <ToggleButton value={Face4} >{<Face4/>}</ToggleButton>
        </ToggleButtonGroup>
       <Box m={2} >
      <CardActions onClick={onButtonClick}>
      <Button onClick={handleAddNewContact} variant="outlined" fullWidth>
        Add
      </Button>
      </CardActions>
      </Box>
     </Card>
    </Paper>
}