// Here will be loaded some very important dependencies
// tslint:disable:no-submodule-imports
import "regenerator-runtime/runtime"

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

const placeholder = (() => undefined)();

require.extensions[".png"] = placeholder;
require.extensions[".jpg"] = placeholder;
