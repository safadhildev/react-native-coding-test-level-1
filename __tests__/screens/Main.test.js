import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../../src/screens/Main';

describe('render test', () => {
  it('render screen (Main) correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
