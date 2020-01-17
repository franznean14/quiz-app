import { useEffect, useRef } from 'react';

export const useInterval = (callback, reset) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
      console.log('running');
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [reset]);
};
