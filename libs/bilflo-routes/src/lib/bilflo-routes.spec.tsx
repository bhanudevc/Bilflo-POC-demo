import { render } from '@testing-library/react';

import BilfloRoutes from './bilflo-routes';

describe('BilfloRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BilfloRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
