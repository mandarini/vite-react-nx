import { render } from '@testing-library/react';

import Importme from './importme';

describe('Importme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Importme />);
    expect(baseElement).toBeTruthy();
  });
});
