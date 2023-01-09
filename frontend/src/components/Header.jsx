import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../main.css'



const Header = () => {
    return (
            <Box  sx={{ flexGrow: 1}}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img className='logo' src='../assets/logo-esc.png' alt='escape-game-logo'/>
                </Typography>
                <Button color="inherit">Connexion</Button>
            </Toolbar>
            </AppBar>
            </Box>
    );
}

export default Header;


