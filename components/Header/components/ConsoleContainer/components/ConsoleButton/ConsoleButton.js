import classNames from 'classnames/bind'

import styles from './ConsoleButton.module.scss'

const cx = classNames.bind(styles)

export default function ConsoleButton({
  selectedAction,
  action,
  style,
  icon,
  hasColorPicker,
  setSelectedColor,
  onClick,
}) {
  return (
    <div onClick={onClick} style={style}>
      <button
        className={cx({
          consoleActionButton: true,
          consoleActionSelected: selectedAction === action,
        })}
      >
        {icon}
      </button>
      {hasColorPicker && (
        <input
          type="color"
          className={styles.colorPicker}
          onChange={e => setSelectedColor(e.target.value)}
          onBlur={e => setSelectedColor(e.target.value)}
        />
      )}
    </div>
  )
}
