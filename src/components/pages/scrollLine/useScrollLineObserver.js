import { useState, useEffect, useRef } from 'react'

export function useScrollLineObserver() {
  // 가로선 상태를 관리하는 state (6개의 false 값을 초기값으로 설정)
  const [showHorizontalLines, setShowHorizontalLines] = useState([false, false, false, false, false, false])

  // 세로선 상태를 관리하는 state (2개의 false 값을 초기값으로 설정)
  const [showVerticalLines, setShowVerticalLines] = useState([false, false])

  // 🔥 각 섹션을 참조할 배열, 나중에 각 섹션 DOM 요소를 저장하는데 사용됨
  const sectionsRefs = useRef([])

  useEffect(() => {
    // 🔥 IntersectionObserver를 사용해 섹션들이 뷰포트에 들어오거나 나갈 때 이벤트를 처리
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index) // 섹션 인덱스를 가져옴

            // 🔥 가로선 표시를 위한 상태 업데이트, 해당 인덱스만 true로 변경
            setShowHorizontalLines((prev) => prev.map((val, i) => (i === index ? true : val)))

            // 🔥 첫 번째와 두 번째 섹션일 때만 세로선을 표시하기 위한 상태 업데이트
            if (index === 0 || index === 1) {
              setShowVerticalLines((prev) => prev.map((val, i) => (i === index ? true : val)))
            }
          }
        })
      },
      {
        // 🔥 모바일 환경에서는 threshold를 0.1로 낮춰서 더 작은 부분이 보여도 트리거되도록 설정
        threshold: window.innerWidth <= 768 ? 0.1 : 0.3
      }
    )

    // 🔥 각 섹션 DOM 요소를 관찰 대상으로 추가
    sectionsRefs.current.forEach((section) => {
      if (section instanceof Element) {
        observer.observe(section)
      }
    })

    // 🔥 컴포넌트가 언마운트될 때 observer를 해제하여 메모리 누수를 방지
    return () => {
      sectionsRefs.current.forEach((section) => {
        if (section instanceof Element) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  return { sectionsRefs, showHorizontalLines, showVerticalLines } // 🔥 각 섹션 참조 및 선 상태들을 반환
}
