/* Setup Enzyme & Adapter */

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
// (global as any).shallow = shallow;
// (global as any).mount = mount;
// (global as any).render = render;
// (global as any).toJson = toJson;

// Fail tests on any warning
console.error = (message: string) => {
  throw new Error(message);
};
