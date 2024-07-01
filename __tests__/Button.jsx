import Button from '..';
import {fireEvent, render} from '@testing-library/react';
import Taro from '@tarojs/taro';

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

  test('href', () => {
    Taro.navigateTo = jest.fn();

    const {container} = render(<Button href="next?id=1">secondary</Button>);
    expect(container).toMatchSnapshot();

    fireEvent.click(container.firstChild);
    expect(Taro.navigateTo.mock.calls).toMatchSnapshot();
  });
});
