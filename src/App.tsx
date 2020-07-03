import React from 'react';
import { getName } from './another';
import styles from './styles.less';

const App = () => {
  return (
    <div className={styles.lessa}>
      {getName('world')}
      <span className={styles.test}>test</span>
    </div>
  );
};

export default App;
