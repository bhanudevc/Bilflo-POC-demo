import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Billing} from '@bilflo-demo/billing'
import {Reports} from '@bilflo-demo/reports'
import {SideMenu} from '@bilflo-demo/side-menu'

export function BlifloRoutes() {
  return (
    <BrowserRouter>
    <SideMenu>
        <Routes>
          <Route path="/" element={<Billing />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        </SideMenu>
    </BrowserRouter>
  );
}

export default BlifloRoutes
