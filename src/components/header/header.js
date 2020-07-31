import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SuperMarketCalender from '../calender/calender';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },    
    searchBox: {
      marginTop:'1.250em', 
      marginBottom:'1.250em'
    }
  })); 

export default function Header() {
    const classes = useStyles();

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
        </div>
    )
}