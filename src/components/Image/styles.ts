import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.grayMedium};
        border-radius: 50%;
        width: ${theme.sizes.image};
        height: ${theme.sizes.image};
        overflow: hidden;
    `}
`

type ImageProps = {
    zoomLevel: number
}

export const Image = styled.img<ImageProps>`
    ${({ theme, zoomLevel }) => css`
        width: calc(${theme.sizes.image} * 2);
        height: calc(${theme.sizes.image} * 2);
        transform: scale(${zoomLevel});
        object-fit: cover;
    `}
`
