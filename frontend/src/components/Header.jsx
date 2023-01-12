import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../main.css'
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';



const Header = () => {

    const storage = localStorage.getItem('user')
    const [ user, setUser ] = useState(
        storage 
        ? JSON.parse(storage)
        : "not auth"
        )

    const [ authentified, setAuthentified ] = useState(
        // user.token ? true : false
        false
    )
    const [ loading, setLoading ] = useState(true)

    const checkAuth = async () => {
        setLoading(true)
        try {
            const resp = await fetch('http://localhost:3000/checkToken', {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'authorization': user.token
                },
                })
            const data = await resp.json()
            if(data.status === 200) {
                setAuthentified(true)
                setLoading(false)
            }
        }
        catch(err) {
            console.log('check auth error')
            setAuthentified(false)
            setLoading(false)
        }
    }

    useEffect(() => {
        user.token
        && checkAuth()
        // : setAuthentified(false)
    }, [user])

    const handleDisconnect = () => {
        localStorage.removeItem('user')
        setUser("not auth")
        window.location = "/login"
    }

    return (
            <Box>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    <NavLink to="/">
                        <img className='logo' src='../assets/logo-esc.png' alt='escape-game-logo'/>
                    </NavLink>
                </Typography>
                {!loading & authentified ? (
                    <>
                        <Typography variant="h6" component="div">
                            Bonjour {user.userName}
                        </Typography>
                        <Button color="secondary">
                            <Link color="secondary" sx={{ textDecoration: "none" }} href="/history">
                                Historique
                            </Link>
                        </Button>
                    <Button color="inherit" onClick={handleDisconnect}>
                            Déconnexion
                    </Button>
                </>
                ) : (
                    null
                )}
                {!authentified & !loading ? (
                    <Button color="inherit">
                        <Link color="secondary" sx={{ textDecoration: "none" }} href="/login">
                            Connexion
                        </Link>
                    </Button>
                ) : (
                    null
                )}
            </Toolbar>
            </AppBar>
            </Box>
    );
}

export default Header;


