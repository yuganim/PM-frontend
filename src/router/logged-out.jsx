import { useState } from 'react';
import { Header } from '../component/common/header';

export const LoggedOut = () => {
  const [joinInput, setJoinInput] = useState({
    userId: '',
    username: '',
    password: '',
  });

  // 1. 인풋에 뭔가를 입력했을때 joinInput 변수에 들어있는 프로퍼티를 변경하도록 만든다.
  // 2. 회원가입 버튼을 누르면 joinInput 정보들을

  // 3. 서버에 전송해서 회원가입을 시킨다.

  // 자바스크립트의 이벤트 작동방식! 을 알아봅시다.

  return (
    <>
      <Header />
      <form>
        <label htmlFor="">아이디</label>
        <input
          type="text"
          value={joinInput.userId}
          onChange={({ target }) => {
            setJoinInput({ ...joinInput, userId: target.value });
          }}
        />
        <label htmlFor="">닉네임</label>
        <input
          type="text"
          value={joinInput.username}
          onChange={({ target }) => {
            setJoinInput({ ...joinInput, username: target.value });
          }}
        />
        <label htmlFor="">패스워드</label>
        <input
          type="password"
          value={joinInput.password}
          onChange={({ target }) => {
            setJoinInput({ ...joinInput, password: target.value });
          }}
        />
        {/*<button type={}>Join</button>*/}
      </form>
    </>
  );
};
