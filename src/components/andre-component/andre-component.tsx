/* eslint-disable @stencil/required-jsdoc */
import { Component, ComponentInterface, Prop, State, h } from "@stencil/core";

@Component({
  tag: "andre-component",
  styleUrl: "andre-component.scss",
  shadow: true,
})
export class AndreComponent implements ComponentInterface {
  @Prop() titolo: string;
  @State() isOpen: boolean;

  toggle() {
    this.isOpen = !this.isOpen;
    console.log("toggle", this);
  }

  render() {
    return (
      <div>
        <h3 class="titolo" onClick={() => this.toggle()}>
          {this.isOpen ? "aperto " : "chiuso "}
          hello {this.titolo}
        </h3>
        <div class={{ body: true, hidden: !this.isOpen }}>
          <slot />
        </div>
      </div>
    );
  }
}
