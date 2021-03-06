import React from 'react'

import paintingIcon from 'assets/img/icons/painting.svg'
import * as S from './styles'

type FileDropzoneProps = {
    handleFileUpload: (file: File) => void
    isSaved?: boolean
}

const FileDropzone = ({
    handleFileUpload,
    isSaved = false,
}: FileDropzoneProps) => {
    const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        e.dataTransfer.files?.length &&
            handleFileUpload(e.dataTransfer.files[0])
    }

    const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        e.currentTarget.files?.length &&
            handleFileUpload(e.currentTarget.files[0])
    }

    return (
        <S.Wrapper
            htmlFor="uploadInput"
            onDrop={onDrop}
            onDragOver={onDragOver}
            isSaved={isSaved}
        >
            <S.LabelText>
                <img src={paintingIcon} alt="mountain and sun" />
                Organization Logo
            </S.LabelText>
            <S.LabelPlaceholder>
                Drop the image here or click to browse.
            </S.LabelPlaceholder>
            <S.Input
                type="file"
                id="uploadInput"
                accept="image/*"
                onChange={onChange}
                tabIndex={0}
            />
        </S.Wrapper>
    )
}

export default FileDropzone
