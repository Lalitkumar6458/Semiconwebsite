import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-cool-inview';

const CountUp = ({ end, duration = 1, delay = 0.10 }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const { observe, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (count < end) {
          setCount((prevCount) => prevCount + 1);
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration },
          });
        } else {
          clearInterval(interval);
        }
      }, delay * 1000);

      return () => clearInterval(interval);
    }
  }, [count, controls, end, duration, delay, inView]);

  return (
    <motion.span
      className='count-up'
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={observe}
    >
      {count} +
    </motion.span>
  );
};

export default CountUp;
