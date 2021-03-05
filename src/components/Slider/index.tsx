import { useEffect, useState } from 'react'

import * as S from './styles'

type SliderProps = {
    onChange: (value: number) => void
}

const Slider = ({ onChange }: SliderProps) => {
    const [value, setValue] = useState(5)

    useEffect(() => {
        onChange(value)
    }, [value, onChange])

    return (
        <S.SliderContainer>
            <S.SliderLabel htmlFor="slider">Crop</S.SliderLabel>
            <S.Slider
                id="slider"
                type="range"
                value={value}
                onChange={(e) => setValue(e.currentTarget.valueAsNumber)}
                max={10}
            />
        </S.SliderContainer>
    )
}

export default Slider
