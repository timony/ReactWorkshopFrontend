import React from 'react';
import renderer from 'react-test-renderer';
import {Clock} from './Clock';

describe('Home dump component', () => {
  it('should render with defaults', () => {
    const component = renderer.create(<Clock/>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
