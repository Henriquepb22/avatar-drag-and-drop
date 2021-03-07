import styled, { css } from 'styled-components'

import * as AvatarUpload from 'components/AvatarUpload/styles'
import * as Image from 'components/Image/styles'

export const ErrorBox = styled(AvatarUpload.Content)`
    ${Image.Image} {
        width: auto;
        height: auto;
    }
`

export const ErrorInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ErrorMessage = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        font-size: ${theme.font.sizes.medium};
        letter-spacing: -0.02em;
        line-height: 180%;
    `}
`

export const ErrorButton = styled.button`
    ${({ theme }) => css`
        width: fit-content;
        font-family: ${theme.font.family};
        border: 0;
        background: none;
        line-height: 180%;
        color: ${theme.colors.primary};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.medium};
        letter-spacing: -0.02em;
        text-decoration-line: underline;

        &:hover {
            cursor: pointer;
        }
    `}
`
