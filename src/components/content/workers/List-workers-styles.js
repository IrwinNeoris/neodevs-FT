import { css } from "lit";

export default css`
  p {
    text-align: center;
    margin: 20px 0 60px;
  }
  .home-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  table {
    height: 100%;
    width: 80%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #f29539;
    color: white;
  }

  tr:hover {
    background-color: #f5cc9d;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .button {
    display: flex;
    justify-content: center;
    width: 60px;
    padding: 0 10px 0 10px;
    border: 1px solid #000;
    border-radius: 10px;
    color: black;
  }

  .filter-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .view-detail {
    cursor: pointer;
  }

  /* Dropdown Button */
  .dropbtn {
    background-color: #3498db;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* Dropdown button on hover & focus */
  .dropbtn:hover,
  .dropbtn:focus {
    background-color: #2980b9;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }

  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
  .show {
    display: block;
  }
`;
