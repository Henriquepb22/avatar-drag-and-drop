import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Slider from '.'

describe('<Slider />', () => {
    it('should render slider correctly', () => {
        const { container } = renderWithTheme(<Slider onChange={jest.fn} />)

        expect(screen.getByRole('slider')).toBeInTheDocument()
        expect(container).toMatchInlineSnapshot(`
            .c0 {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-flex-direction: column;
              -ms-flex-direction: column;
              flex-direction: column;
            }

            .c1 {
              font-size: 1.6rem;
              line-height: 180%;
              -webkit-letter-spacing: -0.02em;
              -moz-letter-spacing: -0.02em;
              -ms-letter-spacing: -0.02em;
              letter-spacing: -0.02em;
              color: #677489;
              margin-bottom: 0.8rem;
            }

            .c2 {
              cursor: pointer;
              height: 0.2rem;
              width: 100%;
            }

            <div>
              <div
                class="c0"
              >
                <label
                  class="c1"
                  for="slider"
                >
                  Crop
                </label>
                <input
                  class="c2"
                  id="slider"
                  max="10"
                  type="range"
                  value="5"
                />
              </div>
            </div>
        `)
    })

    it('should call onChange when value change', () => {
        const handleCrop = jest.fn()
        renderWithTheme(<Slider onChange={handleCrop} />)

        const slider = screen.getByRole('slider')
        fireEvent.change(slider, { target: { value: 1 } })

        expect(handleCrop).toHaveBeenCalledTimes(2)
    })
})
