import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'andre-card',
  styleUrl: 'andre-card.scss',
  shadow: true,
  assetsDirs: ["/img/girl-small.jpg"]
})
export class AndreCard implements ComponentInterface {

  render() {
    return (
      <div class="card-container">

        <div class="card card-1">
          <div class="card-image one"></div>
          <div class="card-text">
            <span class="date">Molto più vicini</span>
            <h4>Internet illimitato</h4>
            <p>e GIGA alla massima velocità
              </p>
          </div>
          <div class="card-stats">
            <div class="stat">
            </div>
            <div class="stat">
              <div class="value">Scopri</div>
            </div>
            <div class="stat">
            </div>
          </div>
        </div>

        <div class="card card-2">
          <div class="card-image two"></div>
          <div class="card-text">
            <span class="date">Unlimited</span>
            <h4>Tutto illimitato</h4>
            <p>Minuti,SMS e GIGA
            alla massima velocità
              </p>
          </div>
          <div class="card-stats">
            <div class="stat"></div>
            <div class="stat">
              <div class="value">da 19€</div>
              <div class="type">al mese</div>
            </div>
            <div class="stat">
            </div>
          </div>
        </div>

        <div class="card card-3">
          <div class="card-image three"></div>
          <div class="card-text">
            <span class="date">Home edition</span>
            <h4>100 GIGA</h4>
            <p>per navigare subito
            da casa tua
              </p>
          </div>
          <div class="card-stats">
            <div class="stat"></div>
            <div class="stat">
              <div class="value">da 25€</div>
              <div class="type">al mese</div>
            </div>
            <div class="stat"></div>
          </div>
        </div>

        <div class="card card-4">
          <div class="card-image four"></div>
          <div class="card-text">
            <span class="date"> Student EDU</span>
            <h4>80 GIGA</h4>
            <p>Minuti e SMS illimitati
              </p>
          </div>
          <div class="card-stats">
            <div class="stat"></div>
            <div class="stat">
              <div class="value">da 70€</div>
              <div class="type">l' anno</div>
            </div>
            <div class="stat"></div>
          </div>
        </div>

      </div>
    );
  }

}
