import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { styled } from '@mui/material/styles';


/* styles filter */
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: "#319BFE",
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: 56,
    },
}));

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
      marginBottom: "5 px",
      alignItems: "center"
    },
    individualButtonBox: {
      backgroundColor: 'white',
      borderRadius: 16,
      padding: '8px',
      marginRight: 8,
      height: "25px"
    },
    appName: {
      color: 'white',
    },
};



const Header = () => {
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
    </>
    );
};

export default Header;