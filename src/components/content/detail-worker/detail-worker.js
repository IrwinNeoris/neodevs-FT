import { LitElement, html } from "lit";
import styles from "./detail-worker-styles";

const skills = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Cells" },
  { name: "Redux" },
  { name: "React" },
  { name: "Python" },
  { name: "Angular" },
  { name: "Vue" },
  { name: "Cobol" },
  { name: "Rubi" },
  { name: "Node" },
  { name: "Javascript" },
  { name: "Java" },
  { name: "Cells" },
  { name: "Redux" },
  { name: "React" },
  { name: "Python" },
  { name: "Angular" },
  { name: "Vue" },
  { name: "Cobol" },
  { name: "Rubi" },
  { name: "Node" },
  { name: "SQL" },
];

export class DetailWorker extends LitElement {
  static get properties() {
    return {
      COLABORADOR: { type: Object },
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.COLABORADOR = {};
    this.statusNeoris = "";
    this.statusCliente = "";
    this.textProfile = "";
  }

  firstUpdated = () => {
    this.getData();
  };

  getData = () => {
    fetch("http://10.15.88.69:8080/api/v0/colaboradores/71304546")
    //fetch("http://10.15.88.69:8080/api/v0/colaboradores/48022736")
      .then((response) => response.json())
      .then(
        (data) => {
          console.log("detail(1)", data);
          this.COLABORADOR = data;
          switch (this.COLABORADOR.estadoNeoris) {
            case 0:
              this.statusNeoris =
                "../../../../assets/icons/status-worker/icon-pending.png";
              break;
            case 1:
              this.statusNeoris =
                "../../../../assets/icons/status-worker/icon-activo.svg";
              break;
            case 2:
              this.statusNeoris =
                "../../../../assets/icons/status-worker/icon-inactivo.svg";
              break;
          }

          switch (this.COLABORADOR.estadoCliente) {
            case 0:
              this.statusCliente =
                "../../../../assets/icons/status-worker/icon-pending.png";
              break;
            case 1:
              this.statusCliente =
                "../../../../assets/icons/status-worker/icon-activo.svg";
              break;
            case 2:
              this.statusCliente =
                "../../../../assets/icons/status-worker/icon-inactivo.svg";
              break;
          }
          this._imagerofile();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  _imagerofile = () => {
    const firstWord = this.COLABORADOR.nombre.trim().slice(0, 1);
    const secondWord = this.COLABORADOR.apellido.slice(0, 1);
    this.textProfile = firstWord + secondWord;
  };

  render() {
    const { COLABORADOR } = this;
    return html`
      <div class="detail-content">
        <div class="personal-detail">
          <div class="image-profile">${this.textProfile}</div>
          <h3>
            ${COLABORADOR.nombre}, ${COLABORADOR.apellido}
            <img
              width="15"
              height="15"
              src=${this.statusNeoris}
              alt="Status in Neoris"
            />
          </h3>
          <div>${COLABORADOR.pais} - ${COLABORADOR.nivelNeoris}</div>
          <div>${COLABORADOR.celular}</div>
          <div class="content-skills">
            ${skills.map((e) => html` <span class="skill">${e.name}</span> `)}
          </div>
        </div>
        <div class="box-worker-detail">
          <div class="container-detail">
            <div class="neoris-detail">
              <span>NEORIS</span>
              <div>${COLABORADOR.correoNeoris}</div>
              <div>${COLABORADOR.nivelNeoris}</div>
              <div>${COLABORADOR.plataforma}</div>
            </div>
            <hr />
            <div class="cliente-detail">
              <div>
                CLIENTE: BBVA
                <img
                  width="15"
                  height="15"
                  src=${this.statusCliente}
                  alt="Status in client"
                />
              </div>
              <div>${COLABORADOR.correoCliente}</div>
              <div>${COLABORADOR.codigoCliente}</div>
              <div>${COLABORADOR.especialidad}</div>
              <div>${COLABORADOR.nivelCliente}</div>
            </div>
          </div>

          <div class="client-info">
            <div>PROYECTOS ASIGNADOS</div>
            <div>${COLABORADOR.nombreProyectoCliente}</div>
            <div>${COLABORADOR.techLeadCliente}</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("detail-worker", DetailWorker);
