import React, { useEffect, useState } from "react";

type ReturnType<T> = [
  T ,
  React.Dispatch<React.SetStateAction<T>>
];

const useSessionStorage = <T,> (
  key: string, 
  defaultValue?: T
  ): ReturnType<T> => {

  const [state, setState] = useState<T>(() => {
   
    try {
      if (!defaultValue)
      return; // don't retun anything if we don't send in any defaultvalue
      
      const value = sessionStorage.getItem(key);
      return value? JSON.parse(value) : defaultValue; // return value in its original shape if it is found in storage
    }
      catch (err) {
        return defaultValue;
      }
  });

  useEffect(() => {
    if (state) {
      try {
        sessionStorage.setItem(key, JSON.stringify(state)); // write to storage
      }
      catch (err) {
      console.log(err)
      }
    }
  }, [state, key]);

  return [state, setState];
};

export default useSessionStorage;