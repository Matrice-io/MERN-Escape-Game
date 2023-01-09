import React from 'react';
import Container from '@mui/material/Container';
import HttpsIcon from '@mui/icons-material/Https';
import { FormControl, TextField, Typography, Button} from '@mui/material';

const SignUp = () => {
    return (
        <Container maxWidth="xs" className='signIn-container'>
            <div className='lock-background'>
                <HttpsIcon color="secondary"/>
            </div>
            <Typography variant='h5'>
                Inscription
            </Typography>
            <form>
                <FormControl fullWidth>
                <div>
                    <TextField fullWidth={false} sx={{mt: 2, }} variant='outlined' type='text' label="prénom" required>
                    </TextField>
                    <TextField fullWidth={false}  sx={{my: 2}} variant='outlined' type="text" placeholder='Nom *' required>
                    </TextField>
                </div>
                    <TextField sx={{my: 2}} variant='outlined' placeholder='Mot de passe *' required>
                    </TextField>

                    <Button color='info' variant="contained" type="submit">S'inscrire</Button>
                </FormControl>
            </form>
          
        </Container>
    );
}

export default SignUp;
