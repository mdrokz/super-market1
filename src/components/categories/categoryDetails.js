import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { grey } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RepeatIcon from '@material-ui/icons/Repeat';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Divider from '@material-ui/core/Divider';
import * as categoriesData from '../common/data'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    suggestionsImage: {
        width: '72px',
        height: '72px',
        marginRight: '10px',
        marginTop: '10px',
    },
    suggestionsText: {
        fontSize: '12px',
        marginTop: '5px',
        marginRight: '5px',
        textAlign: 'center',
    },
    subscribeButton: {
        borderRadius: 25,
        color: '#00c4b4',
        borderColor: '#00c4b4',
        fontSize: 10,
    },
    addButton: {
        backgroundColor: '#dcfbf8',
        borderRadius: 25,
        color: '#00c4b4',
        fontSize: 10,
        boxShadow: 'none',
    },
    divider: {
        height: 30,
        marginRight: 15,
        marginLeft: 15,
    },
}));

export default function CategoryDetails(props) {
    const {imgUrl, category} = props.location.state;
    const classes = useStyles();
    const history = useHistory();
    const backToCategories = () =>{ 
        let path = '/';
        history.push(path);
    }

    const [openSnackBar, setState] = React.useState(false);
    const handleCloseSnackBar = () => {
        setState(false);
    }

    const gotToCart = (cartItems) => {
        setState(false);
        let path = '/cart';
        history.push(path, cartItems);
    }

    const [totalCartItems, updateCartItems] = React.useState(0);
    const [totalCartItemsArr, updateCartItemsArr] = React.useState([]);
    const [totalCartItemsPrice, updateCartItemsPrice] = React.useState(0);
    const [item1Count, updateItem1Count] = React.useState(0);
    const [item2Count, updateItem2Count] = React.useState(0);
    const [item3Count, updateItem3Count] = React.useState(0);
    
    const handleAdd = (subCategoryId, price) => {
        incrementCartItem(subCategoryId, price);
        if(totalCartItems > 0){
            setState(true);
        }
    }

    React.useEffect( () => {
        if (totalCartItems > 0) {
            setState(true);
        } else {
            setState(false);
        }
    }, [totalCartItems]);

    const incrementCartItem = (subCategoryId, price) => {       
        let flag = false;
        let index = 0;
        for(let i = 0; i < totalCartItemsArr.length; i++){
            if(totalCartItemsArr[i].subCategoryId === subCategoryId) {
                flag = true;
                index = i;
                break;
            }
        }

        if(!flag){
            const obj = {
                subCategoryId: subCategoryId,
                itemCount:1,
                totalPrice:price
            };
            totalCartItemsArr.push(obj);
        } else {
            totalCartItemsArr[index].itemCount ++;
            totalCartItemsArr[index].totalPrice = parseFloat(totalCartItemsArr[index].totalPrice) + parseFloat(price);
        }
        updateCartItemsArr(totalCartItemsArr);

        if(subCategoryId === 1) {
            updateItem1Count(item1Count => item1Count + 1);
        } else if(subCategoryId === 2) {
            updateItem2Count(item2Count => item2Count + 1);
        } else if(subCategoryId === 3) {
            updateItem3Count(item3Count => item3Count + 1);
        }

        updateCartItems(totalCartItems => totalCartItems + 1);
        updateCartItemsPrice(totalCartItemsPrice => parseFloat(totalCartItemsPrice) + parseFloat(price));
    }

    const decrementCartItem = (subCategoryId, price) => {
        for(let i = 0; i < totalCartItemsArr.length; i++){
            if(totalCartItemsArr[i].subCategoryId === subCategoryId){
                if(totalCartItemsArr[i].itemCount > 1){
                    totalCartItemsArr[i].itemCount --;
                    totalCartItemsArr[i].totalPrice = parseFloat(totalCartItemsArr[i].totalPrice) - parseFloat(price);
                    break;
                } else {
                    totalCartItemsArr.splice(i, 1);
                    break;
                }
            }
        }
        
        updateCartItemsArr(totalCartItemsArr);
    
        if(subCategoryId === 1){
            updateItem1Count(item1Count => item1Count - 1);
        } else if(subCategoryId === 2){
            updateItem2Count(item2Count => item2Count - 1);
        } else if(subCategoryId === 3){
            updateItem3Count(item3Count => item3Count - 1);
        }

        updateCartItems(totalCartItems => totalCartItems - 1);
        updateCartItemsPrice(totalCartItemsPrice => parseFloat(totalCartItemsPrice) - parseFloat(price));
    }

    const routeChange = () =>{ 
        let path = '/categories';
        history.push(path);
    }

    const snackBarContent = (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div><LocalMallIcon /></div>
            <Divider className={classes.divider} orientation="vertical" />
            <div>
                <div>{totalCartItemsArr.length} item</div>
                <div>&#8377; {totalCartItemsPrice}</div>
            </div>
        </div>
    );

    const checkItemCount = (subCategoryId) => {
        if(subCategoryId === 1){
            return item1Count;
        } else if(subCategoryId === 2){
            return item2Count;
        } else if(subCategoryId === 3){
            return item3Count;
        } else {
            return 0;
        }
    }

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar style={{backgroundColor:'#fff0df'}}>
                    <IconButton edge="start" color="inherit" onClick={backToCategories} aria-label="close">
                        <ArrowBackIosIcon style={{ color: grey[800] }}/>
                    </IconButton>
                    <div style={{width:'100%', backgroundColor:'#ffffff'}} onClick={routeChange}>
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Fruits, Vegetables & more"
                            inputProps={{ 'aria-label': 'fruits, vegetables & more' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <div>
                <div style={{padding: '20px', backgroundColor: '#fff0df'}}>
                    <div style={{display: 'flex'}}>
                        <img style={{width:'80px', height:'95px'}} src={require(`../../media/${imgUrl}`)} alt='Category - Milk'/> 
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px'}}>
                            <div style={{fontSize:'18px'}}>{category}</div>
                            <div style={{fontSize:'12px', color:'grey'}}>25 items</div>
                        </div>
                    </div>
                    <div>
                        <div style={{color: 'grey', fontSize: '16px', marginTop: '16px'}}>Suggestions</div>
                        <div style={{display: 'flex', overflow:'auto'}}>
                            {categoriesData.suggestions.map((suggestion, index) => {
                                 return <div key={index}>
                                            <div><img className={classes.suggestionsImage} src={require(`../../media/${suggestion.suggestionImage}`)} alt={suggestion.suggestion}/></div>
                                            <div className={classes.suggestionsText}>{suggestion.suggestion}</div>
                                        </div>
                            })}  
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: '20px'}}>
                    {categoriesData.category1_subCategories.map((SubCategory, index) => {
                        return <Accordion key={index}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <div className={classes.heading}>
                                            <div>{SubCategory.subCategory}</div>
                                            <div style={{color:'grey', fontSize: '11px'}}>{SubCategory.subCategoryItems.length} items</div>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails style={{flexDirection:'column'}}>
                                        {SubCategory.subCategoryItems.map((subCategoryItem, index) => {
                                            return <div key={index} style={{display: 'flex', marginBottom: '20px', justifyContent:'space-between'}}>
                                                        <div>
                                                            <img style={{width:'65px', height: '65px'}} src={require(`../../media/${subCategoryItem.imgUrl}`)} alt='Amul Gold Milk 500 ml'/>
                                                        </div>
                                                        <div style={{marginLeft: '10px', marginRight: '10px'}}>
                                                            <div style={{fontSize: '12px'}}>{subCategoryItem.item}</div>
                                                            <div style={{fontSize: '11px', color:'grey', marginTop: '5px', marginBottom: '5px'}}>1 Pkt</div>
                                                            <div style={{fontSize: '12px'}}>&#8377; {subCategoryItem.price}</div>
                                                        </div>
                                                        <div style={{textAlign:'right'}}>
                                                            {checkItemCount(subCategoryItem.subCategoryId) > 0 ? (
                                                                <div style={{marginBottom:'5px', float:'right',border:'1px solid', borderRadius:'25px',color:'#00c4b4'}}>
                                                                    <div style={{display:'flex', paddingTop:'2px'}}>
                                                                        <div style={{padding: '2px 5px 2px 5px'}} onClick={() => decrementCartItem(subCategoryItem.subCategoryId, subCategoryItem.price)}><RemoveIcon style={{fontSize:'15px'}}/></div>
                                                                        <div style={{fontSize:'12px',padding: '2px 5px 2px 5px', color:'#000'}}>{checkItemCount(subCategoryItem.subCategoryId)}</div>
                                                                        <div style={{padding: '2px 5px 2px 5px'}} onClick={() => incrementCartItem(subCategoryItem.subCategoryId, subCategoryItem.price)}><AddIcon style={{fontSize:'15px'}}/></div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div style={{marginBottom:'5px'}}>
                                                                    <Button
                                                                        variant="contained"
                                                                        color="primary"
                                                                        className={classes.addButton}
                                                                        startIcon={<AddIcon fontSize="small"/>}
                                                                        onClick={() => handleAdd(subCategoryItem.subCategoryId, subCategoryItem.price)}
                                                                    >
                                                                        ADD
                                                                    </Button>
                                                                </div>
                                                            )}
                                                            <div style={{marginTop:'5px'}}>
                                                                <Button
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    className={classes.subscribeButton}
                                                                    startIcon={<RepeatIcon style={{fontSize:'12px'}}/>}
                                                                >
                                                                    SUBSCRIBE
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                        })}
                                    </AccordionDetails>
                               </Accordion>
                    })}
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                open={openSnackBar}
            >
                <SnackbarContent style={{backgroundColor:'#00c4b4'}}
                    message={snackBarContent}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit">
                                <span onClick={()=>gotToCart(totalCartItemsArr)}>Proceed to cart <ArrowForwardIosIcon fontSize="small" /></span>
                            </IconButton>
                        </React.Fragment>
                        }
                />
            </Snackbar>
        </div>
    )
}