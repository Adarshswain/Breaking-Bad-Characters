import { AppBar, Box, InputBase, makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import logo from '../image/logo.png';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
   header:
   {
    background:'#FFFAF0'
   },
    image: {
        width:100,
        padding:5
       
    },
    search:
    {
        background:'#000000' ,
        position:'relative',
        borderRadius:5,
        marginLeft:1150
    },
    inputBox:
    {
        color:'inherit',
        margin: '0 40px'
    },
    searchicon:
    {
        position:'absolute',
        marginLeft:10,
        top:3
    }
})

const App = ({getText}) =>{
    const classes = useStyle();
    return (
        <AppBar className={classes.header} >
            <Toolbar>
          <img className={classes.image} src={logo} alt="logo" />
          <Box className={classes.search}>
              
              <Box className={classes.searchicon}>
                  <SearchIcon />
              </Box>
              

              <InputBase 
                        placeholder="Search by name"
                        autoFocus
                        classes = {{ root : classes.inputBox }}
                        onChange={(e) => getText(e.target.value)}
                    />
          </Box>
            </Toolbar>
        </AppBar>
    
    );
  }

  export default App;