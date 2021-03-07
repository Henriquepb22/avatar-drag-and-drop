import AvatarUpload from 'components/AvatarUpload'
import { ThemeProvider } from 'styled-components'
import { Container } from 'components/Container'
import theme from 'styles/theme'

import GlobalStyles from './styles/global'
import 'styles.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Container>
                <AvatarUpload />
            </Container>
        </ThemeProvider>
    )
}

export default App
