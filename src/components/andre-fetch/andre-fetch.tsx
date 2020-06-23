import { Component, ComponentInterface, Host, h, State, Listen } from '@stencil/core';
import { User } from './andre-interface';

@Component({
  tag: 'andre-fetch',
  styleUrl: 'andre-fetch.scss',
  shadow: true,
})
export class AndreFetch implements ComponentInterface {
  @State() users: Array<User> = [];
  @State() limit = 3;
  @State() page = 1;


  @Listen("scroll", { target: "window" })
  onWindowScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setTimeout(() => {
        console.log("window scrolled");
        //  this.fetchData();
      }, 600);
    }
  }

  // call first 3 news items without push the botton
  componentDidLoad() {
    this.fetchData();
  }

  private fetchData = () => {
    if (this.limit >= 15) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`)
      .then(response => response.json())
      .then((json) => (this.users = json))
    this.limit += 3;
    //this.page++;
  };

  render() {

    return (
      <Host>
        {this.users.map(user =>
          <div class='post'>
            <div class="number">{user.id}</div>
            <div class='post-info'>
              <h2 class='post-title'>{user.title}</h2>
              <p class='post-body'>{user.body}</p>
            </div>
          </div>
        )}
        <button class='pure-button fetch-button' onClick={this.fetchData}>andre fetch</button>
      </Host>
    );
  }

}
