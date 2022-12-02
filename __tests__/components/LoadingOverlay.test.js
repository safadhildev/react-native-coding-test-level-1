import React from 'react';
import renderer from 'react-test-renderer';
import { LoadingOverlay } from '../../src/components';

describe('render test', () => {
  it('render component (LoadingOverlay) correctly', () => {
    const tree = renderer.create(<LoadingOverlay />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
