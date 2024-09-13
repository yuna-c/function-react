import { useState } from 'react'
import styles from './HoverText.module.scss'
export default function HoverView() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="main">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.textHover}>
        <button>마우스를 올려보세요</button>

        <div className={`${styles.view} ${isHovered ? styles.visible : ''}`}>마우스를 올려보세요</div>
      </div>
    </div>
  )
}
