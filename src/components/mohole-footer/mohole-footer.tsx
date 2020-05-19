import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mohole-footer',
  styleUrl: 'mohole-footer.scss',
  shadow: true,
})
export class MoholeFooter implements ComponentInterface {

  render() {
    return (
      <footer>
        <div class='foot-col'>
          <p class='big'>Disclaimer</p>
          <hr />
          <p>
            È il nuovo operatore telefonico sul mercato con la rete più grande.
            La rete 4.5G è la più grande in termini di numero di celle e di volumi di traffico dati.
            WINDTRE è il principale operatore nel mercato delle Telecomunicazioni mobili in Italia con il 30,7%
            delle linee Human. Maggiori informazioni.
            Sito realizzato per il corso di web design e media della scuola Mohole.
            </p>
        </div>

        <div class="foot-col">
          <p class="big">Servizi</p>
          <hr />
          <div class="cont-info">
            <p>Servizio Clienti</p>
            <p>Espansione della rete</p>
            <p>Maggiori informazioni</p>
            <p>Connessione</p>
            <p>Stato dell'ordine</p>
            <p>Vendi cellulare</p>
            <p>All'estero in rooming</p>
            <p>Magenta tube</p>
            <p>Costruttori</p>
            <p>Espansione della rete</p>
            <p>Centro assistenza</p>
            <p>Connessione</p>
          </div>
        </div>



      </footer>
    );
  }

}
