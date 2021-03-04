import React, { useState } from 'react'
import { handleFileRead, isImageFile } from 'utils/logic/helpers'
import ErrorBox from 'components/ErrorBox'

import paintingIcon from 'assets/img/icons/painting.svg'
import closeIcon from 'assets/img/icons/close.svg'
import * as S from './styles'

const AvatarUpload = () => {
    const [uploadedFile, setUploadedFile] = useState<string | null>(null)
    const [error, setError] = useState(false)

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        if (e.dataTransfer.files) {
            handleFileUpload(e.dataTransfer.files[0])
        }
    }

    const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
    }

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.currentTarget.files) {
            handleFileUpload(e.currentTarget.files[0])
        }
    }

    const handleFileUpload = async (file: File) => {
        const isValidImage = isImageFile(file)
        if (isValidImage) {
            try {
                const imageData = await handleFileRead(file)
                setUploadedFile(imageData)
            } catch (error) {
                setError(!!error)
            }
        } else {
            setError(true)
        }
    }

    const handleReset = () => {
        setUploadedFile(null)
        setError(false)
    }

    return (
        <S.Wrapper>
            {error && <ErrorBox handleReset={handleReset} />}
            {!error && !uploadedFile && (
                <>
                    <S.Label
                        htmlFor="uploadInput"
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        tabIndex={0}
                    >
                        <S.LabelText>
                            <img src={paintingIcon} alt="mountain and sun" />
                            Organization Logo
                        </S.LabelText>
                        <S.LabelPlaceholder>
                            Drop the image here or click to browse.
                        </S.LabelPlaceholder>
                    </S.Label>
                    <S.Input
                        type="file"
                        id="uploadInput"
                        accept="image/*"
                        onChange={handleFileSelected}
                    />
                </>
            )}
            {!!uploadedFile && (
                <S.ImageContainer>
                    <img src={uploadedFile} alt="you uploaded logo" />
                </S.ImageContainer>
            )}
            {(error || uploadedFile) && (
                <S.CloseButton
                    type="button"
                    aria-label="reset"
                    onClick={handleReset}
                >
                    <img src={closeIcon} alt="cross" />
                </S.CloseButton>
            )}
        </S.Wrapper>
    )
}

export default AvatarUpload
