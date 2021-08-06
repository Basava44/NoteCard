import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/styles';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlinedIcon'


const useStyles = makeStyles({
  btn:{
    fontSize:60,
    backgroundColor:'black',
    '&:hover':{
      backgroundColor : 'blue',
    }
  },
  title:{
    marginBottom : 20,
    color: 'blue',
    fontWeight:"bold"
  }
})

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className = {classes.title}
        variant="h6"
        component="h2"
        color = "textSecondary"
        gutterBottom       
      >
        Create New Note
      </Typography>
      <Button 
      className ={ classes.btn}
      onClick = {() => console.log("u clicked")}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon = {<SendIcon />}
      >Submit</Button>
      {/* icons */}
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="primary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" />
      <AcUnitOutlinedIcon color="error" />
      <AcUnitOutlinedIcon color="disabled" />
    </Container>
  )
}
