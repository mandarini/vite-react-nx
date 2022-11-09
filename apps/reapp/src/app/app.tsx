// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Importme } from '@test-vite/importme';

export function App() {
  return (
    <>
      <Importme />
      <NxWelcome title="reapp" />
      <div />
    </>
  );
}

export default App;
