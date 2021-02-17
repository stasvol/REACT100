import React from 'react';
import { create } from "react-test-renderer";
import ProfilStatus from "./ProfilStatus";


describe("ProfilStatus component", () => {

    test("status from props should be in the status ", () => {
        const component = create(<ProfilStatus status="I'M GOOL !!!" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("I'M GOOL !!!");
    });

    test("after creation  <span> should contains correct status ", () => {
        const component = create(<ProfilStatus status="I'M GOOL !!!" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();    //   not  null
    });

    test("after creation  <input>  should be displayed ", () => {
        const component = create(<ProfilStatus status="I'M GOOL !!!" />);
        const root = component.root;
        expect(()=>{
            const input = root.findByType("input");
        }).toThrow();        // error
    });

    test("after creation <span> should contains correct status ", () => {
        const component = create(<ProfilStatus status="I'M GOOL !!!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[2]).toBe(  "I'M GOOL !!!");

    });

    test(" input should be displayed in edit mode instead of span ", () => {
        const component = create(<ProfilStatus status="I'M GOOL !!!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("I'M GOOL !!!"  );
    });

    test("callback should be called ", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfilStatus status="I'M GOOL !!!" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActiveEditMode()

        expect(mockCallback.mock.calls.length).toBe(1  );
    });
});