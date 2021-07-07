import Button from '../';
import ButtonTheme from '../ButtonTheme';
import {render} from '@testing-library/react';

describe('ButtonTheme', () => {
  test('basic', () => {
    const {container} = render(<ButtonTheme>
      <Button>foo</Button>
    </ButtonTheme>);
    expect(container).toMatchSnapshot();
  });
});
