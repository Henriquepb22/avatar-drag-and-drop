import { ThemeProvider } from 'styled-components'
import AvatarUpload from 'components/AvatarUpload'
import theme from 'styles/theme'

import GlobalStyles from './styles/global'
import 'styles.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AvatarUpload />
        </ThemeProvider>
    )
}

export default App
