import { useState } from 'react';

const useLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return {
    username,
    setUsername,
    password,
    setPassword,
  };
};

export default useLoginForm;