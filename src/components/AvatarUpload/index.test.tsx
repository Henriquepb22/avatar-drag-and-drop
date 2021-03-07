import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { getFileDataUrl } from 'utils/logic/helpers'
import userEvent from '@testing-library/user-event'

import AvatarUpload from '.'

const imageFile = new File(['image file'], 'image.png', {
    type: 'image/png',
})

describe('<AvatarUpload />', () => {
    it('should render avatar upload correctly', () => {
        const { container } = renderWithTheme(
            <AvatarUpload handleImageData={jest.fn()} />
        )

        expect(screen.getByLabelText(/organization logo/i)).toBeInTheDocument()
        expect(
            screen.getByLabelText(/drop the image here/i)
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should show error when uploading files that are not images', async () => {
        const notImageFile = new File(['file test'], 'text.txt', {
            type: 'text/plain',
        })
        renderWithTheme(<AvatarUpload handleImageData={jest.fn()} />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        userEvent.upload(fileInput, notImageFile)

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
        renderWithTheme(<AvatarUpload handleImageData={jest.fn()} />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        userEvent.upload(fileInput, imageFile)

        await waitFor(() => {
            const resetButton = screen.getByRole('button', { name: /reset/i })
            userEvent.click(resetButton)
            expect(fileInput).not.toBeInTheDocument()
        })

        expect(
            screen.getByLabelText(/drop the image here/i)
        ).toBeInTheDocument()
    })

    it('should give parent access to image raw data', async () => {
        const handleImageData = jest.fn()
        renderWithTheme(<AvatarUpload handleImageData={handleImageData} />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        const imageData = await getFileDataUrl(imageFile)

        userEvent.upload(fileInput, imageFile)

        await waitFor(() => {
            expect(
                screen.getByRole('img', { name: /you uploaded logo/i })
            ).toBeInTheDocument()
            expect(
                screen.getByRole('button', { name: /save/i })
            ).toBeInTheDocument()
            expect(handleImageData).toHaveBeenCalledTimes(1)
            expect(handleImageData).toHaveBeenCalledWith(imageData)
        })
    })
})
