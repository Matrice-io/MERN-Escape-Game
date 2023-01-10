import { Button, Typography } from "@mui/material"

const RoomPlanning = ({ planning }) => {
    const frenchDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    const englishDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    return(
        <div>
            <Typography variant="h6">Disponibilités</Typography>
            <ul className="planning-week">
                {planning.map(day => (
                    <li className="planning-day" key={day.day}>
                        <Typography>
                            {frenchDays[englishDays.indexOf(day.day)]}
                        </Typography>
                        <div className="planning-buttons">
                            <Button 
                                sx={{ mx: 1 }}
                                variant="contained"
                                color="success"
                                disabled={!day.morning}>
                                Matin
                            </Button>
                            <Button
                                sx={{ mx: 1 }}
                                color="success"
                                variant="contained"
                                disabled={!day.afternoon}>
                                Aprèm
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RoomPlanning