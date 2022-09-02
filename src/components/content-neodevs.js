import { LitElement, html, css } from "lit-element";
import { outlet } from "lit-element-router";
import "./content/home/home-content";
import "./content/detail-worker/detail-worker";
import "./content/workers/list-workers";
import "./content/upload-file/upload-file";

class Content extends outlet(LitElement) {
  static get styles() {
    return css`
      .content-area {
        height: 94vh;
        width: 100%;
      }
    `;
  }
  static get properties() {
    return {
      params: { type: String, attribute: "my-params" },
    };
  }
  constructor() {
    super();
    this.params = "";
    console.log("AQUIII", this.params);
  }

  routeParams() {}
  render() {
    return html`
      <div class="content-area">
        <home-content route="Home"></home-content>
        <list-workers
          route="Workers"
          @route-params=${this.routeParams}
        ></list-workers>
        <detail-worker route="Worker"></detail-worker>
        <upload-file route="Upload"></upload-file>
      </div>
    `;
  }
}

customElements.define("content-neoveds", Content);
