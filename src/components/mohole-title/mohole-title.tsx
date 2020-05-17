import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mohole-title',
  styleUrl: 'mohole-title.scss',
  shadow: true
})
export class MoholeTitle implements ComponentInterface {

  // eslint-disable-next-line @stencil/required-jsdoc
  @Prop() titleString: string;
  
  render() {
    return (  <h1>{this.titleString}</h1> 
    );
  }

}
