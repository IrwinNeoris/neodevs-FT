import { LitElement, html, css } from "lit";
import { router } from "lit-element-router";
import "./utils/link-app";

export class HeaderNeodevs extends router(LitElement) {
  static get styles() {
    return css`
      .header-neodevs {
        height: 6vh;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-direction: row;
        overflow: hidden;
        justify-content: space-between;
        border-top: 3px solid coral;
        box-sizing: border-box;
      }
      .title-header {
        padding: 20px;
        text-align: center;
        font-size: 25px;
      }
      .header-start,
      .header-end {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
      }

      .button-header {
        height: 100%;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .button-header:hover {
        background-color: #ffedd8;
      }

      .button-header-login {
        border: 1px solid hsl(0deg, 0%, 86%);
        height: 60%;
        width: 3.5rem;
        border-radius: 8px;
        margin: 1rem;
        padding-left: 1em;
        padding-right: 1em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  static get routes() {
    return [
      {
        name: "Home",
        pattern: "",
        //data: { title: "Home" },
      },
      {
        name: "Workers",
        pattern: "workers",
      },
      {
        name: "Detail",
        pattern: "detail",
      },
      {
        name: "Worker",
        pattern: "worker",
      },
      {
        name: "Upload",
        pattern: "upload",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  clickItem() {
    this._fireEvent("route-page", this.route);
  }

  _fireEvent(eventName, detail) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: detail,
      })
    );
  }

  render() {
    return html`
      <div class="header-neodevs">
        <div class="header-start">
          <link-app class="title-header" href="/" @click=${this.clickItem}
            ><div>NEODEVS</div></link-app
          >
          <link-app
            class="button-header"
            href="workers"
            @click=${this.clickItem}
            >Workers</link-app
          >
          <link-app class="button-header" href="upload" @click=${this.clickItem}
            >Upload File</link-app
          >
          <link-app class="button-header" href="worker" @click=${this.clickItem}
            >Detail</link-app
          >
        </div>

        <div class="header-end">
          <span class="button-header-login">Login</span>
        </div>
      </div>
    `;
  }
}

customElements.define("header-neodevs", HeaderNeodevs);
