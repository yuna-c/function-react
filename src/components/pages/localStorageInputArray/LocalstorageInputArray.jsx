import { useState } from 'react'
import useLocalStorageInputArray from './useLocalStorageInputArray.js' // 훅을 불러오기
import styles from './LocalstorageInputArray.module.scss'

export default function LocalStorageInputArray() {
  const [nameList, addName, removeName, clearAll] = useLocalStorageInputArray('names', []) // 이름 배열을 관리
  const [name, setName] = useState('')

  // 입력 값이 변경될 때 상태 업데이트
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // 이름 추가 함수
  const handleAddName = (e) => {
    e.preventDefault() // 폼 제출 시 기본 동작을 방지
    if (name.trim()) {
      addName(name)
      setName('') // 입력 필드 초기화
    }
  }

  // 전체 삭제 시 입력 필드도 초기화
  const handleClearAll = () => {
    clearAll() // 배열과 localStorage 초기화
    setName('') // 입력 필드 초기화
  }
  return (
    <div className={styles.main}>
      <h1>저장된 이름</h1>
      <hr />
      <form onSubmit={handleAddName}>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={handleNameChange}
          placeholder="이름을 입력하세요"
        />
        <button className={styles.button} type="submit">
          이름 추가
        </button>
        <button className={styles.button} type="button" onClick={handleClearAll}>
          전체 삭제
        </button>
      </form>
      <ul>
        {nameList.length > 0 ? (
          nameList.map((nameItem, index) => (
            <li key={index}>
              {nameItem}
              <button onClick={() => removeName(index)} className={`${styles.button} ${styles.black}`}>
                삭제
              </button>
            </li>
          ))
        ) : (
          <p>저장된 이름이 없습니다.</p>
        )}
      </ul>
    </div>
  )
}
