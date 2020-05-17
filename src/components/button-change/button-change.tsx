import { Component, ComponentInterface, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'button-change',
  styleUrl: 'button-change.scss',
  shadow: true,
})
export class ButtonChange implements ComponentInterface {
  /**
   * Event emitted when clicked on button
   */
  @Event() changeClick: EventEmitter;
  /**
   * text shown inside button
   */
  @Prop() label: string;

  private handleClick = () => {
    this.changeClick.emit();
  }


  render() {
    return (
      <button class="pure-button pure-button-primary"
        onClick={this.handleClick}
      >
        {this.label}
      </button>
    );
  }

}
