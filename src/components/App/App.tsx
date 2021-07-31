import React from 'react'
import { useStyles } from './App.style'
import { Router } from '../Router/Router'
import { MuiThemeProvider, CssBaseline, Box} from '@material-ui/core'
import { theme } from '../../_config/theme'


export const App : React.FC = () => {
    const style = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={style.app}>
                <Router />
            </Box>
        </MuiThemeProvider>
    )
}