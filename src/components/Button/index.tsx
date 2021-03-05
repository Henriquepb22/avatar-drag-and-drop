import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
    return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default Button
