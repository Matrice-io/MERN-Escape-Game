import Header from "./components/Header"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom'

const theme = createTheme({
    palette: {
        primary: {
            main: "#6059bd",
        },
        secondary:{
          main: "#fff"
        }

    }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
