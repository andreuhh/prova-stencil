import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'slot-paragraph',
  styleUrl: 'slot-paragraph.scss',
  shadow: true,
})
export class SlotParagraph implements ComponentInterface {

  render() {
    return <p><slot /></p>;
  }

}
