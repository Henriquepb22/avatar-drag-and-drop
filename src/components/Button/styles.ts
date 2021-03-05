import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
    ${({ theme }) => css`
        height: 3.2rem;
        border-radius: ${theme.radius.large};
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.medium};
        line-height: 180%;
        letter-spacing: -0.02em;
        border: 0;

        &:hover {
            cursor: pointer;
        }
    `}
`
