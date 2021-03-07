const isImageFile = (file: File) => {
    const fileType = file.type
    const baseMimeType = fileType.split('/')[0]

    if (baseMimeType !== 'image') return false
    return true
}

export const getFileDataUrl = async (file: File): Promise<string> => {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
        const isImageType = isImageFile(file)

        if (isImageType) {
            reader.readAsDataURL(file)
            reader.onload = () => {
                if (reader.result) {
                    resolve(reader.result.toString())
                }
            }
        } else {
            reader.abort()
            reject(new Error('File is not an recognized image type'))
        }
    })
}

export const cropImage = async (
    imageSrc: string,
    zoomLevel: number
): Promise<string> => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const image = new Image()

    return new Promise((resolve, reject) => {
        image.src = imageSrc

        image.onload = () => {
            if (context) {
                const needCompression =
                    Math.max(canvas.width, canvas.height) > 1000

                canvas.width = needCompression ? image.width / 2 : image.width
                canvas.height = needCompression
                    ? image.height / 2
                    : image.height

                context.drawImage(image, 0, 0, canvas.width, canvas.height)
                context.globalCompositeOperation = 'destination-in'
                context.beginPath()
                context.arc(
                    canvas.width * 0.5,
                    canvas.height * 0.5,
                    (Math.max(canvas.width, canvas.height) * 0.5) /
                        (zoomLevel * 2),
                    0,
                    2 * Math.PI
                )
                context.fill()
                context.globalCompositeOperation = 'source-over'

                resolve(canvas.toDataURL('image/png', 1))
            }
        }

        image.onerror = () => {
            reject(new Error('Something bad happened...'))
        }
    })
}
