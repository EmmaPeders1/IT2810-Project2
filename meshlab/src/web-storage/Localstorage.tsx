import React, { useEffect, useState } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T| undefined>>
];

const useLocalStorage = <T,> (
  key: string, 
  defaultValue?: T
  ): ReturnType<T> => {

  const [state, setState] = useState<T | undefined>(() => {
   
    try {
      if (!defaultValue)
      return; // don't retun anything if we don't send in any defaultvalue
      
      const value = localStorage.getItem(key);
      return value? JSON.parse(value) : defaultValue; // return value in its original shape if it is found in storage
    }
      catch (err) {
        return defaultValue;
      }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state)); // write to storage
      }
      catch (err) {
      console.log(err)
      }
    }
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;