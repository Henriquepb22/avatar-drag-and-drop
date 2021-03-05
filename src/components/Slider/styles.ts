import styled, { css } from 'styled-components'

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const SliderLabel = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        line-height: 180%;
        letter-spacing: -0.02em;
        color: ${theme.colors.grayDark};
        margin-bottom: ${theme.spacings.xsmall};
    `}
`

export const Slider = styled.input`
    cursor: pointer;
    height: 0.2rem;
    width: 100%;
`
