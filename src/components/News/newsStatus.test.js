import React from "react";
import NewsStatus from "./newsStatus";
import {create,act} from "react-test-renderer";

describe('NewsStatus', ()=> {
    test( 'should add span ',()=>{
        let component;
       act(()=>{
         component = create (<NewsStatus status={'programmer'}/>)
       });
        const instance = component.root;
        const span = instance.findByType("span");
        act(() => span.props.doubleClick);
     expect(span.props.children).toBe('programmer')
    });

    test("it shows the expected text when clicked", () => {
        const component = create(<NewsStatus status={'programmer'}/>);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.doubleClick;
        expect(span.props.children).toBe("programmer");
    });



})