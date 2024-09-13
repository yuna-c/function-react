import { useState } from 'react'

function useLocalStorageInput(key, initialValue = '') {
  // localStorage에서 초기값을 가져오고, 상태를 설정
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('localStorage에서 값을 가져오는 중 오류 발생:', error)
      return initialValue
    }
  })

  // 입력값을 저장하는 함수
  const handleChange = (event) => {
    const inputValue = event.target.value
    setValue(inputValue)
    try {
      window.localStorage.setItem(key, JSON.stringify(inputValue))
    } catch (error) {
      console.error('localStorage에 값을 저장하는 중 오류 발생:', error)
    }
  }

  // 입력값을 삭제하는 함수
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setValue('') // 상태도 빈 값으로 초기화
    } catch (error) {
      console.error('localStorage에서 값을 삭제하는 중 오류 발생:', error)
    }
  }

  return [value, handleChange, removeValue]
}

export default useLocalStorageInput
