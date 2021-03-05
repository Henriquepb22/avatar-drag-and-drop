import * as S from './styles'

type ImageProps = {
    src: string
    altText: string
    zoomLevel?: number
}

const Image = ({ src, altText, zoomLevel = 1 }: ImageProps) => {
    return (
        <S.Wrapper>
            <S.Image src={src} alt={altText} zoomLevel={zoomLevel} />
        </S.Wrapper>
    )
}

export default Image
