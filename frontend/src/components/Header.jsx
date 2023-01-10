import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../main.css'
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
            <Box  sx={{ flexGrow: 1}}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <NavLink to="/">
                        <img className='logo' src='../assets/logo-esc.png' alt='escape-game-logo'/>
                    </NavLink>
                </Typography>
                <Button color="inherit">
                    <Link color="secondary" sx={{ textDecoration: "none" }} href="/login">
                        Connexion
                    </Link>
                </Button>
            </Toolbar>
            </AppBar>
            </Box>
    );
}

export default Header;


