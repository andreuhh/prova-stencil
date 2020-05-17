import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'named-slot-paragraph',
  styleUrl: 'named-slot-paragraph.scss',
  shadow: true,
})
export class NamedSlotParagraph implements ComponentInterface {

  render() {
    return <p>
      <slot name="first" />
      <b></b>
      <slot name="second" />
    </p>
  }

}
