import { useState } from 'react'
// import './HoverInImage.scss' // SCSS 파일 import

export default function HoverInImage({ src }) {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const rect = e.target.getBoundingClientRect()

    // 마우스 위치를 이미지 영역 기준으로 계산
    setCursorPos({
      x: clientX - rect.left,
      y: clientY - rect.top
    })
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="hover-container"
      >
        <img src={src ? src : 'https://placehold.co/1200x800'} alt="Sample" className="hover-image" />

        <div
          className={`view ${isHovered ? 'visible' : ''}`}
          style={{
            top: `${cursorPos.y}px`,
            left: `${cursorPos.x}px`
          }}
        >
          VIEW
        </div>
      </div>
    </>
  )
}
