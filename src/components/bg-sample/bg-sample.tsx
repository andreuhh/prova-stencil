import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'bg-sample',
  styleUrl: 'bg-sample.scss',
  shadow: true,
  assetsDirs: ['/assets'],
})
export class BgSample implements ComponentInterface {
  private bgStyle = {
    backgroundImage: `url("${getAssetPath('/assets/iphone2-small.jpg')}")`,
  };


  render() {
    return <div style={this.bgStyle}></div>;
  }

}
