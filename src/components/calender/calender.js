import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RepeatIcon from '@material-ui/icons/Repeat';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { grey } from '@material-ui/core/colors';
import delivery_product1 from '../../media/delivery_product1.png';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    singleDate : {
        minWidth: '14.28%',
        maxWidth: '14.28%',
        paddingRight: '7px !important',
        paddingLeft: '7px !important',
    },
    orderDeliveryTime: {
        borderTop: '1px solid #00c4b4',
        borderBottom: '1px solid #00c4b4',
        borderRight: '1px solid #00c4b4',
        display: 'inline-block',
        padding: '5px',
        fontSize: '11px',
        marginTop: '10px',
        paddingRight: '15px',
    },
    deliveryProductDetails: {
        borderLeft: '1px solid #00c4b4',
        marginLeft: '30px',
        paddingLeft: '25px',
        paddingTop: '10px',
        marginRight:'20px',
    },
    addItemIconSpan: {
        padding: '6px',
        borderRadius: '50%',
        border: '1px dashed',
        paddingBottom: '0px',
        marginRight: '10px',
    },
    help: {
        color:'#00c4b4',
    },
    hrLine: {
        'marginBottom': '-12px',
        'marginTop': '5px',
    },
    hrLineDownArrow: {
        'fontSize': '20px',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuperMarketCalender() {
    const classes = useStyles();
    const [dateObject, setCurrentDate] = useState(new Date());
    const weekDaysShortArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekDaysFullArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthShortArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    //const monthFullArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = weekDaysShortArray[dateObject.getDay()];
    // const currentDate = dateObject.getDate();
    // const currentMonth = dateObject.getMonth();
    // const currentYear = dateObject.getFullYear();
    let initialDateObjArray = [];

    const getNextDate = (date, count) => {
        let next = new Date(date);
        next.setDate(next.getDate() + count)
        return next;
    }

    const getPreviousDate = (date, count) => {
        let prev = new Date(date);
        prev.setDate(date.getDate() - count)
        return prev;
    }

    if('Mon' === today) {
        initialDateObjArray = [dateObject,getNextDate(dateObject, 1),getNextDate(dateObject, 2),getNextDate(dateObject, 3),getNextDate(dateObject, 4),getNextDate(dateObject, 5),getNextDate(dateObject,6)];
    } else if('Tue' === today){
        initialDateObjArray = [getPreviousDate(dateObject, 1),dateObject,getNextDate(dateObject, 1),getNextDate(dateObject, 2),getNextDate(dateObject, 3),getNextDate(dateObject, 4),getNextDate(dateObject,5)];
    } else if('Wed' === today) {
        initialDateObjArray = [getPreviousDate(dateObject, 2),getPreviousDate(dateObject, 1),dateObject,getNextDate(dateObject, 1),getNextDate(dateObject, 2),getNextDate(dateObject, 3),getNextDate(dateObject,4)];
    } else if('Thu' === today){
        initialDateObjArray = [getPreviousDate(dateObject, 3),getPreviousDate(dateObject, 2),getPreviousDate(dateObject, 1),dateObject,getNextDate(dateObject, 1),getNextDate(dateObject, 2),getNextDate(dateObject,3)];
    } else if('Fri' === today) {
        initialDateObjArray = [getPreviousDate(dateObject, 4),getPreviousDate(dateObject, 3),getPreviousDate(dateObject, 2),getPreviousDate(dateObject, 1),dateObject,getNextDate(dateObject,1),getNextDate(dateObject,2)];
    } else if('Sat' === today){
        initialDateObjArray = [getPreviousDate(dateObject, 5),getPreviousDate(dateObject, 4),getPreviousDate(dateObject, 3),getPreviousDate(dateObject, 2),getPreviousDate(dateObject, 1),dateObject,getNextDate(dateObject,1)];
    } else if('Sun' === today){
        initialDateObjArray = [getNextDate(dateObject, 1),getNextDate(dateObject, 2),getNextDate(dateObject, 3),getNextDate(dateObject, 4),getNextDate(dateObject, 5),getNextDate(dateObject, 6),getNextDate(dateObject, 7)];
    } 

    let [dateObjArray, updateDateObjArray] = useState(initialDateObjArray);

    const isToday = (date) => {
        const today = new Date()
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear()
      }

    const isTomorrow = (date) => {
        const tomorrow = getNextDate(new Date(), 1);
        return date.getDate() === tomorrow.getDate() &&
                date.getMonth() === tomorrow.getMonth() &&
                date.getFullYear() === tomorrow.getFullYear()
    }

    const isSameDate = (selectedDate, dateFromArray) => {
        return selectedDate.getDate() === dateFromArray.getDate() &&
                selectedDate.getMonth() === dateFromArray.getMonth() &&
                selectedDate.getFullYear() === dateFromArray.getFullYear()
    }

    const [open, setOpen] = useState(false); 

    const refs = dateObjArray.reduce((acc, value) => {
      acc[value.getDay()] = React.createRef();
      console.log('Acc', acc);
      return acc;
    }, {});

    const handleClickOpen = (index) => {
        console.log('index', index);
        // refs[index].current.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start',
        // });
        setOpen(true);
        setCurrentDate(new Date());
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentDate(new Date());
        updateDateObjArray([...initialDateObjArray]);
    };

    const loadNextWeekData = () => {
        let lastDayOfCurrentWeek = dateObjArray[dateObjArray.length - 1];
        let nextWeek = [];
        for(let i = 1; i <= 7; i++){
          nextWeek.push(getNextDate(lastDayOfCurrentWeek, i));
        }
        updateDateObjArray([...dateObjArray, ...nextWeek]);
    }

    const loadWeekDataForSelectedDate = (selectedDate) => {
        let newWeek = [];
        for(let i = 0; i < 7; i++){
            newWeek.push(getNextDate(selectedDate, i));
        }
        updateDateObjArray(newWeek);
    }
  
    const loadPreviousWeekData = () => {
        let firstDayOfCurrentWeek = dateObjArray[0];
        let previousWeek = [];
        for(let i = 1; i <= 7; i++){
          previousWeek.unshift(getPreviousDate(firstDayOfCurrentWeek, i));
        }
        updateDateObjArray([...previousWeek, ...dateObjArray]);
    }

    const [selectedDate, updateSelectedDate] = useState(new Date());
    let isDateInRange = false;

    const handleDateChange = (newDate) => {

      for(var i = 0; i < dateObjArray.length; i++){
          if( isSameDate( newDate, dateObjArray[i] ) ){
              isDateInRange = true;
              break;
        }
      }

      if( !isDateInRange ){
        loadWeekDataForSelectedDate(newDate);
      }
    }
console.log('refs', refs);
console.log('<----------------------------------------------------->');

    return (
        <div style={{textAlign:'center'}}>
            <Grid container style={{margin:0, width:'100%'}} spacing={3}> 
                {dateObjArray.map((dateObj, index) => {
                    let dayLabel = weekDaysShortArray[dateObj.getDay()];
                    let color = '';
                    let border = '';
                    let hrLine = false;
                    if( isToday(dateObj) ){
                        dayLabel = 'Today';
                    }
                    if(dateObj.getDay() === new Date().getDay() + 1) {
                        color = '#3f51b5';
                        //border = '1px solid #3f51b5';
                        hrLine = true;
                    } else if((new Date().getDay() === 6) && (dateObj.getDay() === 6)) {
                        color = '#3f51b5';
                        border = '1px solid #3f51b5';
                    }
                    
                    return <React.Fragment key={index}>
                                <Grid item className={classes.singleDate} sm={2} key={index} onClick={() => handleClickOpen(index)} style={{cursor:'pointer',color: color, border: border}}>
                                    <div>{dateObj.getDate()}</div>
                                    <div>{dayLabel}</div>
                                    {hrLine && (
                                        <>
                                        <hr className={classes.hrLine} /><div className={classes.hrLineDownArrow}> &#x25BE;</div>
                                        </>
                                    )}
                                </Grid>
                            </React.Fragment>
                })}
            </Grid>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
              <AppBar className={classes.appBar}>
                <Toolbar style={{backgroundColor:'#ffffff'}}>
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <ArrowBackIosIcon style={{ color: grey[800] }}/>
                  </IconButton>
                  <Typography variant="h6">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        value={selectedDate}
                        placeholder="10/10/2018"
                        onChange={date => handleDateChange(date)}
                        minDate={new Date()}
                        format="MM/dd/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Typography>
                </Toolbar>
              </AppBar>
              <List>
                <ListItem button style={{textAlign:'center'}} onClick={loadPreviousWeekData}>
                    <IconButton edge="start" color="inherit" aria-label="close">
                      <ExpandLessIcon />
                    </IconButton>
                    <Typography variant="h6">Tap to view previous</Typography>
                </ListItem>
                <Divider />
                {dateObjArray.map((dateObj, index) => {
                  let bgColor = '';
                  let dayLabel = weekDaysFullArray[dateObj.getDay()];
                  let showAddItemBtn = false;
                  let isOrder = false;
                  if( isToday(dateObj) ){
                    bgColor = '#e8ecec';
                    dayLabel = 'Today(' + weekDaysShortArray[dateObj.getDay()] + ')';
                  } else if(isTomorrow(dateObj)){
                    bgColor = '#c8f3ef';
                    dayLabel = 'Tomorrow(' + weekDaysShortArray[dateObj.getDay()] + ')';
                    isOrder = true;
                  }

                  if( !isToday(dateObj) && dateObj.getTime() > Date.now()){
                    showAddItemBtn = true;
                  }

                  return <React.Fragment key={index}>
                              <ListItem button style={{backgroundColor:bgColor}} ref={refs[index]}>
                                  <ListItemText primary={dateObj.getDate()} secondary={monthShortArray[dateObj.getMonth()]} />
                                  <ListItemText primary={dayLabel} secondary="No orders for this day" />
                              </ListItem>
                              { isOrder && 
                                <div>
                                  <div>
                                    <div className={classes.orderDeliveryTime}>
                                      ARRIVING BY 7 AM
                                    </div>
                                    <div className={classes.deliveryProductDetails}>
                                      <div>Leave a bag outside.</div>
                                      <div className={classes.help}>Need help?</div>
                                      <div style={{display:'flex', marginBottom:'15px', marginTop:'15px'}}>
                                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', border:'1px solid gray', borderRadius:'50%', width:'42px', height:'42px'}}>
                                          <img style={{width:'20px', height:'30px'}} src={delivery_product1} alt="Delivery Item"></img>
                                        </div>
                                        <div style={{display:'flex', flexDirection:'column', marginLeft:'10px'}}>
                                          <div style={{fontSize:'12px'}}>Chitale - Cow Milk (500 ml)</div>
                                          <div style={{fontSize:'10px', display:'flex'}}><RepeatIcon style={{fontSize: '13px', marginRight:'5px'}}/> Daily</div>
                                        </div>
                                        <div style={{display:'flex', flexDirection:'column', fontSize:'11px', marginLeft:'auto', textAlign:'right'}}>
                                          <div>1 Pkt</div>
                                          <div style={{display:'flex', color:'#00c4b4'}}>CHANGE <ChevronRightIcon style={{fontSize:'15px'}}/></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{borderTop:'1px solid #00c4b4', position:'absolute',right:'88%', left:'0', marginLeft:'30px', marginTop:'-15px'}}></div>
                                  </div>
                                  <div>
                                    <div className={classes.orderDeliveryTime}>
                                      ARRIVING BY 11 AM
                                    </div>
                                    <div className={classes.deliveryProductDetails}>
                                      <div>No Items scheduled for 11 AM.</div>
                                    </div>
                                    <div style={{borderTop:'1px solid #00c4b4', position:'absolute',right:'88%', left:'0', marginLeft:'30px'}}></div>
                                  </div>
                                </div>
                              }
                              { showAddItemBtn &&
                                <div>
                                  <Button color="primary" style={{color:'#00c4b4', marginTop:'5px', marginBottom:'5px', marginLeft: '11px'}}>
                                    <span className={classes.addItemIconSpan}>
                                      <AddIcon/>
                                    </span> 
                                    <span>ADD ITEM</span>
                                  </Button>
                                </div>
                              }
                              <Divider />
                        </React.Fragment>
                })}
                <ListItem button style={{textAlign:'center'}} onClick={loadNextWeekData} >
                    <IconButton edge="start" color="inherit" aria-label="close">
                      <ExpandMoreIcon />
                    </IconButton>
                    <Typography variant="h6">Tap to load more</Typography>
                </ListItem>
              </List>
            </Dialog>
        </div>
    )
}