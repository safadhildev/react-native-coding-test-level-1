import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from '../../src/components';

describe('render test', () => {
  it('render component (Input) correctly', () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
