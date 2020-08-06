import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SuperMarketCalender from '../calender/calender';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },    
    searchBox: {
      marginTop:'1.250em', 
      marginBottom:'1.250em'
    },
    addItemText: {
      color: '#00c4b4',
      fontSize: '0.875em',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    addItemIcon: {
      height: '50px',
      width: '50px',
	    display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      backgroundColor: '#00c4b4',
      marginLeft: '0.4375em',
    },
    addIcon: {
      color: '#ffffff',
    },
    appBar: {
      position: 'relative',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  })); 

export default function Header() {
    const classes = useStyles();
    const history = useHistory();
    const routeChange = () =>{ 
      let path = '/categories';
      history.push(path);
    }

    return (
        <div>
          <div className={classes.searchBox}>
            <div><h3>What can we get you?</h3></div>
            <Paper component="form" className={classes.root}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Fruits, Vegetables & more"
                    inputProps={{ 'aria-label': 'Fruits, Vegetables & more' }}
                />
            </Paper>
          </div>
          <SuperMarketCalender />
          <div onClick={routeChange}>
            <div className={classes.addItemIcon}><AddIcon className={classes.addIcon}/></div>
            <div className={classes.addItemText}>ADD ITEM</div>
          </div>
        </div>
    )
}