import React, { useState, useMemo } from 'react'

export const ACTIONS = {
  DRAW: 1,
  FILL: 2,
  ERASE: 3,
}

export default function usePixelArt({ height, width }, selectedColor, action = ACTIONS.DRAW) {
  const [isClicked, setIsClicked] = useState(false)

  const table = []
  const points = useMemo(
    () => new Array(height).fill(false).map(() => new Array(width).fill(false)),
    [],
  )
  const colors = useMemo(
    () => new Array(height).fill(false).map(() => new Array(width).fill('white')),
    [],
  )

  const drawNear = (x, y) => {
    if (x >= width || y >= height || x < 0 || y < 0) return
    if (points[x][y]) return

    draw({ x, y })
    drawNear(x + 1, y)
    drawNear(x - 1, y)
    drawNear(x, y + 1)
    drawNear(x, y - 1)
  }

  const draw = ({ x, y }, event) => {
    if (event) event.currentTarget.style.backgroundColor = selectedColor
    points[x][y] = true
    colors[x][y] = selectedColor
  }

  const fill = ({ x, y }, event) => {
    event.currentTarget.style.backgroundColor = selectedColor
    drawNear(x, y)
  }

  const erase = ({ x, y }, event) => {
    if (event) event.currentTarget.style.backgroundColor = 'white'
    points[x][y] = false
    colors[x][y] = 'white'
  }

  const reset = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        points[i][j] = false
        colors[i][j] = 'white'
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

  return { table, reset }
}
