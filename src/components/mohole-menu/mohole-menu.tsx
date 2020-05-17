import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "mohole-menu",
  styleUrl: "mohole-menu.scss",
  shadow: false,
})
export class MoholeMenu implements ComponentInterface {
  render() {
    return (
      <div class="pure-menu pure-menu-horizontal pure-menu-scrollable">
        <a href="#" class="pure-menu-link pure-menu-heading">
          Home
        </a>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">
              Novita
            </a>
          </li>
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">
              Articoli
            </a>
          </li>
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">
              Chi siamo
            </a>
          </li>
          <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">
              Contatti
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
