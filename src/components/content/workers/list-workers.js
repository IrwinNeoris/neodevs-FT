import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "../../utils/link-app";
import styles from "./List-workers-styles";

export class ListWorkers extends navigator(LitElement) {
  static get properties() {
    return {
      DATA_COLABORADORES: { type: Array },
    };
  }

  static get styles() {
    return [styles];
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
    this.DATA_COLABORADORES = [];
  }

  firstUpdated() {
    this.getData();
  }

  getData() {
    fetch("http://10.15.88.69:8080/api/v3/colaboradores")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log("list-workers", data);
          this.DATA_COLABORADORES = data;
          this._fireEvent("get-data-success", data);
        },
        (error) => {
          console.log(error);
          this._fireEvent("get-data-error", error);
        }
      );
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

  workerDetail(e) {
    console.log(e);
    const dni = e.dni.slice(1);
    const routeParams = `woker/${dni}`;
    this._fireEvent("route-params", routeParams);
    e.preventDefault();
    this.navigate(routeParams);
  }

  myFunction = () => {
    this.shadowRoot.getElementById("myDropdown").classList.toggle("show");
  };

  //   <img
  //   width="15"
  //   height="15"
  //   src="../../../../assets/icons/common/icon-detail.png"
  //   alt="Status in Neoris"
  // />

//   <div class="filter-box">
//   <div class="dropdown">
//     <button @click=${this.myFunction} class="dropbtn">Dropdown</button>
//     <div id="myDropdown" class="dropdown-content">
//       <a href="/">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div>
// </div>

  render() {
    return html`
      <div class="home-content">
        <p>Lista de colaboradores</p>

        <table>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>E-mail</th>
              <th>Nivel Neoris</th>
              <th>Especialidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${this.DATA_COLABORADORES.map(
              (c) => html` <tr>
                <td>${c.apellido}</td>
                <td>${c.nombre}</td>
                <td>${c.correoNeoris}</td>
                <td>${c.nivelNeoris}</td>
                <td>${c.especialidad}</td>
                <td class="view-detail" @click=${() => this.workerDetail(c)}>
                  <link-app href="worker/${c.dni}"></link-app>
                </td>
              </tr>`
            )}
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define("list-workers", ListWorkers);
