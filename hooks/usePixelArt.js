import React, { useState, useMemo } from 'react'
import { ArrayUtils } from 'utils'

export const ACTIONS = {
  DRAW: 1,
  FILL: 2,
  ERASE: 3,
}

const DEFAULT_COLORS = {
  painted: 'black',
  erased: 'white',
}

export default function usePixelArt(
  { height, width },
  selectedColor = DEFAULT_COLORS.painted,
  action = ACTIONS.DRAW,
) {
  const [isClicked, setIsClicked] = useState(false)
  const colors = useMemo(() => ArrayUtils.new2dArray(width, height, DEFAULT_COLORS.erased), [])

  const drawNear = (x, y, color) => {
    if (x >= width || y >= height || x < 0 || y < 0) return
    if (colors[x][y] !== color || colors[x][y] === selectedColor) return

    draw({ x, y })
    drawNear(x + 1, y, color)
    drawNear(x - 1, y, color)
    drawNear(x, y + 1, color)
    drawNear(x, y - 1, color)
  }

  const changeBackgroundColor = (event, color) => {
    if (event) event.currentTarget.style.backgroundColor = color
  }

  const draw = ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    colors[x][y] = selectedColor
  }

  const fill = ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    drawNear(x, y, colors[x][y])
  }

  const erase = ({ x, y }, event) => {
    changeBackgroundColor(event, DEFAULT_COLORS.erased)
    colors[x][y] = DEFAULT_COLORS.erased
  }

  const reset = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        colors[i][j] = DEFAULT_COLORS.erased
      }
    }
  }

  const actionSwitch = (point, event) => {
    switch (action) {
      case ACTIONS.DRAW:
        draw(point, event)
        break
      case ACTIONS.FILL:
        fill(point, event)
        break
      case ACTIONS.ERASE:
        erase(point, event)
        break
      default:
        break
    }
  }

  const onMouseDown = (point, event) => {
    setIsClicked(true)
    actionSwitch(point, event)
  }

  const onMouseOver = (point, event) => {
    if (isClicked) {
      actionSwitch(point, event)
    }
  }

  const onMouseUp = () => {
    setIsClicked(false)
  }

  return {
    table: (
      <tbody onMouseLeave={onMouseUp}>
        {colors.map((column, i) => (
          <tr key={i}>
            {column.map((backgroundColor, j) => (
              <td
                key={j}
                onMouseDown={event => onMouseDown({ x: i, y: j }, event)}
                onMouseOver={event => onMouseOver({ x: i, y: j }, event)}
                onMouseUp={onMouseUp}
                style={{
                  backgroundColor,
                }}
              />
            ))}
          </tr>
        ))}
      </tbody>
    ),
    reset,
  }
}
