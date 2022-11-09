import styles from './importme.module.css';

/* eslint-disable-next-line */
export interface ImportmeProps {}

export function Importme(props: ImportmeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Importme!</h1>
    </div>
  );
}

export default Importme;
