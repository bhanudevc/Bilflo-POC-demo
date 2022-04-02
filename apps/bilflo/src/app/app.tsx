// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import 'antd/dist/antd.variable.min.css';

import { ConfigProvider } from 'antd';

import { BlifloRoutes } from '@bilflo-demo/bilflo-routes';

ConfigProvider.config({
  theme: {
    primaryColor: '#28B56F',
    infoColor: '#8b567f',
    successColor: '#8b567f',
    processingColor: '#8b567f',
    errorColor: '#8b567f',
    warningColor: 'green',
  },
});

export function App() {
  return (
    <ConfigProvider>
      <BlifloRoutes />
    </ConfigProvider>
  );
}

export default App;
