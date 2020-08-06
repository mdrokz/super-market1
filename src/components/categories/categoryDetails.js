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
import suggestions_popular_picks from '../../media/suggestions_popular_picks.jpg';
import suggestions_raw_pressery from '../../media/suggestions_raw_pressery.jpg';
import suggestions_amul from '../../media/suggestions_amul.jpg';
import suggestions_chitale from '../../media/suggestions_chitale.jpg';
import suggestions_gokul from '../../media/suggestions_gokul.jpg';
import suggestions_britania from '../../media/suggestions_britania.jpg';
import category_milk_full_cream_amul_gold_500ml from '../../media/category_milk_full_cream_amul_gold_500ml.jpg';
import category_milk_full_cream_amul_gold_1L from '../../media/category_milk_full_cream_amul_gold_1L.jpg';
import category_milk_full_cream_gokul_500ml from '../../media/category_milk_full_cream_gokul_500ml.jpg';

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

    const [totalCartItems, updateCartItems] = React.useState(0);
    
    const handleAdd = () => {
        updateCartItems(totalCartItems => totalCartItems + 1);
        if(totalCartItems > 0){
            setState(true);
        }
    }

    React.useEffect( () => {
        if (totalCartItems > 0) {
            setState(true);
        }
    }, [totalCartItems]);

    const incrementCartItem = () => {
        updateCartItems(totalCartItems => totalCartItems + 1);
    }

    const decrementCartItem = () => {
        updateCartItems(totalCartItems => totalCartItems - 1);
    }

    console.log('Cart Items', totalCartItems);

    const snackBarContent = (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div><LocalMallIcon /></div>
            <Divider className={classes.divider} orientation="vertical" />
            <div>
                <div>1 item</div>
                <div>&#8377; 29.00</div>
            </div>
        </div>
      );

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar style={{backgroundColor:'#fff0df'}}>
                    <IconButton edge="start" color="inherit" onClick={backToCategories} aria-label="close">
                        <ArrowBackIosIcon style={{ color: grey[800] }}/>
                    </IconButton>
                    <div style={{width:'100%', backgroundColor:'#ffffff'}}>
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
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_popular_picks} alt='Popular Picks'/></div>
                                <div className={classes.suggestionsText}>Popular Picks</div>
                            </div>
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_raw_pressery} alt='Raw Pressery'/></div>
                                <div className={classes.suggestionsText}>Raw Pressery</div>
                            </div>
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_amul} alt='Amul'/></div>
                                <div className={classes.suggestionsText}>Amul</div>
                            </div>
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_chitale} alt='Chitale'/></div>
                                <div className={classes.suggestionsText}>Chitale</div>
                            </div>
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_gokul} alt='Gokul'/></div>
                                <div className={classes.suggestionsText}>Gokul</div>
                            </div>
                            <div>
                                <div><img className={classes.suggestionsImage} src={suggestions_britania} alt='Britania'/></div>
                                <div className={classes.suggestionsText}>Britania</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: '20px'}}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <div className={classes.heading}>
                                <div>Full Cream Milk</div>
                                <div style={{color:'grey', fontSize: '11px'}}>3 items</div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails style={{flexDirection:'column'}}>
                            <div style={{display: 'flex', marginBottom: '20px', justifyContent:'space-between'}}>
                                <div>
                                    <img style={{width:'65px', height: '65px'}}src={category_milk_full_cream_amul_gold_500ml} alt='Amul Gold Milk 500 ml'/>
                                </div>
                                <div style={{marginLeft: '10px', marginRight: '10px'}}>
                                    <div style={{fontSize: '12px'}}>Amul-Gold Milk (500 ml)</div>
                                    <div style={{fontSize: '11px', color:'grey', marginTop: '5px', marginBottom: '5px'}}>1 Pkt</div>
                                    <div style={{fontSize: '12px'}}>&#8377; 29.00</div>
                                </div>
                                <div style={{textAlign:'right'}}>
                                    {totalCartItems > 0 ? (
                                        <div style={{marginBottom:'5px', float:'right',border:'1px solid', borderRadius:'25px',color:'#00c4b4'}}>
                                            <div style={{display:'flex', paddingTop:'2px'}}>
                                                <div style={{padding: '2px 5px 2px 5px'}}><RemoveIcon style={{fontSize:'15px'}} onClick={decrementCartItem}/></div>
                                                <div style={{fontSize:'12px',padding: '2px 5px 2px 5px', color:'#000'}}>{totalCartItems}</div>
                                                <div style={{padding: '2px 5px 2px 5px'}}><AddIcon style={{fontSize:'15px'}} onClick={incrementCartItem}/></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{marginBottom:'5px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.addButton}
                                            startIcon={<AddIcon fontSize="small"/>}
                                            onClick={handleAdd}
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
                            <div style={{display: 'flex', marginBottom: '20px', justifyContent:'space-between'}}>
                                <div>
                                    <img style={{width:'65px', height: '65px'}}src={category_milk_full_cream_amul_gold_1L} alt='Amul Gold Milk 1 L'/>
                                </div>
                                <div style={{marginLeft: '10px', marginRight: '10px'}}>
                                    <div style={{fontSize: '12px'}}>Amul-Gold Milk (1 L)</div>
                                    <div style={{fontSize: '11px', color:'grey', marginTop: '5px', marginBottom: '5px'}}>1 Pkt</div>
                                    <div style={{fontSize: '12px'}}>&#8377; 57.00</div>
                                </div>
                                <div style={{textAlign:'right'}}>
                                    <div style={{marginBottom:'5px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.addButton}
                                            startIcon={<AddIcon fontSize="small"/>}
                                            onClick={() => setState(true)}
                                        >
                                            ADD
                                        </Button>
                                    </div>
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
                            <div style={{display: 'flex', marginBottom: '20px', justifyContent:'space-between'}}>
                                <div>
                                    <img style={{width:'65px', height: '65px'}}src={category_milk_full_cream_gokul_500ml} alt='Gokul - Full Cream Milk 500 ml'/>
                                </div>
                                <div style={{marginLeft: '10px', marginRight: '10px'}}>
                                    <div style={{fontSize: '12px'}}>Gokul-Full Cream Milk (500 ml)</div>
                                    <div style={{fontSize: '11px', color:'grey', marginTop: '5px', marginBottom: '5px'}}>1 Pkt</div>
                                    <div style={{fontSize: '12px'}}>&#8377; 29.00</div>
                                </div>
                                <div style={{textAlign:'right'}}>
                                    <div style={{marginBottom:'5px'}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.addButton}
                                            startIcon={<AddIcon fontSize="small"/>}
                                            onClick={() => setState(true)}
                                        >
                                            ADD
                                        </Button>
                                    </div>
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
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
                open={openSnackBar}
                onClose={handleCloseSnackBar}
            >
                <SnackbarContent style={{backgroundColor:'#00c4b4'}}
                    message={snackBarContent}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackBar}>
                            Proceed to cart <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                />
            </Snackbar>
        </div>
    )
}