import { useState } from 'react';

function useLocalStorageInputArray(key, initialValue = []) {
  // localStorage에서 초기 배열 값을 가져오고, 상태를 설정
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('localStorage에서 값을 가져오는 중 오류 발생:', error);
      return initialValue;
    }
  });

  // 새로운 이름을 배열에 추가하는 함수
  const addValue = (newValue) => {
    const updatedValue = [...value, newValue];
    setValue(updatedValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(updatedValue));
    } catch (error) {
      console.error('localStorage에 값을 저장하는 중 오류 발생:', error);
    }
  };

  // 특정 이름을 배열에서 삭제하는 함수
  const removeValue = (index) => {
    const updatedValue = value.filter((_, i) => i !== index);
    setValue(updatedValue);
    try {
      window.localStorage.setItem(key, JSON.stringify(updatedValue));
    } catch (error) {
      console.error('localStorage에서 값을 삭제하는 중 오류 발생:', error);
    }
  };

  // 전체 배열을 삭제하는 함수
  const clearAll = () => {
    setValue([]);
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('localStorage에서 값을 삭제하는 중 오류 발생:', error);
    }
  };

  return [value, addValue, removeValue, clearAll];
}

export default useLocalStorageInputArray;