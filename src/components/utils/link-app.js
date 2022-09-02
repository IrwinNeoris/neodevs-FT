import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }

  static get styles() {
    return css`
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 100%;
        width: 100%;
        color: #000000;
      }

      a:hover {
        color: hsl(229deg, 53%, 53%);
      }
    `;
  }

  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a class="button-header" href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("link-app", Link);
