import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './__pascalCase_name__';

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(< ProductComponent />);
  expect(component).toBeTruthy();
});
});
