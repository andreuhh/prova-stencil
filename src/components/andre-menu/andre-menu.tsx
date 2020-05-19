import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'andre-menu',
  styleUrl: 'andre-menu.scss',
  shadow: true,
})
export class AndreMenu implements ComponentInterface {

  render() {
    return (
      <header>
      <div class="container">
          <nav>

              <div class="menu-icons">
                  <i class="icon ion-md-menu"></i>
                  <i class="icon ion-md-close"></i>
              </div>
          
              <h2 >
                  <a href="idex.html" class="logo">                       
                      <p ><span>T</span>mobile</p>
                  </a>
              </h2>

              <ul class="nav-list">
                  <li>
                      <a class="nero" href="#">Mobile
                          <i class="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul class="sub-menu">
                          <li>
                              <a href="">Tariffe e opzioni</a>
                          </li>
                          <li>
                              <a href="">Dispositivi</a>
                              
                          </li>
                          <li>
                              <a href="">Accessori</a>
                          </li>
                          <li>
                              <a href="">Centro clienti</a>
                          </li>
                      </ul>
                  </li>

                  <li>
                      <a class="nero" href="#">Rete fissa
                          <i class="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul class="sub-menu">
                          <li>
                              <a href="">Tariffe e opzioni</a>
                          </li>
                          <li>
                              <a href="">Dispositivi</a>
                          </li>
                          <li>
                              <a href="">Rete domestica</a>
                          </li>
                          <li>
                              <a href="">Servizi</a>
                              
                          </li>
                      </ul>
                  </li>

                  <li>
                      <a class="nero" href="#">TV
                          <i class="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul class="sub-menu">
                          <li>
                              <a href="">Magenta TV</a>
                          </li>
                          <li>
                              <a href="">Tariffe e opzioni</a>      
                          </li>
                          <li>
                              <a href="">Dispositivi</a>
                          </li>
                          <li>
                              <a href="">Spostivo</a>
                          </li>
                      </ul>
                  </li>

                  <li>
                      <a class="nero" href="#">Vantaggi
                          <i class="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul class="sub-menu">
                          <li>
                              <a href="">Tmobile ti premia</a>
                          </li>
                          <li>
                              <a href="">I nostri negozi</a>
                              
                          </li>
                          <li>
                              <a href="">Molto più vicini</a>
                          </li>
                      </ul>
                  </li>

                  <li>
                      <a class="nero" href="#">Privati
                          
                      </a>
                  </li>

                  <li>
                      <a class="nero" href="#">Business
                          
                      </a>
                  </li>
                  
                  <li class="move-right nav-btn">
                      <a href="#">LOG IN</a>
                  </li>        
              </ul>
          </nav>
      </div>
  </header>
    );
  }

}
