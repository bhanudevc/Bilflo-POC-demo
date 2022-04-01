import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Billing} from '@bilflo-demo/billing'
import {Reports} from '@bilflo-demo/reports'
import { Typography } from 'antd';

const { Title } = Typography;

export function Home() {
  return (
    <Title>Welcome</Title>
  )
}

export function BlifloRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
    </BrowserRouter>
  );
}

export default BlifloRoutes
