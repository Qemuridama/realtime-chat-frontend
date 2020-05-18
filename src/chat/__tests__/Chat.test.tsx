import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { ChatComponent } from '~/chat/Chat.component';

afterEach(cleanup);

describe('ChatComponent', () => {
  it('should render qemuridama chat title', () => {
    const { getByText } = render(<ChatComponent />);
    const linkElement = getByText(/qemuridama/i);
    expect(linkElement).toBeInTheDocument();
  })
})
