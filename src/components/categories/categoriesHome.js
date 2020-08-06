import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { grey } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Categories from '../categories/categories';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

export default function CategoriesHome() {
    const classes = useStyles();
    const history = useHistory();
    const backToHome = () =>{ 
        let path = '/';
        history.push(path);
    }

    return (
        <div>
            <AppBar className={classes.appBar}>
            <Toolbar style={{backgroundColor:'#ffffff'}}>
              <IconButton edge="start" color="inherit" onClick={backToHome} aria-label="close">
                <ArrowBackIosIcon style={{ color: grey[800] }}/>
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Fruits, Vegetables & more"
                inputProps={{ 'aria-label': 'fruits, vegetables & more' }}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Toolbar>
            </AppBar>
            <div style={{padding: '24px'}}>
              <Categories />
            </div>
        </div>
    );
}