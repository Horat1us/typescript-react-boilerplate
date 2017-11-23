import * as React from "react";
import {spy, SinonSpy} from "sinon";
import {expect} from "chai";
import {mount} from "enzyme";
import {Layout, PreLoader} from "../../src/components";
import {PreLoaderInterface} from "../../src/components/Preloader/PreLoaderInterface";

describe("<Layout />", () => {
    it("Should render `Hello, World!`", () => {
        const wrapper = mount(
            <Layout/>
        );

        expect(wrapper.getDOMNode().innerHTML).to.contain("Hello, World!");
    });

    it("Should hide and show preloader on mount/unmount", () => {
        const element = document.createElement("div");
        const preLoader: PreLoaderInterface = new PreLoader(element, 10);

        spy(preLoader, "show");
        spy(preLoader, "hide");

        const wrapper = mount(
            <Layout preLoader={preLoader}/>
        );

        expect((preLoader.hide as SinonSpy).calledOnce).to.be.true;
        wrapper.unmount();

        expect((preLoader.show as SinonSpy).calledOnce).to.be.true;
    })
});
