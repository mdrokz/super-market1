import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { grey } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import RepeatIcon from '@material-ui/icons/Repeat';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import Button from '@material-ui/core/Button';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import category_milk_full_cream_gokul_500ml from '../../media/category_milk_full_cream_gokul_500ml.jpg';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
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
  }));

export default function Cart(props) {
    const classes = useStyles();
    const history = useHistory();
    const currentDate = new Date();
    const weekDaysShortArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthShortArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const weekDaysFullArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const [cartData, updateCartData] = React.useState(props.location.state);
    const [date, updateDate] = React.useState(new Date(currentDate.setDate(currentDate.getDate() + 2)));
    
    if(cartData.length === 0){
        let path = '/';
        history.push(path);
    }
    const totalCartPrice = cartData.reduce(function(total, item){
        return total + item.totalPrice;
    }, 0);

    const backToCategoryDetails = () =>{ 
        history.goBack();
    }

    const incrementCartItem = (subCategoryId) => {
        for(let i=0; i < cartData.length; i++){
            if(cartData[i].subCategoryId === subCategoryId){
                cartData[i].totalPrice = cartData[i].totalPrice + (cartData[i].totalPrice / cartData[i].itemCount);
                cartData[i].itemCount ++;
            }
        }
        updateCartData([...cartData]);
    }

    const decrementCartItem = (subCategoryId) => {
        for(let i=0; i < cartData.length; i++){
            if(cartData[i].subCategoryId === subCategoryId){
                if(cartData[i].itemCount > 1){
                    cartData[i].totalPrice = cartData[i].totalPrice - (cartData[i].totalPrice / cartData[i].itemCount);
                    cartData[i].itemCount --;
                } else {
                    cartData.splice(i, 1);
                }
            }
        }
        updateCartData([...cartData]);
    }

    const removeItemFromCart = (subCategoryId) => {
        for(let i=0; i < cartData.length; i++){
            if(cartData[i].subCategoryId === subCategoryId){
                cartData.splice(i, 1);
            }
        }
        updateCartData([...cartData]);
    }

    return (
        <React.Fragment>
            <AppBar className={classes.appBar}>
                <Toolbar style={{backgroundColor:'#ffffff'}}>
                    <IconButton edge="start" color="inherit" onClick={backToCategoryDetails} aria-label="close">
                        <ArrowBackIosIcon style={{ color: grey[800] }}/>
                    </IconButton>
                    <span style={{color:'black'}}>Cart ({cartData.length} items)</span>
                </Toolbar>
            </AppBar>
            <div>
                <div style={{padding:'14px', backgroundColor:'#efefef', display:'flex', borderLeft:'5px solid #c5c4c4'}}>
                    <div><ErrorOutlineRoundedIcon style={{fontSize:'14px'}}/></div>
                    <div style={{marginLeft:'14px', fontSize:'12px'}}>
                        <div style={{fontWeight:'600'}}>Earliest delivery date {weekDaysShortArray[date.getDay()]}, {date.getDate()} {monthShortArray[date.getMonth()]}.</div>
                        <div style={{marginTop:'5px', textAlign:'justify'}}>Thank you for choosing Supr Daily. We take a day to verify your address on your first delivery to ensure smooth deliveries in the future.</div>
                    </div>
                </div>
                <div style={{padding:'14px', backgroundColor:'#efefef', display:'flex', marginTop:'8px', borderLeft:'5px solid #c5c4c4'}}>
                    <div><ErrorOutlineRoundedIcon style={{fontSize:'14px'}}/></div>
                    <div style={{marginLeft:'14px', fontSize:'12px'}}>
                        <div style={{fontWeight:'600'}}>Review delivery date(s).</div>
                        <div style={{marginTop:'5px', textAlign:'justify'}}>Due to high demand, some items may not be available earlier.</div>
                    </div>
                </div>
                <List>
                    <ListItem button style={{backgroundColor:'#e8ecec'}}>
                        <ListItemText primary={date.getDate()} secondary={monthShortArray[date.getMonth()]} />
                        <ListItemText primary={weekDaysFullArray[date.getDay()]} secondary="Nothing scheduled on this day yet" />
                    </ListItem>
                </List>
                <div className={classes.orderDeliveryTime}>
                    ARRIVING BY 11 AM
                </div>
                {cartData.map((item, index) => {
                    return <div key={index} style={{padding:'14px'}}>
                                <Card className={classes.root} style={{padding:'10px'}}>
                                    <div style={{display:'flex', justifyContent:'space-between',fontSize:'11px', marginTop:'5px',marginBottom:'5px'}}>
                                        <div style={{color:'grey'}}>Schedule for a future date</div>
                                        <div style={{color:'#00c4b4', display:'flex'}}>
                                            CHANGE DATE <ChevronRightIcon style={{fontSize:'15px'}}/>
                                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    value={'CHANGE DATE'}
                                                    placeholder="10/10/2018"
                                                    onChange={''}
                                                    minDate={new Date()}
                                                />
                                            </MuiPickersUtilsProvider> */}
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'5px',marginBottom:'5px'}}>
                                        <div>
                                            <img style={{width:'65px', height: '65px'}} src={category_milk_full_cream_gokul_500ml} alt="Gokul Full Cream Milk"/>
                                        </div>
                                        <div>
                                            <div style={{fontSize: '12px'}}>Gokul-Full Cream Milk(500 ml)</div>
                                            <div style={{fontSize: '11px'}}>{item.itemCount} Pkt</div>
                                            <div style={{fontSize: '12px'}}>&#8377; {item.totalPrice}</div>
                                        </div>
                                        <div style={{textAlign:'right'}}>
                                            <div onClick={() => removeItemFromCart(item.subCategoryId)}><DeleteOutlineIcon style={{fontSize:'25px', color:'grey'}}/></div>
                                            <div style={{marginBottom:'5px', float:'right',border:'1px solid', borderRadius:'25px',color:'#00c4b4'}}>
                                                <div style={{display:'flex', paddingTop:'2px'}}>
                                                    <div style={{padding: '2px 5px 2px 5px'}}><RemoveIcon style={{fontSize:'15px'}} onClick={() => decrementCartItem(item.subCategoryId)}/></div>
                                                    <div style={{fontSize:'12px',padding: '2px 5px 2px 5px', color:'#000'}}>{item.itemCount}</div>
                                                    <div style={{padding: '2px 5px 2px 5px'}}><AddIcon style={{fontSize:'15px'}} onClick={() => incrementCartItem(item.subCategoryId)}/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{display:'flex', justifyContent:'space-between', fontSize:'11px', marginTop:'5px',marginBottom:'5px'}}>
                                        <div style={{color:'grey', display:'flex'}}><RepeatIcon style={{fontSize: '13px',color:'grey', marginRight:'5px'}}/> Get deliveries on autopilot</div>
                                        <div style={{color:'#00c4b4', display:'flex'}}>SUBSCRIBE <ChevronRightIcon style={{fontSize:'15px'}}/></div>
                                    </div>
                                </Card>
                            </div>
                })}
                
                <List>
                    <ListItem button style={{backgroundColor:'#e8ecec'}}>
                        <ListItemText primary={<AccountBalanceWalletOutlinedIcon style={{color:'grey'}}/>} secondary={''} />
                        <ListItemText primary={'Payment'} secondary="Save on service fee with Supr Access" />
                    </ListItem>
                </List>
                <div style={{margin:'14px', padding:'10px', fontSize:'12px', display:'flex', justifyContent:'space-between',backgroundColor:'#F7F6F6', border:'1px solid #bdb9b9',borderRadius:'5px'}}>
                    <div style={{display:'flex'}}>
                        <div><LocalOfferOutlinedIcon style={{fontSize:'15px', color:'#2ea22e'}}/></div>
                        <div style={{marginLeft:'8px'}}>Got a coupon code?</div>
                    </div>
                    <div style={{color:'#00c4b4', display:'flex'}}>APPLY <ChevronRightIcon style={{fontSize:'15px'}}/></div>
                </div>
                <div style={{margin:'14px', fontSize:'13px', display:'flex', justifyContent:'space-between'}}>
                    <div>Cart amount</div>
                    <div>&#8377; {totalCartPrice}</div>
                </div>
                <div style={{margin:'14px', fontSize:'13px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'5px'}}>
                        <div>Service fee</div>
                        <div><span style={{color:'green'}}>Free</span> <s>&#8377;1.00</s></div>
                    </div>
                    <div style={{fontSize:'12px', color:'grey'}}>Supr Access Membership Applied</div>
                    <div style={{padding:'12px', marginTop:'5px', textAlign:'justify', border:'1px solid grey', borderStyle:'dashed', borderRadius:'7px', color:'#01a093', backgroundColor:'#eafdfb'}}>
                            Your Supr Access memebership has been enabled for a trail period of 15 days.
                            Service fee will not be changed in this period. For more details check supr Access section on thie app.
                    </div>
                </div>
                <Divider />
                <div style={{margin:'14px', fontSize:'13px', display:'flex', justifyContent:'space-between'}}>
                    <div>Amount to pay</div>
                    <div>&#8377; {totalCartPrice}</div>
                </div>
                <Divider />
                <div style={{margin:'14px', fontSize:'13px', display:'flex', justifyContent:'space-between'}}>
                    <div>Wallet Amount</div>
                    <div>&#8377; 00.00</div>
                </div>
                <Divider style={{marginBottom:'110px'}}/>
                <div style={{padding:'14px', position:"fixed", bottom:0, left:0, right:0, backgroundColor:'white'}}>
                    <div style={{fontWeight:600, fontSize:'17px'}}>Almost there...</div>
                    <div style={{fontSize:'14px', color:'grey', marginBottom:'5px'}}>Add your address to continue</div>
                    <Button variant="contained" color="primary" style={{width:'100%',backgroundColor:'#00c4b4'}}>
                    Continue
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}