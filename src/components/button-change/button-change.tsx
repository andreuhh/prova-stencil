import { Component, ComponentInterface, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'button-change',
  styleUrl: 'button-change.scss',
  shadow: true,
})
export class ButtonChange implements ComponentInterface {

  @Event() changeClick: EventEmitter;

  private changeHandler() {
    this.changeClick.emit();
  }


  render() {
    return (
      <button class="button-change" onClick={() => this.changeHandler()}>Change</button>
    );
  }

}
