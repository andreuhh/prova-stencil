import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'prova-form',
  styleUrl: 'prova-form.scss',
  shadow: true,
})
export class ProvaForm implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
