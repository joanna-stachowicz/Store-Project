import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './__pascalCase_name__';

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(< OrderFormComponent />);
  expect(component).toBeTruthy();
});
});
