import { Box, Card, CardActions, Fab, Grid2, IconButton, Paper, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { CSSProperties, useContext, useState } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";

import { ContactContext } from "../../data/contexts/ContactsData.context";
import { DeleteForever, Done } from "@mui/icons-material";

interface HomeProps{
    onPageSelect:(pageName:string)=>void
}

export default function Home ({onPageSelect}:HomeProps){
    
    const {contacts,removeContactAt,iconContact}=useContext(ContactContext)
    const {darkMode}=useContext(DarkModeContext)
    const handleClick=(pageName:string)=>{
        onPageSelect(pageName);
    }
    function handleDeleteContact(idx:number){
        removeContactAt(idx)
      }
    
    return  <Paper style={{backgroundColor:darkMode?"#444":undefined}}>
        <Grid2 p={1}>
        <Box>
        {contacts.map( (contactItem,contactIndex) => {
            return(
                <Card style={{marginTop:8, backgroundColor:darkMode?"#444":undefined, color: darkMode ? "#ccc" : undefined} }>
            <Box p={1}>
              
            <Typography variant="h6" align="left">
                      {contactItem.name}
               </Typography>
               <Typography variant="subtitle1" align="left">
              {contactItem.phone}
               </Typography>
               <Typography variant="subtitle2" align="left">
               {contactItem.email}
               </Typography>
              
              
            </Box>
            <CardActions>
                <IconButton color="error" onClick={()=>{
                    handleDeleteContact(contactIndex)
                }}>
                  <DeleteForever/>
                </IconButton>
            </CardActions>
         </Card> 
            )
        })} 
        </Box>
        <Box sx={{ '& > :not(style)': { marginTop:46} }}>
        <Fab color="primary" aria-label="add" style={{position:"sticky", marginLeft:400}} onClick={()=>{handleClick("Add")}} >
        <AddIcon />
          </Fab>
        </Box>

        </Grid2>
    </Paper>
}