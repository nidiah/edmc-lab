import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const mainColor = "#209683"
const secondaryColor = "#dab182"

// A custom theme for CETEIcean
// It is not intended to be comprehensive. The rules here are largely derived from earlier work on TEI Boilerplate  
const theme = createMuiTheme({
  typography: {
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
    body1: {
      fontSize: "1.4rem",
      paddingBottom: "1rem",
    },
    body2: {
      fontSize: "1.2rem",
      paddingBottom: "1rem",
    },
    subtitle1: {
      fontSize: "1.4rem",
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "EB Garamond",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
          },
        ],
        "a, a:visited, a:hover, a:active": {
          color: mainColor,
        },
        body: {
          color: "#444",
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "#333",
        },
      },
    },
  },
  palette: {
    primary: {
      main: mainColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
