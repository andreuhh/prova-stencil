import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'button-remove',
  styleUrl: 'button-remove.scss',
  shadow: false,
})
export class ButtonRemove implements ComponentInterface {

  render() {
    return (
      <button class="pure-button pure-button-primary">Remove</button>
    );
  }
}
