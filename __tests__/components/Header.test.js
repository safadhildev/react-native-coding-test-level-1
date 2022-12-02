import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../../src/components';

describe('render test', () => {
  it('render component (Header) correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
