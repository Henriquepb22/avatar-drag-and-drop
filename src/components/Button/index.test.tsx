import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/dom'

import Button from '.'

describe('<Button />', () => {
    it('should render button correctly', () => {
        const { container } = renderWithTheme(<Button>click here</Button>)

        expect(
            screen.getByRole('button', { name: /click here/i })
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
