import { LitElement, html } from "lit";
import { navigator } from "lit-element-router";
import styles from "./Upload-file-styles";

export class UploadFile extends navigator(LitElement) {
  static get properties() {
    return {
      params: { type: String, attribute: "my-params" },
      nameFile: { type: String },
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.file;
    this.nameFile = "";
    this.csv = {};
  }

  uploadFile = () => {
    console.log("subiendo archivo");
    const input = this.shadowRoot.querySelector("#file");
    input.click();
  };

  // changeFile = (e) => {
  //   if (e.target.files.length !== 0) {
  //     console.log("probando files", e.target.files[0]);
  //     this.nameFile = e.target.files[0].name;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = (e) => {
  //       e.preventDefault();
  //       const data = e.target.result.split(",");
  //       this.csv = data[1].toString();
  //     };
  //   }
  // };

  changeFile = (e) => {
    if (e.target.files.length !== 0) {
      console.log("probando files", e);
      this.nameFile = e.target.files[0].name;
      this.csv = e.target.files[0];
    }
  };

  postData = () => {
    if (this.csv) {
      console.log("archivo enviado", this.csv);
      console.log(this.nameFile);
      fetch("http://10.15.88.69:8080/api/v1/excel-data", {
        method: "POST",
        body: this.csv,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Success:", response);
          //this.navigate("/");
        })
        .catch((error) => console.error("Error:", error));
    } else {
      alert("Debe cargar un archivo .csv");
    }
  };

  render() {
    return html`
      <form
        action="http://10.15.88.69:8080/api/v1/excel-data"
        method="post"
        enctype="multipart/form-data"
        class="upload-content"
      >
        <div class="drop-area" @click=${this.uploadFile}>
          <label for="archivo"> Elija un archivo </label>
          <input type="file" id="file" name="file" accept=".csv" hidden />
        </div>
        <div>${this.nameFile}</div>
        <div><button>Enviar el archivo</button></div>
      </form>
    `;
  }
}

customElements.define("upload-file", UploadFile);
