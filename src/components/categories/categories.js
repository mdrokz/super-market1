import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as categoriesData from '../categories/data'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    category_image: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
    },
  }));

export default function Categories() {
    const classes = useStyles();
    const history = useHistory();
    const routeChange = (imgUrl, category) =>{ 
        let path = '/categoryDetails';
        history.push(path, { imgUrl, category });
    }

    return (
        <React.Fragment>
            <div><h3>Categories</h3></div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {categoriesData.categories.map((category, index) => {
                         return <Grid item xs={6} sm={4} md={4} lg={3} onClick={()=>routeChange(category.imgUrl,category.category)}>
                                    <Paper style={{boxShadow:'none', padding:0}} className={classes.paper} elevation={3}>
                                        <img alt={category.category} className={classes.category_image} src={require(`../../media/${category.imgUrl}`)}></img>
                                        <div style={{color:'#000'}}>{category.category}</div>
                                    </Paper>
                                </Grid>
                    })}
                    {/* <Grid item xs={6} sm={6} md={4} lg={3} onClick={routeChange}>
                        <Paper className={classes.paper} elevation={3}>
                            <img alt="Super Daily Category" className={classes.category_image} src={require('../../media/category_snacks_and_sweets.jpg')}></img>
                            <div>Category 1</div>
                        </Paper>
                    </Grid> */}
                </Grid>
            </div>
        </React.Fragment>
    )
}