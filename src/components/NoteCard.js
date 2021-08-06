import React from 'react'

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';



const useStyles = makeStyles({
    avatar : {
        backgroundColor:(note) => {
            if(note.category == "Work"){
                return yellow[700]
            }
            if(note.category == "Remainders"){
                return green[500]
            }
            if(note.category == "Money"){
                return pink[500]
            }
            return blue[500 ]
        }
    }
})

const NoteCard = ({note, handelDelete}) => {

    const classes = useStyles(note)

    return ( 
        <Card elevation={2} >
            <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={()=> handelDelete(note.title)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.content}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default NoteCard;