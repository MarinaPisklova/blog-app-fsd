import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Test render', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const Btn = screen.getByTestId('increment-btn');
    fireEvent.click(Btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    const Btn = screen.getByTestId('decrement-btn');
    fireEvent.click(Btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
