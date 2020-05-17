/* eslint-disable @stencil/required-jsdoc */
import { Component, ComponentInterface, Prop, h } from "@stencil/core";

@Component({
  tag: "mohole-article",
  styleUrl: "mohole-article.scss",
  shadow: false,
})
export class MoholeArticle implements ComponentInterface {
  @Prop() titleArticle: string;
  @Prop() titleArticle2: string;
  @Prop() titleArticle3: string;
  @Prop() textArticle: string;
  @Prop() textArticle2: string;
  @Prop() textArticle3: string;

  render() {
    return (
      <div class="pure-g">
        <div class="pure-u-1-3">
          <img src="img/nat-2.jpg" alt="" />
          <h3>{this.titleArticle}</h3>
          <p>{this.textArticle}</p>
          <button class="pure-button pure-button-primary">Show more</button>
        </div>

        <div class="pure-u-1-3">
          <h3>{this.titleArticle2}</h3>
          <p>{this.textArticle2}</p>
          <button class="pure-button pure-button-primary">Show more</button>
        </div>

        <div class="pure-u-1-3">
          <h3>{this.titleArticle3}</h3>
          <p>{this.textArticle3}</p>
          <button class="pure-button pure-button-primary">Show more</button>
        </div>
      </div>
    );
  }
}
