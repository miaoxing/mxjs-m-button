import React from 'react';
import {ButtonGroup} from '..';
import {Button, ButtonGroup} from '..';
import {render} from '@testing-library/react';

describe('ButtonGroup', () => {
  test('basic', () => {
    const {container} = render(<ButtonGroup>
      <Button>foo</Button>
      <Button>bar</Button>
    </ButtonGroup>);
    expect(container).toMatchSnapshot();
  });
});
