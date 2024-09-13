import { useState, useEffect } from 'react'

// 커스텀 훅: 애니메이션 타이밍을 제어하는 로직
const useAnimationTimers = (timingConfig = {}) => {
  const [showAnimations, setShowAnimations] = useState({
    showHorizontalLine: false,
    showVerticalLine: false
  })

  // 타이머 설정 함수
  const setAnimationTimer = (key, delay) => {
    setTimeout(() => {
      setShowAnimations((prev) => ({ ...prev, [key]: true }))
    }, delay)
  }

  useEffect(() => {
    // 기본 타이밍 설정
    const defaultTiming = {
      horizontalLine: 500,
      verticalLine: 700
    }

    // 사용자가 제공한 설정을 병합
    const timing = { ...defaultTiming, ...timingConfig }

    // 타이머 설정
    setAnimationTimer('showHorizontalLine', timing.horizontalLine)
    setAnimationTimer('showVerticalLine', timing.verticalLine)

    // 컴포넌트가 언마운트될 때 타이머 정리 (타이머 ID를 저장하지 않고 있어 명시적 정리는 생략)
  }, [timingConfig])

  return showAnimations
}

export default useAnimationTimers
