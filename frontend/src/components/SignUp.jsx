import * as React from 'react';

import Container from '@mui/material/Container';
import HttpsIcon from '@mui/icons-material/Https';
import { FormControl, TextField, Typography, Button } from '@mui/material';

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const SignUp = () => {
    const [date, setDate] = React.useState(dayjs('2023-01-09'));

    const handleChange = (newValue) => {
        setDate(newValue);
      };

    return (
        <Container maxWidth="xs" className='signIn-container' sx={{ mb: 5 }}>
            <div className='lock-background'>
                <HttpsIcon color="secondary"/>
            </div>
            <Typography variant='h5'>
                Inscription
            </Typography>
            <form>
                <FormControl fullWidth>
                <div className='signUp-name-surname-inputs'>
                    <TextField fullWidth={false} sx={{mt: 2, }} variant='outlined' type='text' label="prénom" required>
                    </TextField>
                    <TextField fullWidth={false}  sx={{mt: 2}} variant='outlined' type="text" label='Nom' required>
                    </TextField>
                </div>
                    <TextField sx={{mt: 2}} variant='outlined' type="email" label='Email' required>
                    </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="DD/MM/YYYY"
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => <TextField sx={{ mt: 2 }} {...params} />}
                    />
                </LocalizationProvider>
                    <TextField sx={{mt: 2}} variant='outlined' type="password" label='Mot de passe' required>
                    </TextField>
                    <TextField sx={{mt: 2}} variant='outlined' type="password" label='Confirmer votre mot de passe' required>
                    </TextField>
                    <Button 
                        sx={{ mt: 2 }} 
                        color='info' 
                        variant="contained" 
                        type="submit">
                        S'inscrire
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
}

export default SignUp;
