import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Inter Regular'), local('Inter-Regular'),
            url('/fonts/Inter-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local('Inter Medium'), local('Inter-Medium'),
            url('/fonts/Inter-Medium.ttf') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ${({ theme }) => css`
        html {
            font-size: 62.5%;
        }

        body {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
        }
    `}
`

export default GlobalStyles
