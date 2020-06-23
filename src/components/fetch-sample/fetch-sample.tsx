import { Component, ComponentInterface, Host, h, State } from '@stencil/core';
import { User } from './users.interface';

@Component({
  tag: 'fetch-sample',
  styleUrl: 'fetch-sample.scss',
  shadow: true,
})
export class FetchSample implements ComponentInterface {
  @State() users: Array<User> = [];

  private fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())
      .then((json) => (this.users = json));
  };

  render() {
    return (
      <Host>

        {this.users.map(user => <div><b>{user.name}</b> <i>{user.email}</i><p>{user.body}</p></div>)}
        <button class='pure-button' onClick={this.fetchData}>load users</button>
      </Host>

    );
  }

}
