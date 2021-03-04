import * as S from './styles'

import infoIcon from 'assets/img/icons/info.svg'

type ErrorBoxProps = {
    handleReset: () => void
}

const ErrorBox = ({ handleReset }: ErrorBoxProps) => {
    return (
        <S.ErrorBox>
            <S.ImageContainer>
                <img src={infoIcon} alt="exclamation point" />
            </S.ImageContainer>
            <S.ErrorInfo>
                <S.ErrorMessage>Sorry, the upload failed.</S.ErrorMessage>
                <S.ErrorButton type="button" onClick={handleReset}>
                    Try again
                </S.ErrorButton>
            </S.ErrorInfo>
        </S.ErrorBox>
    )
}

export default ErrorBox
