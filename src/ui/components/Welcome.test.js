import React from 'react';
import renderer from 'react-test-renderer';
import {Welcome} from './Welcome';

describe('Home dump component', () => {
  it('should render with defaults', () => {
    const component = renderer.create(<Welcome/>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
