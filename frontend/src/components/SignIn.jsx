import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import Container from '@mui/material/Container';
import { FormControl, TextField, Typography, Button, Link } from '@mui/material';


const SignIn = () => {

    const postFetch = async (body) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(body)
                })
            const data = await response.json()
            localStorage.setItem("token", JSON.stringify(data.token))
        }
        catch(error) {
            console.log('POST error: ', error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            email: e.target.elements.emailInput.value,
            password: e.target.elements.passwordInput.value
        }
        postFetch(body)
        window.location="/"
    }

    return (
        <Container maxWidth="xs" className='signIn-container'>
            <div className='lock-background'>
                <HttpsIcon color="secondary"/>
            </div>
            <Typography variant='h5'>
                Connexion
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl fullWidth>
                    <TextField id="emailInput" sx={{mt: 2, }} variant='outlined' type='email' label="Email" required>
                    </TextField>
                    <TextField id="passwordInput" sx={{my: 2}} variant='outlined' type='password' label='Mot de passe' required>
                    </TextField>
                    <Button color='info' variant="contained" type="submit">Connexion</Button>
                </FormControl>
            </form>
            <div className='signIn-Links'>
                <Link href='#'>Mot de passe oublié ?</Link>
                <Link href='/signup'>Pas de compte ? Inscrivez-vous</Link>
            </div>
          
        </Container>
    );
}

export default SignIn;
