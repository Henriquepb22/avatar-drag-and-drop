import { useState } from 'react'
import { cropImage, getFileDataUrl } from 'utils/logic/helpers'
import FileDropzone from 'components/FileDropzone'
import ErrorBox from 'components/ErrorBox'
import Button from 'components/Button'
import Slider from 'components/Slider'
import Image from 'components/Image'

import closeIcon from 'assets/img/icons/close.svg'
import * as S from './styles'

const AvatarUpload = () => {
    const [uploadedFile, setUploadedFile] = useState<string | null>(null)
    const [zoomLevel, setZoomLevel] = useState(5)
    const [error, setError] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const handleFileUpload = async (file: File) => {
        setUploadedFile(null)
        setIsSaved(false)
        try {
            const imageData = await getFileDataUrl(file)
            setUploadedFile(imageData)
        } catch (error) {
            setError(true)
        }
    }

    const handleReset = () => {
        setUploadedFile(null)
        setError(false)
    }

    const handleSave = async () => {
        if (uploadedFile) {
            const croppedImage = await cropImage(uploadedFile, zoomLevel)
            setUploadedFile(croppedImage)
            setIsSaved(true)
        }
    }

    // Scaling image from 100% to 250%
    const handleCrop = (cropBy: number) => setZoomLevel((cropBy + 5) / 10)

    return (
        <S.Wrapper removeBorder={!!error || (!!uploadedFile && !isSaved)}>
            {isSaved && uploadedFile && (
                <Image
                    src={uploadedFile}
                    altText="you cropped logo"
                    zoomLevel={zoomLevel}
                />
            )}
            {error && <ErrorBox handleReset={handleReset} />}
            {((!error && !uploadedFile) || isSaved) && (
                <FileDropzone
                    isSaved={isSaved}
                    handleFileUpload={handleFileUpload}
                />
            )}
            {!!uploadedFile && !isSaved && (
                <S.Content>
                    <Image
                        src={uploadedFile}
                        altText="you uploaded logo"
                        zoomLevel={zoomLevel}
                    />
                    <S.Form>
                        <Slider onChange={handleCrop} />
                        <Button type="button" onClick={handleSave}>
                            Save
                        </Button>
                    </S.Form>
                </S.Content>
            )}
            {(error || !!uploadedFile) && !isSaved && (
                <S.CloseButton
                    type="button"
                    aria-label="reset"
                    onClick={handleReset}
                >
                    <img src={closeIcon} alt="close" />
                </S.CloseButton>
            )}
        </S.Wrapper>
    )
}

export default AvatarUpload
