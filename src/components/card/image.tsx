import React, { FC, useState } from 'react';
import styles from './card.module.scss';
import right from '../../images/right.svg';
import left from '../../images/left.svg';

type Props = {
  source: string[];
};

const Image: FC<Props> = ({ source }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    if (activeIndex >= 0 && activeIndex < source.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevImage = () => {
    if (activeIndex >= 1 && activeIndex <= source.length - 1) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(source.length - 1);
    }
  };

  return (
    <div className={styles.img_wrapper}>
      <button
        type="button"
        className={styles.button_left}
        onClick={() => prevImage()}
      >
        <img className={styles.left} src={left} alt="" />
      </button>

      <img className={styles.img} src={source[activeIndex]} alt="" />

      <button
        type="button"
        className={styles.button_right}
        onClick={() => nextImage()}
      >
        <img className={styles.right} src={right} alt="" />
      </button>
    </div>
  );
};

export default Image;
