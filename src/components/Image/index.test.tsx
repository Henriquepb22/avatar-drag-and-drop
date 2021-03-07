import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/dom'

import Image from '.'

describe('<Image />', () => {
    it('should render image correctly', () => {
        const { container } = renderWithTheme(
            <Image src="image.png" altText="some image" />
        )

        expect(
            screen.getByRole('img', { name: /some image/i })
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should change image scale by zoom level', () => {
        renderWithTheme(
            <Image src="image.png" altText="some image" zoomLevel={1.5} />
        )

        const image = screen.getByRole('img', { name: /some image/i })
        expect(image).toHaveStyle({
            transform: 'scale(1.5)',
        })
    })
})
