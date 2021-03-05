import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.grayMedium};
        border-radius: 50%;
        width: 11.4rem;
        height: 11.4rem;
        overflow: hidden;
    `}
`

type ImageProps = {
    zoomLevel: number
}

export const Image = styled.img<ImageProps>`
    ${({ zoomLevel }) => css`
        max-width: 24rem;
        max-height: 24rem;
        transform: scale(${zoomLevel});
    `}
`
