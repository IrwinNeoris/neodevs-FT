import { LitElement, html, css } from "lit";
import { router } from "lit-element-router";

import "./components/header-neodevs";
import "./components/content-neodevs";

export class NeodevsFront extends router(LitElement) {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    `;
  }
  constructor() {
    super();
    this.route = "";
  }
  routePage(evt) {
    this.route = evt.detail;
  }
  render() {
    return html`
      <div class="content">
        <header-neodevs @route-page=${this.routePage}></header-neodevs>
        <content-neoveds active-route=${this.route}></content-neoveds>
      </div>
    `;
  }
}
