import { css } from "lit";

export default css`
  .detail-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2%;
    box-sizing: border-box;
    gap: 20px;
  }
  .personal-detail {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    border: 1px solid coral;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
  }
  .box-worker-detail {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
  .container-detail {
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid coral;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
  }
  .client-info {
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid coral;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
  }
  .image-profile {
    margin-top: 3rem;
    border: 2px solid coral;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 55px;
    align-self: center;
  }

  .box-info {
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .skill {
    border: 1px solid coral;
    width: auto;
    padding: 3px 10px;
    border-radius: 15px;
    display: inline-block;
    margin-bottom: 20px;
  }
  .content-skills {
    align-self: center;
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5rem;
  }
  .neoris-detail,
  .cliente-detail {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
