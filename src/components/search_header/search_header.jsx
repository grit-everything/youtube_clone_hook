import React, { memo } from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value); // onSearch 는 app props.onSearch 이고 app 의 onSearch 함수이다.인자 값으로 넘겨주는 value 는 => q 가고 검색결과를 setVideo(result.items) 로 UI에 반영해 준다.
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/img/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>

      <input
        className={styles.input} //
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button
        className={styles.button} //
        type="submit"
        onClick={onClick}
      >
        <img className={styles.buttonImg} src="/img/search.png" alt="search" />
      </button>
    </header>
  );
});

export default SearchHeader;
