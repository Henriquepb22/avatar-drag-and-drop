import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import AvatarUpload from '.'

const imageFile = new File(['image file'], 'image.png', {
    type: 'image/png',
})

describe('<AvatarUpload />', () => {
    it('should render avatar upload correctly', () => {
        const { container } = renderWithTheme(<AvatarUpload />)

        expect(screen.getByLabelText(/organization logo/i)).toBeInTheDocument()
        expect(
            screen.getByLabelText(/drop the image here/i)
        ).toBeInTheDocument()
        expect(container.firstChild).toHaveStyle({
            border: '2px dashed #C7CDD3',
            background: '#F2F5F8',
        })
    })

    it('should upload image file correctly', async () => {
        renderWithTheme(<AvatarUpload />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        await waitFor(() => {
            userEvent.upload(fileInput, imageFile)
        })

        await waitFor(() => {
            expect(fileInput.files).toHaveLength(1)
            expect(fileInput.files?.item(0)).toStrictEqual(imageFile)
            expect(
                screen.getByRole('button', { name: /reset/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('img', { name: /you uploaded logo/i })
            ).toBeInTheDocument()
        })
    })

    it('should show error when uploading files that are not images', async () => {
        const file = new File(['file test'], 'text.txt', { type: 'text/plain' })
        renderWithTheme(<AvatarUpload />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        await waitFor(() => {
            userEvent.upload(fileInput, file)
        })

        await waitFor(() => {
            expect(
                screen.getByText(/sorry, the upload failed/i)
            ).toBeInTheDocument()
            expect(
                screen.getByRole('button', { name: /try again/i })
            ).toBeInTheDocument()
        })
    })

    it("should reset entire process clicking on the 'X' icon", async () => {
        renderWithTheme(<AvatarUpload />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        await waitFor(() => {
            userEvent.upload(fileInput, imageFile)
        })

        await waitFor(() => {
            const resetButton = screen.getByRole('button', { name: /reset/i })
            userEvent.click(resetButton)
            expect(fileInput).not.toBeInTheDocument()
        })

        expect(
            screen.getByLabelText(/drop the image here/i)
        ).toBeInTheDocument()
    })
})