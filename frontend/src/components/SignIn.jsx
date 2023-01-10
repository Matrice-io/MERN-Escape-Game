import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import Container from '@mui/material/Container';
import { FormControl, TextField, Typography, Button, Link } from '@mui/material';


const SignIn = () => {
    return (      
        <Container maxWidth="xs" className='signIn-container'>
            <div className='lock-background'>
                <HttpsIcon color="secondary"/>
            </div>
            <Typography variant='h5'>
                Connexion
            </Typography>
            <form>
                <FormControl fullWidth>
                    <TextField sx={{mt: 2, }} variant='outlined' type='email' label="Email" required>
                    </TextField>
                    <TextField sx={{my: 2}} variant='outlined' type='password' label='Mot de passe' required>
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
