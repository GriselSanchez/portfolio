import { useRef, useState } from 'react'
import { BucketIcon, EraserIcon, PaintIcon, ResetIcon, Speakers } from 'assets'
import { usePixelArt, ACTIONS, useDownloadImage } from 'hooks'

import styles from './ConsoleContainer.module.scss'
import ConsoleButton from './components/ConsoleButton/ConsoleButton'

export default function ConsoleContainer() {
  const [selectedColor, setSelectedColor] = useState()
  const [action, setAction] = useState(ACTIONS.DRAW)

  const canvasRef = useRef()
  const { downloadPixelArt, loading } = useDownloadImage(canvasRef.current, 'Pixel-Art')
  const { table, reset } = usePixelArt({ height: 32, width: 32 }, selectedColor, action)

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.console}>
        <div className={styles.topContainer}>
          <table ref={canvasRef} className={styles.pixelArtTable}>
            {table}
          </table>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.fakeButtons}>
            <div>
              <div className={styles.fakeRoundedButton} />
              <div className={styles.fakeLongButton} />
            </div>
            <div>
              <div className={styles.fakeLongButton} />
              <div className={styles.fakeLongButton} />
            </div>
          </div>
          <div className={styles.actionButtons}>
            <div>
              <button
                className={styles.saveButton}
                onClick={() => downloadPixelArt()}
                disabled={loading}
              >
                Save
              </button>
            </div>
            <div className={styles.consoleButtonsContainer}>
              <ConsoleButton
                label="draw"
                selectedAction={action}
                action={ACTIONS.DRAW}
                style={{ gridColumn: 2, gridRow: 1, position: 'relative' }}
                icon={<PaintIcon />}
                hasColorPicker
                setSelectedColor={setSelectedColor}
                onClick={() => setAction(ACTIONS.DRAW)}
              />
              <ConsoleButton
                label="fill"
                selectedAction={action}
                action={ACTIONS.FILL}
                style={{ gridColumn: 3, gridRow: 2, position: 'relative' }}
                icon={<BucketIcon />}
                hasColorPicker
                setSelectedColor={setSelectedColor}
                onClick={() => setAction(ACTIONS.FILL)}
              />
              <ConsoleButton
                label="erase"
                selectedAction={action}
                action={ACTIONS.ERASE}
                style={{ gridColumn: 2, gridRow: 3 }}
                icon={<EraserIcon />}
                onClick={() => setAction(ACTIONS.ERASE)}
              />
              <ConsoleButton
                label="reset"
                selectedAction={action}
                style={{ gridColumn: 1, gridRow: 2 }}
                icon={<ResetIcon />}
                onClick={() => {
                  reset()
                  setAction(ACTIONS.DRAW)
                }}
              />
            </div>
          </div>
          <Speakers className={styles.speakers} />
        </div>
      </div>
    </div>
  )
}
