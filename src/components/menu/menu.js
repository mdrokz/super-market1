import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddIcon from '@material-ui/icons/Add';
import Home from '../home/home';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  addButtonDiv: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    right: 0,
    marginRight: 25,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      right: 0,
      float: 'right',
      position: 'absolute',
    },
    [theme.breakpoints.down('sm')]: {
        marginRight:0,
    }
  },
  addButton: {
    float: 'right',
    [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        paddingLeft: 0,
        fontSize: '11px',
        width: '60%',
        height: '50%',
        marginRight:'15px',
    },
    [theme.breakpoints.up('sm')]: {
        paddingRight: '10px',
        paddingLeft: '10px',
        fontSize: '11px',
        width: 'auto',
    },
  },
  addButtonXs: {
    width: '75%',
    marginRight: 0,
  },
  addButtonIcon: {
    [theme.breakpoints.down('sm')]: {
        marginRight:-8,
        fontSize: '17px !important',
    },
    [theme.breakpoints.up('sm')]: {
        marginRight: -4,
    },
  }
}));

function Menu(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const matches = useMediaQuery(
    json2mq({
      maxWidth: 360,
    }),
  );

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <ListItem button>
            <ListItemIcon><PersonOutlineOutlinedIcon style={{ color: '#5c6dc7' }}/></ListItemIcon>
            <ListItemText primary="My Profile" />
       </ListItem>
      <Divider />
      <List>
        {['My Subscription', 'Order Calender', 'Vacation', 'Supr Wallet', 'Wallet Transactio', 'Supr Access', 'Refer and save', 'Support & FAQs'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={{ color: '#5c6dc7' }}/> : <MailIcon style={{ color: '#5c6dc7' }}/>}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <img style={{height:'80px', paddingBottom:'10px', paddingTop:'10px'}} alt="Super Daily" src="https://uploads-ssl.webflow.com/5e22cccc0125d4170cc2fa21/5e22d863945b29b6ad52e30a__Group_.png"></img>
          </div>
          <div className={classes.addButtonDiv}>
            <Button className={`${classes.addButton} ${matches && classes.addButtonXs}`} variant="outlined" color="inherit" startIcon={<AddIcon className={classes.addButtonIcon} />}>Add Money</Button>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
      </main>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Menu;
