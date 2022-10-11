import { useState } from 'react'
import html2canvas from 'html2canvas'

export default function useDownloadImage(element, imageFileName) {
  const [loading, setLoading] = useState(false)

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

  const startDownload = element => {
    setLoading(true)
    element.classList.add('no-borders')
  }

  const finishDownload = element => {
    setLoading(false)
    element.classList.remove('no-borders')
  }

  const downloadPixelArt = () => {
    startDownload(element)
    html2canvas(element, { scale: 10 })
      .then(canvas => {
        const image = canvas.toDataURL('image/png', 10.0)
        downloadImage(image, imageFileName)
        finishDownload(element)
      })
      .catch(() => {
        finishDownload(element)
      })
  }

  return { downloadPixelArt, loading }
}
