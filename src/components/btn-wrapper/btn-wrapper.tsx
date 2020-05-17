import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'btn-wrapper',
  styleUrl: 'btn-wrapper.scss',
  shadow: false,
})
export class BtnWrapper implements ComponentInterface {
  btnCtn = 0;
  private increaseCtn() {
    this.btnCtn++;
  }

  render() {
    return (
      <Host>
        <button-change onChangeClick={() => this.increaseCtn()}></button-change>
        <button-remove></button-remove>
        {this.btnCtn}
      </Host>
    );
  }

}
