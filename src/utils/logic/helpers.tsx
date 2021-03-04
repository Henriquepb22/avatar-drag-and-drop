export const handleFileRead = async (file: File): Promise<string> => {
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
        reader.readAsDataURL(file)

        reader.onerror = () => {
            reader.abort()
            reject(reader.error?.message)
        }

        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result.toString())
            }
        }
    })
}

export const isImageFile = (file: File) => {
    const fileType = file.type
    const baseMimeType = fileType.split('/')[0]

    if (baseMimeType !== 'image') return false
    return true
}
