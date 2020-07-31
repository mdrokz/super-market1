import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            width: '100px',
          },
    },
  }));

export default function Categories() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div><h3>Categories</h3></div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper} elevation={3}>
                            <img alt="Super Daily Category" className={classes.category_image} src="https://uploads-ssl.webflow.com/5e22cccc0125d4170cc2fa21/5e22d894daefb80f31496028_orderby11.png"></img>
                            <div>Category 1</div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper} elevation={3}>
                            <img alt="Super Daily Category" className={classes.category_image} src="https://uploads-ssl.webflow.com/5e22cccc0125d4170cc2fa21/5e22d894daefb80f31496028_orderby11.png"></img>
                            <div>Category 1</div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper} elevation={3}>
                            <img alt="Super Daily Category" className={classes.category_image} src="https://uploads-ssl.webflow.com/5e22cccc0125d4170cc2fa21/5e22d894daefb80f31496028_orderby11.png"></img>
                            <div>Category 1</div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <Paper className={classes.paper} elevation={3}>
                            <img alt="Super Daily Category" className={classes.category_image} src="https://uploads-ssl.webflow.com/5e22cccc0125d4170cc2fa21/5e22d894daefb80f31496028_orderby11.png"></img>
                            <div>Category 1</div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}