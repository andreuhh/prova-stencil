import { Component, ComponentInterface, Listen, h } from '@stencil/core';
import { DataService } from '../posts-container/data';

@Component({
  tag: 'posts-container',
  styleUrl: 'posts-container.scss',
  shadow: true,
})


export class PostsContainer implements ComponentInterface {
  componentDidLoad() {
    DataService.getData();

  }

  @Listen("scroll", { target: "window" })
  onWindowScroll() {
    console.log("window scrolled");

  }


  render() {
    return (
      <div id="posts-container"></div>

    );
  }

}
