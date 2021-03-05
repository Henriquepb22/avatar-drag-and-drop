import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'

import ErrorBox from '.'

describe('<ErrorBox />', () => {
    it('should render error box correctly', () => {
        const handleReset = jest.fn()
        const { container } = renderWithTheme(
            <ErrorBox handleReset={handleReset} />
        )

        expect(
            screen.getByText(/sorry, the upload failed/i)
        ).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: /try again/i })
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should call handleReset function on button click', () => {
        const handleReset = jest.fn()
        renderWithTheme(<ErrorBox handleReset={handleReset} />)

        const resetButton = screen.getByRole('button', { name: /try again/i })
        userEvent.click(resetButton)

        expect(handleReset).toHaveBeenCalledTimes(1)
    })
})
