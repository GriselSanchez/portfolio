import html2canvas from 'html2canvas'

export default function useDownloadImage(element, imageFileName) {
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement('a')
    fakeLink.style = 'display:none;'
    fakeLink.download = fileName

    fakeLink.href = blob

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)

    fakeLink.remove()
  }

  const downloadPixelArt = () => {
    html2canvas(element, { scale: 1 }).then(canvas => {
      const image = canvas.toDataURL('image/png', 10.0)
      downloadImage(image, imageFileName)
    })
  }

  return downloadPixelArt
}
