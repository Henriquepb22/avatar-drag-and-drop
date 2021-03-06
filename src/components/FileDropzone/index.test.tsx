import { screen, waitFor, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import FileDropzone from '.'

const imageFile = new File(['image file'], 'image.png', {
    type: 'image/png',
})

describe('<FileDropzone />', () => {
    it('should render file dropzone correctly', () => {
        const { container } = renderWithTheme(
            <FileDropzone handleFileUpload={jest.fn()} />
        )

        expect(
            screen.getByRole('img', { name: /mountain and sun/i })
        ).toBeInTheDocument()
        expect(screen.getByLabelText(/organization logo/i)).toBeInTheDocument()
        expect(
            screen.getByLabelText(/drop the image here/i)
        ).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should upload image file by clicking on input', async () => {
        const handleFileUpload = jest.fn()
        renderWithTheme(<FileDropzone handleFileUpload={handleFileUpload} />)

        const fileInput = screen.getByLabelText(
            /drop the image here/i
        ) as HTMLInputElement

        userEvent.upload(fileInput, imageFile)

        await waitFor(() => {
            expect(fileInput.files).toHaveLength(1)
            expect(fileInput.files?.item(0)).toStrictEqual(imageFile)
            expect(handleFileUpload).toHaveBeenCalledWith(imageFile)
        })
    })

    it('should upload image file by dragging and dropping it', async () => {
        const handleFileUpload = jest.fn()
        renderWithTheme(<FileDropzone handleFileUpload={handleFileUpload} />)

        const fileInput = screen.getByLabelText(/drop the image here/i)

        fireEvent.drop(fileInput, {
            dataTransfer: {
                files: [imageFile],
            },
        })

        await waitFor(() => {
            expect(handleFileUpload).toHaveBeenCalledWith(imageFile)
        })
    })

    it('should prevent default on dragover event', () => {
        renderWithTheme(<FileDropzone handleFileUpload={jest.fn()} />)

        const fileInput = screen.getByLabelText(/drop the image here/i)

        const isPrevented = fireEvent.dragOver(fileInput)
        expect(isPrevented).toBe(false)
    })

    it('should be accessible by tab', () => {
        renderWithTheme(<FileDropzone handleFileUpload={jest.fn()} />)

        const fileInput = screen.getByLabelText(/drop the image here/i)

        expect(fileInput).not.toHaveFocus()
        userEvent.tab()
        expect(fileInput).toHaveFocus()
    })
})
