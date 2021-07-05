import Button from '..';
import {render} from '@testing-library/react';

describe('Button', () => {
  test('basic', () => {
    const {container} = render(<Button>test</Button>);
    expect(container).toMatchSnapshot();
  });

  test('variant: primary', () => {
    const {container} = render(<Button variant="primary">primary</Button>);
    expect(container).toMatchSnapshot();
  });

  test('variant: secondary', () => {
    const {container} = render(<Button variant="secondary">secondary</Button>);
    expect(container).toMatchSnapshot();
  });
});
