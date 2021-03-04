import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.grayLight};
        border: 2px dashed ${theme.colors.border};
        border-radius: ${theme.radius.medium};
        padding: ${theme.spacings.xlarge};
        max-width: 55.3rem;
        height: 17.7rem;
        position: relative;
    `}
`

export const ImageContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.grayMedium};
        border-radius: 50%;
        width: 11.3rem;
        height: 11.3rem;
        overflow: hidden;
    `}
`

export const CloseButton = styled.button`
    ${({ theme }) => css`
        position: absolute;
        top: 20px;
        right: 20px;
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

export const Label = styled.label`
    ${({ theme }) => css`
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
