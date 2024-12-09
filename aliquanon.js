import React, { useRef, useEffect, useState } from 'react';

const Component = () => {
  const elementRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  return (
    <div ref={elementRef}>
      {/* Your component content */}
    </div>
  );
};
