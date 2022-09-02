import { LitElement, html, css } from "lit";
import styles from "./Home-content-styles";

export class HomeContent extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="home-content">
        <p>Home Content</p>
      </div>
    `;
  }
}

customElements.define("home-content", HomeContent);
