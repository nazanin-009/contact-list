import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { title } from "process"
import ContactsIcon from '@mui/icons-material/Contacts';
interface HeaderProps{
    title:string
}
export default function Header({title}:HeaderProps){
return  <AppBar position="static">
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

</Toolbar>
</AppBar>

}