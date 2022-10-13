import React, { useState, useEffect } from 'react'
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
  const [colors, setColors] = useState([])

  useEffect(() => {
    reset()
  }, [])

  const drawNear = async (x, y, color) => {
    if (x >= width || y >= height || x < 0 || y < 0) return
    if (colors[x][y] !== color || colors[x][y] === selectedColor) return

    await draw({ x, y })
    drawNear(x + 1, y, color)
    drawNear(x - 1, y, color)
    drawNear(x, y + 1, color)
    drawNear(x, y - 1, color)
  }

  const changeBackgroundColor = (event, color) => {
    if (event) event.currentTarget.style.backgroundColor = color
  }

  const draw = async ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    await setColors(prev => {
      prev[x][y] = selectedColor
      return prev
    })
  }

  const fill = ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    drawNear(x, y, colors[x][y])
  }

  const erase = ({ x, y }, event) => {
    changeBackgroundColor(event, DEFAULT_COLORS.erased)
    setColors(prev => {
      prev[x][y] = DEFAULT_COLORS.erased
      return prev
    })
  }

  const reset = () => {
    setColors(ArrayUtils.new2dArray(width, height, DEFAULT_COLORS.erased))
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
      if (action === ACTIONS.FILL) return
      return actionSwitch(point, event)
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
                onTouchStart={event => onMouseDown({ x: i, y: j }, event)}
                onMouseOver={event => onMouseOver({ x: i, y: j }, event)}
                onTouchMove={event => onMouseOver({ x: i, y: j }, event)}
                onMouseUp={onMouseUp}
                onTouchEnd={onMouseUp}
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
