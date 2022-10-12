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
  label,
}) {
  return (
    <div onClick={onClick} style={style}>
      <button
        aria-label={label}
        className={cx({
          consoleActionButton: true,
          consoleActionSelected: selectedAction === action,
        })}
      >
        {icon}
      </button>
      {hasColorPicker && (
        <input
          aria-label={`color-picker-${label}`}
          type="color"
          className={styles.colorPicker}
          onChange={e => setSelectedColor(e.target.value)}
          onBlur={e => setSelectedColor(e.target.value)}
        />
      )}
    </div>
  )
}
