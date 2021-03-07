import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        max-width: ${theme.sizes.container};
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`
