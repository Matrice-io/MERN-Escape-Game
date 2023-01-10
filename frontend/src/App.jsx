
import Header from "./components/Header"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
