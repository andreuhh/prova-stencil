import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'posts-loader',
  styleUrl: 'posts-loader.scss',
  shadow: true,
})
export class PostsLoader implements ComponentInterface {

  render() {
    return (
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    );
  }

}
