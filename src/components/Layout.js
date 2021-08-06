import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { format } from 'date-fns';
import Avatar from '@material-ui/core/Avatar';

import image from '../img/image.png';



const drawerWidth = 240


const useStyles = makeStyles( (theme) => {
    return{
        page:{
            background:"#f9f9f9",
            width : '100%',
            padding : 20,
            marginTop:60,
            overflowX : "hidden"
        },
        drawer:{
            width : drawerWidth
        },
        drawerPaper:{
            width : drawerWidth
        },
        root : {
            display:"flex"
        },
        active : {
            background : "#f4f4f4"
        },
        title : {
            padding:16
        },
        appbar : {
            width : `calc(100% - ${drawerWidth}px)`,
            background : "white",
            color : "black"
        },
        date : {
            flexGrow : 1
        },
        avatar : {
            marginLeft:16
        }
       
    }
})

export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary"/>,
            path:'/'
        },
        {
            text:'Create Note',
            icon:<AddCircleOutline color="secondary"/>,
            path:'/create'
        }

    ]


    return (
        <div className={classes.root}>
            {/* appBar */}

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                       Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Basava
                    </Typography>
                    <Avatar src={image} className={classes.avatar} />
                </Toolbar>
            </AppBar>

            {/* sideDrawer */}
            <Drawer 
                className={classes.drawer}
                variant = "permanent"
                anchor = "left"
                classes={{paper:classes.drawerPaper}}
            >
                <div>
                    <Typography variant = "h5" className={classes.title}>
                        My Notes
                    </Typography>
                </div>
                {/* list link */}

                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick = {() => history.push(item.path)}
                            className = {location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                    
            </Drawer>
            
            <div className={classes.page}>
                
                {children}
            </div>
        </div>
    )
}
