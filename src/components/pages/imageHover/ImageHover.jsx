import { useState } from 'react'
import './ImageHover.scss' // SCSS 파일을 import

export default function ImageHover() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="main">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="image-container" // SCSS에서 정의한 클래스명
      >
        {/* 이미지 삽입 */}
        <img
          src="https://placehold.co/1200x800"
          alt="Sample"
          className="image" // SCSS에서 정의한 이미지 클래스명
        />

        {/* 마우스를 올리면 나타나는 VIEW 텍스트 */}
        <div
          className={`view-text ${isHovered ? 'hovered' : ''}`} // 호버 상태에 따라 클래스 추가
        >
          VIEW
        </div>
      </div>
    </div>
  )
}
