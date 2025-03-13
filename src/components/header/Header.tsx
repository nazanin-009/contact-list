import { AppBar, FormControlLabel, IconButton, Switch, Toolbar, Typography } from "@mui/material"
import { title } from "process"
import ContactsIcon from '@mui/icons-material/Contacts';
import { useContext } from "react";
import { DarkModeContext } from "../../data/contexts/DarkMode.context";
interface HeaderProps{
    title:string
}
export default function Header({title}:HeaderProps){

const {darkMode,setDarkMode} = useContext (DarkModeContext)
return  <AppBar position="static" style={{backgroundColor:darkMode ? "#222" : undefined}}>
<Toolbar>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="open drawer"
    sx={{ mr: 2 }}
  >
 <ContactsIcon/>
  </IconButton>
  <Typography
    variant="h6"
    noWrap
    component="div"
  >
   Contact
  </Typography>
<FormControlLabel label=""  control={<Switch checked={darkMode}  onClick={()=>{setDarkMode(!darkMode)}} />} labelPlacement="start" />
</Toolbar>
</AppBar>

}