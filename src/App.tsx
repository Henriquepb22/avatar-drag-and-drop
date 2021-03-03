import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from 'styles/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>
                <header>
                    <p>Hello</p>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default App
