import { css } from "lit";

export default css`
  .upload-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .drop-area {
    border: 5px dashed #ddd;
    height: 70%;
    width: 70%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }
  .drop-area:hover {
    background-color: #b8d4fe;
    color: black;
    border: 2px dashed #618ac9;
  }

  .drop-area,
  h2,
  span {
    font-size: 2rem;
    font-weight: 500;
    color: #000;
  }

  button {
    padding: 10px 25px;
    font-size: 20px;
    border: 0;
    outline: none;
    background-color: coral;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px;
  }

  .file-conteiner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ddd;
  }
`;
