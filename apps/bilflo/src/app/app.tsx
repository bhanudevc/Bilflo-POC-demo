// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';



import { BlifloRoutes } from '@bilflo-demo/bilflo-routes';

export function App() {
  return (
    // <ConfigProvider>
      <BlifloRoutes />
    // </ConfigProvider>
  );
}

export default App;
