import { Component, ComponentInterface, h, } from "@stencil/core";

@Component({
  tag: "simple-label",
  styleUrl: "simple-label.scss",
  shadow: false,
})
export class SimpleLabel implements ComponentInterface {


  render() {
    return (
      <div>
        <label>Sono una simple label</label>
      </div>
    );
  }
}
