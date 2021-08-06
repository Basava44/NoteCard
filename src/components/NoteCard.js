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
            if(note.postId == 1){
                return yellow[700]
            }
            if(note.postId == 2){
                return green[500]
            }
            if(note.postId == 3){
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
                        {note.postId}
                    </Avatar>
                }
                action={
                    <IconButton onClick={()=> handelDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.name}
                subheader={note.email}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.body}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default NoteCard;