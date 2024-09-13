import useLocalStorageInput from './useLocalStorageInput' // 훅을 불러오기
import styles from './LocalstorageInput.module.scss'

export default function LocalStorageInput() {
  const [name, handleNameChange, clearName] = useLocalStorageInput('name', '') // 기본값은 빈 문자열

  return (
    <div className={styles.main}>
      <h1>저장된 이름 {`[ ${name} ]`}</h1>
      <input
        type="text"
        value={name}
        className={styles.input}
        onChange={handleNameChange}
        placeholder="이름을 입력하세요"
      />
      <button className={`${styles.button} ${styles.black}`} onClick={clearName}>
        이름 삭제
      </button>
    </div>
  )
}
