import React from "react";
import { shallow } from "enzyme";
import loading from "./index";

it("Loading Renders", () => {
  shallow(<loading />);
});
