import Image from 'components/Image'

import infoIcon from 'assets/img/icons/info.svg'
import * as S from './styles'

type ErrorBoxProps = {
    handleReset: () => void
}

const ErrorBox = ({ handleReset }: ErrorBoxProps) => {
    return (
        <S.ErrorBox>
            <Image src={infoIcon} altText="exclamation point" />
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
