import { Story, StoryContext } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const RouterDecorator = (
  StoryComponent: Story,
  context: StoryContext,
) => (
  <MemoryRouter
    basename="/"
    // eslint-disable-next-line react/destructuring-assignment
    initialEntries={context.parameters.initialEntries}
  >
    <StoryComponent />
  </MemoryRouter>
);
