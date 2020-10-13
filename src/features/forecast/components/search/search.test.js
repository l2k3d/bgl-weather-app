import { mount, shallow } from 'enzyme';
import expectExport from 'expect';
import React from 'react';
import Search from './';

describe("Search Tests", () => {

    const mockCallBack = jest.fn();

    it('renders Search Field',() =>{
        shallow(<Search handleClick={mockCallBack}/>)
    })

    it('can enter city',() =>{
        
        const mockCallBack = jest.fn();

        const wrapper = mount(<Search handleClick={mockCallBack}/>)
    
        wrapper.find('button').simulate('click');

        expect(mockCallBack.mock.calls.length).toEqual(1);

    })



});