import React, { FC } from 'react';
import styles from './tags.module.scss';

type Props = {
  text: string;
  id: string;
  onChange: () => void;
};

const Tag: FC<Props> = ({ text, id, onChange }) => {
  return (
    <div className={styles.tag}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default Tag;
