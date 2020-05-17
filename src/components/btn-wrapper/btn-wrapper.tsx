import { Component, ComponentInterface, Host, h, State, Listen } from '@stencil/core';

/**
 * Simple button
 * @author Andrea Guffi
 * @version 1.0.0
 */
@Component({
  tag: 'btn-wrapper',
  styleUrl: 'btn-wrapper.scss',
  shadow: true,
})
export class BtnWrapper implements ComponentInterface {
  @State() counter = 0;

  @Listen('changeClick')
  onChangeClick() {
    console.log('listen trigger');
  }

  @Listen('load', { target: 'window' })
  onWindowLoad() {
    console.log('window loaded');
  }
  private increaseCounter = () => {
    this.counter++;
    console.log('change click triggered', this.counter);
  }

  render() {
    return (
      <Host>
        <button-change
          onChangeClick={this.increaseCounter}
          label='Button Change'
        >
        </button-change>
        {this.counter}
      </Host>
    );
  }

}
