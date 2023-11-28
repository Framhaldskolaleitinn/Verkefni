import React, { useState, useEffect } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Popover from "@mui/material/Popover";


/* styles filter */
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "skyblue",
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 56,
  },
}));



/* grid styles */
const styles = {
  gridContainer: {
    padding: 32,
  },
  scrollableContainer: {
    height: '600px', // Set a fixed height for the scrollable container
    overflow: 'auto', // Enable scrolling
  },
  gridItem: {
    textAlign: 'left',
    padding: "10px",
  
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc', // Add a border
    padding: 5, // Set the desired padding
  },
  image: {
    width: '20%', // Set the desired width for the image
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 8, // Add spacing between image and text
    marginTop:8,
  },
};

/* styles navbar */
const styles_navbar = {
  appBar: {
    backgroundColor: '#545657',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonBox: {
    display: 'flex',
  },
  button: {
    color: 'black',
  },
  individualButtonBox: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: '8px',
    marginRight: 8,
  },
  appName: {
    color: 'white',
  },
};

/* stles filter */
const styles_menu = {
  container: {
    paddingTop: "0px",
    display: 'flex',
    flexDirection: 'column',
    maxWidth: "100%"
  },
  button: {
    backgroundColor: 'black',
    color: 'black',
    marginBottom: 8,
  },
  box: {
    padding: 16,
    border: '1px solid #ccc',
    borderRadius: 8,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '100%',
    height: "200px",
    overflow: 'auto',
  },
};


function App() {
  const [data, setdata] = useState ({
    name: '',
    age: 0,
    date: "",
    programming: "",
  })

  /* fyrir dropdownmenu */
  const [boxOpen, setBoxOpen] = useState(false);

  const handleToggleBox = () => {
    setBoxOpen(!boxOpen);
  };


  useEffect(() => {
    fetch('/data').then((res) =>
    res.json().then((data) => {
        // Setting a data from api
        setdata({
            name: data.Name,
            age: data.Age,
            date: data.Date,
            programming: data.programming,
        });
    })
    );
    }, []);

  return (
    <>
      {/* header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="Static">
          <StyledToolbar>
            <OutdoorGrillIcon sx={{fontSize:30}}> </OutdoorGrillIcon>
            
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Framhaldskólaleitinn
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              
            >
              <HomeIcon sx={{fontSize:40}}/>
            </IconButton>
          </StyledToolbar>
        </AppBar>
      </Box>

      {/* navbar */}
      <div>
        <AppBar position="static" style={styles_navbar.appBar}>
          <Toolbar style={styles_navbar.toolbar}>
          <div>
            <Box style={styles_navbar.buttonBox}>
              <Box style={styles_navbar.individualButtonBox}>
                <Button style={styles_navbar.button}>Button 1</Button>
              </Box>
              <Box style={styles_navbar.individualButtonBox}>
                <Button style={styles_navbar.button}>Button 2</Button>
              </Box>
            </Box>
          </div>
          <Typography variant="h6">Your App Name</Typography>
          </Toolbar>
        </AppBar>
      </div>

      {/* drop down filter */}
      <div style={styles_menu.container}>
        <Button
          variant="contained"
          style={styles.button}
          onClick={handleToggleBox}
        >
          {boxOpen ? 'Close Box' : 'Open Box'}
        </Button>
        {boxOpen && (
          <Box style={styles_menu.box}>
            {/* Content inside the box */}
            <Typography>Box Content </Typography>
            <Typography>More content...</Typography>
          </Box>
        )}
        {/* Content below the button and box */}
      </div>
      
      {/* skola kassi */}
      <div className='prufa_col' >
        <div style={styles.scrollableContainer}>
          <Grid container spacing={1} style={styles.gridContainer}>
            {[...Array(9)].map((_, row) => (
              <Grid container item key={row} justify="center" spacing={1}>
                {[...Array(3)].map((_, col) => (
                  <Grid item key={col} xs={4} style={styles.gridItem}>
                    <Paper style={styles.paper} elevation={3}>
                      <div style={styles.container}>
                        {/* Image Box */}
                        <img
                          src={`https://via.placeholder.com/150x100?text=Image${row + 1}-${col + 1}`}
                          alt={`Image${row + 1}-${col + 1}`}
                          style={styles.image}
                        />

                        {/* Text Box */}
                        <Typography>
                          ({row + 1}, {col + 1}) aka skoli 
                        </Typography>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;

// dev branch