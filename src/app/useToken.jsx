
import React, {useState} from 'react';

const useToken = () => {
    const getTokens =() =>{
        const tokenString = sessionStorage.getItem('tokens');
        const tokens = JSON.parse(tokenString);
        return tokens;
    } 

    const [tokens, setTokens] = useState(getTokens());

    const saveTokens = (apiResponse) => {
        sessionStorage.setItem('tokens', JSON.stringify(apiResponse));
        setTokens(apiResponse);
      };

      const clearTokens = () => {
        sessionStorage.removeItem('tokens');
        setTokens(null);
      };

      return {
        setTokens: saveTokens,
        clearTokens,
        tokens,
      };
    };

export default useToken;