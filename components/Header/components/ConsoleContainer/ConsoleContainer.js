import { useState } from 'react'
import { Speakers } from 'assets'
import { usePixelArt, ACTIONS } from 'hooks'

import styles from './ConsoleContainer.module.scss'

export default function ConsoleContainer() {
  const [selectedColor, setSelectedColor] = useState()
  const [action, setAction] = useState(ACTIONS.DRAW)

  const { table, reset, DEFAULT_COLORS } = usePixelArt(
    { height: 32, width: 32 },
    selectedColor,
    action,
  )

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.console}>
        <div className={styles.topContainer}>
          <table className={styles.pixelArtTable}>
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
              <button className={styles.saveButton}>Save</button>
            </div>
            <div className={styles.consoleButtonsContainer}>
              <div
                onClick={() => setAction(ACTIONS.DRAW)}
                style={{ gridColumn: 2, gridRow: 1, position: 'relative' }}
              >
                <button className={styles.consoleActionButton}>X</button>
                <input
                  type="color"
                  className={styles.colorPicker}
                  onChange={e => setSelectedColor(e.target.value)}
                  onBlur={e => setSelectedColor(e.target.value)}
                />
              </div>
              <div onClick={() => setAction(ACTIONS.ERASE)} style={{ gridColumn: 3, gridRow: 2 }}>
                <button
                  className={styles.consoleActionButton}
                  onClick={() => setSelectedColor(DEFAULT_COLORS.erased)}
                >
                  Y
                </button>
              </div>
              <div
                onClick={() => setAction(ACTIONS.FILL)}
                style={{ gridColumn: 2, gridRow: 3, position: 'relative' }}
              >
                <button className={styles.consoleActionButton}>W</button>
                <input
                  type="color"
                  className={styles.colorPicker}
                  onChange={e => setSelectedColor(e.target.value)}
                  onBlur={e => setSelectedColor(e.target.value)}
                />
              </div>
              <div onClick={() => reset()} style={{ gridColumn: 1, gridRow: 2 }}>
                <button className={styles.consoleActionButton}>Z</button>
              </div>
            </div>
          </div>
          <Speakers className={styles.speakers} />
        </div>
      </div>
    </div>
  )
}
