import { useCallback } from 'react';


const useScrollWithOffset = (offset = -130) => {
  const scrollWithOffset = useCallback(
    el => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = offset;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    },
    [offset],
  );

  return scrollWithOffset;
};

export default useScrollWithOffset;
