import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../../src/components';

describe('render test', () => {
  it('render component (Button) correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
