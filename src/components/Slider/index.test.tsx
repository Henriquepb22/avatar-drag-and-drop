import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Slider from '.'

describe('<Slider />', () => {
    it('should render slider correctly', () => {
        const { container } = renderWithTheme(<Slider onChange={jest.fn} />)

        expect(screen.getByRole('slider')).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    it('should call onChange when value change', () => {
        const handleCrop = jest.fn()
        renderWithTheme(<Slider onChange={handleCrop} />)

        const slider = screen.getByRole('slider')
        fireEvent.change(slider, { target: { value: 1 } })

        expect(handleCrop).toHaveBeenCalledTimes(2)
    })
})
