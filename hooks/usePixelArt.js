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

  const table = []
  const points = useMemo(() => ArrayUtils.new2dArray(width, height, false), [])
  const colors = useMemo(() => ArrayUtils.new2dArray(width, height, DEFAULT_COLORS.erased), [])

  const drawNear = (x, y) => {
    if (x >= width || y >= height || x < 0 || y < 0) return
    if (points[x][y]) return

    draw({ x, y })
    drawNear(x + 1, y)
    drawNear(x - 1, y)
    drawNear(x, y + 1)
    drawNear(x, y - 1)
  }

  const changeBackgroundColor = (event, color) => {
    if (event) event.currentTarget.style.backgroundColor = color
  }

  const draw = ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    points[x][y] = true
    colors[x][y] = selectedColor
  }

  const fill = ({ x, y }, event) => {
    changeBackgroundColor(event, selectedColor)
    drawNear(x, y)
  }

  const erase = ({ x, y }, event) => {
    changeBackgroundColor(event, DEFAULT_COLORS.erased)
    points[x][y] = false
    colors[x][y] = DEFAULT_COLORS.erased
  }

  const reset = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        points[i][j] = false
        colors[i][j] = DEFAULT_COLORS.erased
      }
    }
  }

  const onMouseDown = (point, event) => {
    setIsClicked(true)
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

  const onMouseOver = (point, event) => {
    if (isClicked) draw(point, event)
  }

  const onMouseUp = () => {
    setIsClicked(false)
  }

  for (let i = 0; i < height; i++) {
    const columns = []

    for (let j = 0; j < width; j++) {
      const point = { x: j, y: i }

      columns.push(
        <td
          key={j}
          onMouseDown={event => onMouseDown(point, event)}
          onMouseOver={event => onMouseOver(point, event)}
          onMouseUp={onMouseUp}
          style={{
            backgroundColor: colors[j][i],
          }}
        />,
      )
    }

    table.push(<tr key={i}>{columns}</tr>)
  }

  return { table, reset, DEFAULT_COLORS }
}
