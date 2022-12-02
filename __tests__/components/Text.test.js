import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../../src/components';

describe('render test', () => {
  it('render component (Text) correctly', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
