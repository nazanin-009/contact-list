import { Card, CardActionArea, CardActions, CardContent, Grid2, Paper, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Padding } from "@mui/icons-material";
interface ContactsProps{
    name:string
    number:string
    email:string
    icon:any

}
export default function Contacts ({name,number,email,icon}:ContactsProps){
    return <Paper>
      <Grid2 padding={2}>
   <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        
          <Typography gutterBottom variant="h5" textAlign="left" padding-right={2}> 
        {icon} {name}
          </Typography>
          <Typography variant="body2" textAlign='left' sx={{ color: 'text.secondary',  }}>
           {number}
          </Typography>
          <Typography variant="body2" textAlign='left' sx={{ color: 'text.secondary' }}>
           {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid2>
    </Paper>

}