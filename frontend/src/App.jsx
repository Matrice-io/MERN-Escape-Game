
import Header from "./components/Header"
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

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
      <SignUp />
      <Footer />
    </ThemeProvider>
  )
}

export default App