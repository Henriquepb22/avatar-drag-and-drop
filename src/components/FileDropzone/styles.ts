import styled, { css } from 'styled-components'

type WrapperProps = {
    isSaved: boolean
}

export const Wrapper = styled.label<WrapperProps>`
    ${({ theme, isSaved }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        font-size: ${theme.font.sizes.small};
        line-height: 180%;

        &:hover {
            cursor: pointer;
        }

        &:focus-within {
            outline: -webkit-focus-ring-color auto 1px;
        }

        ${isSaved &&
        css`
            padding-left: calc(${theme.sizes.image} + ${theme.spacings.large});
        `}
    `}
`

export const LabelText = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.grayDarkness};
        font-weight: ${theme.font.medium};

        > img {
            margin-right: ${theme.spacings.small};
        }
    `}
`

export const LabelPlaceholder = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.grayDark};
    `}
`

export const Input = styled.input`
    height: 0;
    width: 0;
    border: none;
    opacity: 0;
`
