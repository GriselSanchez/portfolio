import { useRef, useState } from 'react'
import { BucketIcon, EraserIcon, PaintIcon, ResetIcon, Speakers } from 'assets'
import { usePixelArt, ACTIONS, useDownloadImage } from 'hooks'
import classNames from 'classnames/bind'

import styles from './ConsoleContainer.module.scss'

const cx = classNames.bind(styles)

export default function ConsoleContainer() {
  const [selectedColor, setSelectedColor] = useState()
  const [action, setAction] = useState(ACTIONS.DRAW)

  const canvasRef = useRef()
  const { downloadPixelArt, loading } = useDownloadImage(canvasRef.current, 'Pixel-Art')

  const { table, reset, DEFAULT_COLORS } = usePixelArt(
    { height: 32, width: 32 },
    selectedColor,
    action,
  )

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.console}>
        <div className={styles.topContainer}>
          <table ref={canvasRef} className={styles.pixelArtTable}>
            <tbody>{table}</tbody>
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
              <div
                onClick={() => setAction(ACTIONS.DRAW)}
                style={{ gridColumn: 2, gridRow: 1, position: 'relative' }}
              >
                <button
                  className={cx({
                    consoleActionButton: true,
                    consoleActionSelected: action === ACTIONS.DRAW,
                  })}
                >
                  <PaintIcon />
                </button>
                <input
                  type="color"
                  className={styles.colorPicker}
                  onChange={e => setSelectedColor(e.target.value)}
                  onBlur={e => setSelectedColor(e.target.value)}
                />
              </div>
              <div
                onClick={() => setAction(ACTIONS.FILL)}
                style={{ gridColumn: 3, gridRow: 2, position: 'relative' }}
              >
                <button
                  className={cx({
                    consoleActionButton: true,
                    consoleActionSelected: action === ACTIONS.FILL,
                  })}
                >
                  <BucketIcon />
                </button>
                <input
                  type="color"
                  className={styles.colorPicker}
                  onChange={e => setSelectedColor(e.target.value)}
                  onBlur={e => setSelectedColor(e.target.value)}
                />
              </div>
              <div onClick={() => setAction(ACTIONS.ERASE)} style={{ gridColumn: 2, gridRow: 3 }}>
                <button
                  className={cx({
                    consoleActionButton: true,
                    consoleActionSelected: action === ACTIONS.ERASE,
                  })}
                  onClick={() => setSelectedColor(DEFAULT_COLORS.erased)}
                >
                  <EraserIcon />
                </button>
              </div>
              <div
                onClick={() => {
                  reset()
                  setAction(ACTIONS.DRAW)
                }}
                style={{ gridColumn: 1, gridRow: 2 }}
              >
                <button
                  className={cx({
                    consoleActionButton: true,
                  })}
                >
                  <ResetIcon />
                </button>
              </div>
            </div>
          </div>
          <Speakers className={styles.speakers} />
        </div>
      </div>
    </div>
  )
}
