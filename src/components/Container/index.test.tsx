import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/dom'

import { Container } from '.'

describe('<Container />', () => {
    it('should render container correctly', () => {
        const { container } = renderWithTheme(
            <Container>
                <h2>Hello</h2>
            </Container>
        )

        expect(container.firstChild).toHaveStyle({
            maxWidth: '130rem',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        })
        expect(
            screen.getByRole('heading', { name: /hello/i })
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })
})
