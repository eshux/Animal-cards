import React, { FC, useState } from 'react';
import styles from './card.module.scss';
import Image from './image';

type Props = {
  source: string[];
  text: string;
  name: string;
  link: string;
};

const Card: FC<Props> = ({ source, text, link, name }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className={styles.card}>
      <button
        type="button"
        className={styles.button}
        onClick={() => setShowText(!showText)}
      >
        hi
      </button>
      {!showText ? (
        <Image source={source} />
      ) : (
        <div className={styles.card_content}>
          <h4>{name}</h4>
          <p>{text}</p>
          <a href={link} target="blank">
            Read more
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
