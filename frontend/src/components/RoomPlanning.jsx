import { Button, Typography } from "@mui/material"
import dayjs from 'dayjs';

const RoomPlanning = ({ planning, roomId, setUpdating }) => {
    const frenchDays = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    const englishDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    async function putFetch(d) {
        try {
            await fetch(`http://localhost:3000/rooms/update/${roomId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(d)
            })
            setUpdating(u => !u)
        }
        catch(error) {
            console.log('Updating error: ', error)
            setUpdating(u => !u)
        }
    }

    return(
            <div>
                <Typography variant="h6">Disponibilités</Typography>
                <ul className="planning-week">
                    {planning.map((day,index) => (
                        <li className="planning-day" key={day.day}>
                            <Typography>
                                {/* {frenchDays[englishDays.indexOf(day.day)]} */}
                                {/* {dayjs(`2023-01-${11+index}`).format('dddd D MMMM')} */}
                                {new Date().toLocaleDateString()}
                            </Typography>
                            <div className="planning-buttons">
                                <Button 
                                    sx={{ mx: 1 }}
                                    variant="contained"
                                    color="success"
                                    disabled={!day.morning}
                                    onClick={() => putFetch({
                                        day: day.day,
                                        data: {
                                            day: day.day,
                                            morning: false,
                                            afternoon: day.afternoon
                                        }
                                    })}
                                >
                                    Matin
                                </Button>
                                <Button
                                    sx={{ mx: 1 }}
                                    color="success"
                                    variant="contained"
                                    disabled={!day.afternoon}
                                    onClick={() => putFetch({
                                        day: day.day,
                                        data: {
                                            day: day.day,
                                            morning: day.morning,
                                            afternoon: false
                                        }
                                    })}
                                >
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