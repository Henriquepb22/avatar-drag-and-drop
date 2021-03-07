import styled, { css } from 'styled-components'

import * as Button from 'components/Button/styles'

type WrapperProps = {
    removeBorder: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, removeBorder }) => css`
        background: ${theme.colors.grayLight};
        border: 2px dashed ${theme.colors.border};
        border-radius: ${theme.radius.medium};
        padding: ${theme.spacings.large};
        width: 55rem;
        height: 18rem;
        position: relative;

        ${removeBorder &&
        css`
            border-color: transparent;
        `}
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 11.4rem 1fr;
        grid-gap: ${theme.spacings.large};
        align-items: center;
    `}
`

export const Form = styled.form`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        margin-right: ${theme.spacings.large};

        > :not(:last-child) {
            margin-bottom: ${theme.spacings.large};
        }

        ${Button.Wrapper} {
            align-self: flex-end;
            width: 11rem;
        }
    `}
`

export const CloseButton = styled.button`
    ${({ theme }) => css`
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.4rem;
        height: 1.4rem;
        padding: ${theme.spacings.medium};
        border: 0;
        background: none;

        &:hover {
            cursor: pointer;
        }
    `}
`
